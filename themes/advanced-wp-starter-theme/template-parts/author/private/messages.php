<?php
/**
 * List User Messages
 */

if ( isset( $_GET['message_recipient'] ) ) :
  get_template_part( 'template-parts/author/private/chat' );
else :
  get_template_part( 'template-parts/author/private/chat-list' );
endif;
