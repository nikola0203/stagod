<?php
/**
 * User Chat List
 */

use Awpt\Chat\Chat;

$chat        = new Chat();
$chat_arrays = $chat->get_current_user_chat_data();

if ( ! empty( $chat_arrays ) ) :
  foreach ( $chat_arrays as $chat ) :
    $message_content      = unserialize( $chat->message_content );
    $message_author_id    = $chat->message_author;
    $message_recipient_id = $chat->message_recipient;

    if ( $message_author_id != get_current_user_id() ) {
      $filter_recipient_id = $message_author_id;
    }
    
    if ( $message_recipient_id != get_current_user_id() ) {
      $filter_recipient_id = $message_recipient_id;
    }
    
    $user = get_user_by( 'id', $filter_recipient_id );
    ?>
    <div class="border p-4 p-xl-8 mb-6 rounded-4">
      <a href="<?php echo esc_url( add_query_arg( array( 'chat_id' => $chat->id, 'message_recipient' => $user->id ) ) ); ?>">
        <?php
        if ( $user->data->display_name ) :
          ?>
          <h2 class="h4 mb-0"><?php esc_html_e( $user->data->display_name ); ?></h2>
          <?php
        endif;
        ?>
      </a>
    </div>
    <?php
  endforeach;
endif;
