<?php
/**
 * User Chat
 */

use Awpt\Chat\Chat;

$chat              = new Chat();
$chat_id           = ( isset( $_GET['chat_id'] ) ) ? $_GET['chat_id'] : false;
$message_recipient = ( isset( $_GET['message_recipient'] ) ) ? $_GET['message_recipient'] : false;
$user              = get_user_by( 'id', $message_recipient );
$messages          = $chat->get_message_content( $chat_id );

if ( $user->user_firstname && $user->user_lastname ) :
  ?>
  <h2 class="chat-title h3 mb-6"><a href="<?php echo esc_url( get_author_posts_url( get_current_user_id() ) . 'messages' ); ?>"><?php echo icon_arrow_down(); ?></a> <?php esc_html_e( $user->user_firstname . '&nbsp;' . $user->user_lastname ); ?></h2>
  <?php
endif;
?>
<div class="chat rounded-4 p-4 p-xl-8 bg-info mb-2">
  <?php
  if ( ! empty( $messages ) ) :
    foreach ( $messages as $message_key => $message ) :
      if ( $message_key == 0 ) :
        ?>
        <div class="text-center text-gray-200 fw-bold text-smaller mb-6"><?php esc_html_e( date( 'd.M.Y', $message['time'] ) ); ?></div>
        <?php
      endif;
      if ( $message_key > 0 ) :
        $prev_time = date( 'd.M.Y', $messages[$message_key - 1]['time'] );
        $cur_time  = date( 'd.M.Y', $message['time'] );
        if ( $prev_time != $cur_time ) :
          ?>
          <div class="text-center text-gray-200 fw-bold text-smaller mb-6"><?php esc_html_e( date( 'd.M.Y', $message['time'] ) ); ?></div>
          <?php
        endif;
      endif;
      ?>
      <div class="row <?php echo ( $message['author'] == get_current_user_id() ) ? 'justify-content-end' : ''; ?>">
        <div class="col-lg-7">
          <div class="bg-white rounded-4 mb-8 p-6">
            <div class="text-black fw-medium">
              <?php echo wp_kses_post( $message['content'] ); ?>
            </div>
            <div class="d-flex justify-content-end text-gray-200 fw-bold text-smaller">
              <?php esc_html_e( date( 'H:i', $message['time'] ) . 'h' ); ?>
            </div>
          </div>
        </div>
      </div>
      <?php
    endforeach;
  endif;
  ?>
  </div>
  <div class="chat-form">
    <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
      <input type="hidden" name="action" value="send_message_to_user">
      <?php wp_nonce_field( 'nonce-send-message-to-user', 'nonce_send_message_to_user' ); ?>
      <input type="hidden" name="message_recipient" value="<?php esc_attr_e( $message_recipient ); ?>">
      <input type="hidden" name="message_author" value="<?php esc_attr_e( get_current_user_id() ); ?>">
      <textarea placeholder="Unesite poruku" name="message_content" id="" cols="30" rows="10" required class="text-small border-light bg-white"></textarea>
      <button type="submit" class="btn btn-primary">Posalji Poruku</button>
    </form>
  </div>

<?php
