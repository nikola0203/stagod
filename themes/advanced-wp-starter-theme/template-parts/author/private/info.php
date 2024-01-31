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
      <?php
    endif;
    ?>
    <hr>
  </div>
  <div class="author-info-bottom">
    <ul>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'messages', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Poruke <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'notifications', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Obavestenja <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'ratings', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Ocene <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'saved', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Sacuvano <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'edit-profile', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Podesavanje Profila <?php echo icon_arrow_down(); ?></a></li>
    </ul>
  </div>
  <!-- <a href="" class="btn btn-transparent">Klikni za broj telefona</a>
  <a href="" class="btn btn-primary">Pošalji poruku</a> -->
</div>

<!-- <form action="" method="post">
  <input type="hidden" name="message_author" value="<?php // echo get_current_user_id(); ?>">
  <input type="hidden" name="message_recipient" value="<?php // echo get_queried_object_id(); ?>">
  <textarea name="message_content" id="" cols="30" rows="10"></textarea>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->

<?php
global $wpdb;

$sql_query = $wpdb->prepare(
  "SELECT message_content FROM %i WHERE message_author = %d AND message_recipient = %d",
  array(
    $wpdb->prefix . 'chat',
    get_current_user_id(),
    get_queried_object_id()
  )
);

$results = $wpdb->get_results( $sql_query );

if ( empty( $results ) ) {
  if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
    $insert_data = array(
      'message_author'    => $_POST['message_author'],
      'message_recipient' => $_POST['message_recipient']
    );

    $message_content[] = array(
      'author'    => get_current_user_id(),
      'recipient' => get_queried_object_id(),
      'content'   => $_POST['message_content'],
      'time'      => current_time( 'timestamp' )
    );

    $insert_data['message_content'] = maybe_serialize( $message_content );

    $wpdb->insert(
      $wpdb->prefix . 'chat',
      $insert_data
    );
  }
} else {
  if ( ! empty( $_POST['message_author'] ) && ! empty( $_POST['message_recipient'] ) && ! empty( $_POST['message_content'] ) ) {
    $db_message_content = unserialize( $results[0]->message_content );

    $post_message_content = array(
      'author'    => get_current_user_id(),
      'recipient' => get_queried_object_id(),
      'content'   => $_POST['message_content'],
      'time'      => current_time( 'timestamp' )
    );

    array_push( $db_message_content, $post_message_content );

    $wpdb->update(
      $wpdb->prefix . 'chat',
      array(
        'message_content' => maybe_serialize( $db_message_content )
      ),
      array( 'message_recipient' => get_queried_object_id() )
    );
  }
}
