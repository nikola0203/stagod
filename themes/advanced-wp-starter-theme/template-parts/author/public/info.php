<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$current_user = get_user_by( 'id', get_queried_object_id() );
$image        = get_field( 'profile_image' );
?>
<div class="author-info-wrapper border border-light rounded-4 pb-8 mb-8">
  <div class="author-info-top border-light d-flex flex-column justify-content-center align-items-center p-lg-8">
    <?php
    if ( $image ) :
      ?>
      <div class="img-wrapper mb-6">
        <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover h-100 w-100' ); ?>
      </div>
    <?php
    endif;
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-2"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <h3 class="h5 mb-6 text-medium">Engleski jezik</h3>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <form action="<?php echo esc_url( add_query_arg( array( 'user_page' => 'messages', 'message_recipient' => get_queried_object_id() ), get_author_posts_url( get_current_user_id() ) ) ); ?>" method="post">
    <input type="hidden" name="message_recipient" value="<?php echo get_queried_object_id(); ?>">
    <button type="submit" class="btn btn-primary mx-8 d-block">Pošalji poruku</button>
  </form>
</div>

<!-- <form action="" method="post">
  <input type="hidden" name="message_author" value="<?php echo get_current_user_id(); ?>">
  <input type="hidden" name="message_recipient" value="<?php echo get_queried_object_id(); ?>">
  <textarea name="message_content" id="" cols="30" rows="10"></textarea>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->

<?php
// global $wpdb;

// print_var('current user ID ' . get_current_user_id());
// print_var('user profile '. get_queried_object_id());

// $table_name = $wpdb->prefix . 'chat';

// $data = array();

// $results = $wpdb->get_results( "SELECT message_content FROM $table_name WHERE message_author = ".get_current_user_id()." AND message_recipient = ".get_queried_object_id()."" );

// // print_var($results);

// if ( empty( $results ) ) {
//   if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
//     $insert_data = array(
//       'message_author'    => $_POST['message_author'],
//       'message_recipient' => $_POST['message_recipient']
//     );

//     $message_content[] = array(
//       'author'    => get_current_user_id(),
//       'recipient' => get_queried_object_id(),
//       'content'   => $_POST['message_content'],
//       'time'      => current_time( 'timestamp' )
//     );

//     $insert_data['message_content'] = maybe_serialize( $message_content );

//     $wpdb->insert(
//       $table_name,
//       $insert_data
//     );
//   }
// } else {
//   if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
//     $db_message_content = unserialize( $results[0]->message_content );

//     $post_message_content = array(
//       'author'    => get_current_user_id(),
//       'recipient' => get_queried_object_id(),
//       'content'   => $_POST['message_content'],
//       'time'      => current_time( 'timestamp' )
//     );

//     array_push( $db_message_content, $post_message_content );

//     $wpdb->update(
//       $table_name,
//       array(
//         'message_content' => maybe_serialize( $db_message_content )
//       ),
//       array( 'message_recipient' => get_queried_object_id() )
//     );
//   }
// }
