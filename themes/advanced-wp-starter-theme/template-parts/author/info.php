<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$current_user = get_user_by( 'id', get_queried_object_id() );
$image        = get_field( 'profile_image' );
?>
<div class="author-info-wrapper border rounded-4">
  <div class="author-info-top d-flex flex-column justify-content-center align-items-center p-lg-8">
    <?php
    if ( $image ) :
      Acf::image( $image );
    endif;
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-2"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <h3 class="h5 mb-6">Engleski jezik</h3>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <a href="" class="btn btn-transparent">Klikni za broj telefona</a>
  <a href="" class="btn btn-primary">Pošalji poruku</a>
</div>

<form action="" method="post">
  <input type="hidden" name="message_author" value="<?php echo get_current_user_id(); ?>">
  <input type="hidden" name="message_recipient" value="<?php echo get_queried_object_id(); ?>">
  <textarea name="message_content" id="" cols="30" rows="10"></textarea>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<?php
global $wpdb;

print_var('current user ID ' . get_current_user_id());
print_var('user profile '. get_queried_object_id());

$table_name = $wpdb->prefix . 'chat';

$data = array();

$results = $wpdb->get_results( "SELECT message_content FROM $table_name WHERE message_author = ".get_current_user_id()."" );

$db_message_content = unserialize( $results[0]->message_content );

print_var($db_message_content);
// print_var($_POST);

if ( empty( $results ) ) {
  if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
    $insert_data = array(
      'message_author'    => $_POST['message_author'],
      'message_recipient' => $_POST['message_recipient']
    );

    $message_content[] = array(
      'author'  => get_current_user_id(),
      'content' => $_POST['message_content'],
      'time'    => current_time( 'timestamp' )
    );

    $insert_data['message_content'] = maybe_serialize( $message_content );

    $wpdb->insert(
      $table_name,
      $insert_data
    );
  }
} else {
  if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
    $update_data = array(
      'message_author'    => $_POST['message_author'],
      'message_recipient' => $_POST['message_recipient']
    );
    
    $db_message_content = unserialize( $results[0]->message_content );
    
    $post_message_content = array(
      'author'  => get_current_user_id(),
      'content' => $_POST['message_content'],
      'time'    => current_time( 'timestamp' )
    );
    
    array_push( $db_message_content, $post_message_content );

    $update_data['message_content'] = maybe_serialize( $db_message_content );

    $wpdb->update(
      $table_name,
      $update_data,
      array( 'message_author' => get_queried_object_id() )
    );
  }
}

// foreach ( $results as $result ) {
//   echo $result->name . ' ' . $result->text . '<br>';
// }

// print_var(unserialize( $results[0]->message_content ));

// $data['message_content'] = array( unserialize( $results[0]->message_content ) );

// if ( isset( $_POST['message_author'] ) ) {
//   $data['message_author'] = $_POST['message_author'];
// }
// if ( isset( $_POST['message_recipient'] ) ) {
//   $data['message_recipient'] = $_POST['message_recipient'];
// }
if ( isset( $_POST['message_content'] ) ) {

  // $post_data_message = array(
  //   'message_author'  => 2,
  //   'message_content' => $_POST['message_content']
  // );

  // array_push( $data['message_content'], $post_data_message );

  // print_var($data['message_content']);
  // print_var(maybe_serialize( $data['message_content'] ));

  // maybe_serialize( $data['message_content'] );

  $data['message_content'] = maybe_serialize( $_POST['message_content'] );
  // $message_content_serialized = maybe_serialize( $data['message_content'] );
  
  // $data['message_content'] = $message_content_serialized;
}

// print_var($data);

// if ( isset( $_POST['message_author'] ) && isset( $_POST['message_recipient'] ) && isset( $_POST['message_content'] ) ) {
//   $wpdb->insert(
//     $table_name,
//     $data
//   );
// }

// if ( isset( $_POST['message_author'] ) && isset( $_POST['message_recipient'] ) && isset( $_POST['message_content'] ) ) {
//   $wpdb->update(
//     $table_name,
//     $data,
//     array( 'message_author' => 1 )
//   );
// }