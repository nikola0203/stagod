<?php
/**
 * User Chat
 */

use Awpt\Chat\Chat;

$chat              = new Chat();
$chat_id           = ( isset( $_GET['chat_id'] ) ) ? $_GET['chat_id'] : false;
// $user_id           = ( isset( $_GET['user_id'] ) ) ? $_GET['user_id'] : false;
$message_recipient = ( isset( $_GET['message_recipient'] ) ) ? $_GET['message_recipient'] : false;
$user              = get_user_by( 'id', $message_recipient );
$message_author    = ( isset( $_POST['message_author'] ) ) ? $_POST['message_author'] : 0;
$message_content   = ( isset( $_POST['message_content'] ) ) ? $_POST['message_content'] : '';

$chat->send_message_to_user( $chat_id, $message_author, $message_recipient, $message_content );

$messages = $chat->get_message_content( $chat_id );

// print_var($messages);

if ( $user->user_firstname && $user->user_lastname ) :
  ?>
  <h2 class="h3 mb-6"><a href="<?php echo esc_url( add_query_arg( array( 'user_page' => 'messages' ), get_author_posts_url( get_current_user_id() ) ) ); ?>"><?php echo icon_arrow_down(); ?></a> <?php esc_html_e( $user->user_firstname . '&nbsp;' . $user->user_lastname ); ?></h2>
  <?php
endif;
?>
<div class="border rounded-4 p-4 p-xl-8 bg-light">
  <?php
  if ( ! empty( $messages ) ) :
    foreach ( $messages as $message ) :
      ?>
      <div class="row <?php echo ( $message['author'] == get_current_user_id() ) ? 'justify-content-end' : ''; ?>">
        <div class="col-lg-7">
          <div class="bg-white rounded-4 mb-8 p-6">
            <?php echo wp_kses_post( $message['content'] ); ?>
          </div>
        </div>
      </div>
      <?php
    endforeach;
  endif;
  ?>
  <form action="" method="post">
    <input type="hidden" name="message_author" value="<?php esc_attr_e( get_current_user_id() ); ?>">
    <textarea name="message_content" id="" cols="30" rows="10"></textarea>
    <button type="submit" class="btn btn-primary">Posalji Poruku</button>
  </form>
</div>
<?php
