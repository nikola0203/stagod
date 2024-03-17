<?php

namespace Awpt\Chat;

/**
 * Chat.
 */
class Chat
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    // add_action( 'init', array( $this, 'register_chat_field' ) );
    
    // add_action( 'admin_post_nopriv_send_message_to_user', array( $this, 'send_message_to_user' ) );
    add_action( 'admin_post_send_message_to_user', array( $this, 'send_message_to_user' ) );
  }

  public function register_chat_field()
  {
    global $wpdb;
    $table_name   = $wpdb->prefix . 'chat';
    $wpdb_collate = $wpdb->collate;

    $sql = "CREATE TABLE {$table_name}
    (
      id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      message_author bigint(20) unsigned,
      message_recipient bigint(20) unsigned,
      message_content longtext,
      message_date datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
      PRIMARY KEY  (id)
    )
    COLLATE {$wpdb_collate}";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta( $sql );
  }

  /**
   * Get chat ids based on the provided user ID
   *
   * @param integer $author_id
   * @return array
   */
  public function get_chat_ids_by_author( $author_id ) : array
  {
    global $wpdb;

    if ( ! $author_id ) {
      return [];
    }

    $sql_query = $wpdb->prepare(
      "SELECT id FROM %i WHERE message_author = %d",
      array(
        $wpdb->prefix . 'chat',
        $author_id,
      )
    );

    $chat_arrays = $wpdb->get_results( $sql_query );

    if ( empty( $chat_arrays ) ) {
      return [];
    } else {
      return $chat_arrays;
    }
  }

  /**
   * Get chat ids based on the provided user ID
   *
   * @param integer $recipient_id
   * @return array
   */
  public function get_chat_ids_by_recipient( $recipient_id ) : array
  {
    global $wpdb;

    if ( ! $recipient_id ) {
      return [];
    }

    $sql_query = $wpdb->prepare(
      "SELECT id FROM %i WHERE message_recipient = %d",
      array(
        $wpdb->prefix . 'chat',
        $recipient_id,
      )
    );

    $chat_arrays = $wpdb->get_results( $sql_query );

    if ( empty( $chat_arrays ) ) {
      return [];
    } else {
      return $chat_arrays;
    }
  }

  public function get_current_user_chat_data() : array
  {
    global $wpdb;

    if ( ! get_current_user_id() ) {
      return [];
    }

    $sql_query = $wpdb->prepare(
      "SELECT * FROM %i WHERE message_author = %d OR message_recipient = %d",
      array(
        $wpdb->prefix . 'chat',
        get_current_user_id(),
        get_current_user_id()
      )
    );

    $chat_arrays = $wpdb->get_results( $sql_query );

    if ( empty( $chat_arrays ) ) {
      return [];
    } else {
      return $chat_arrays;
    }
  }

  /**
   * Update the db with the newly created message from the user chat.
   *
   * @param integer $chat_id
   * @param integer $message_author
   * @param integer $message_recipient
   * @param string $message_content
   * @return void
   */
  public function send_message_to_user( $chat_id, $message_author = 0, $message_recipient = 0, $message_content = '' ) : void
  {
    check_admin_referer( 'nonce-send-message-to-user', 'nonce_send_message_to_user' );

    global $wpdb;

    $message_recipient = ( isset( $_POST['message_recipient'] ) ) ? $_POST['message_recipient'] : false;
    $user              = get_user_by( 'id', $message_recipient );
    $message_author    = ( isset( $_POST['message_author'] ) ) ? $_POST['message_author'] : 0;
    $message_content   = ( isset( $_POST['message_content'] ) ) ? $_POST['message_content'] : '';
    $chat_id           = $this->get_users_chat_id( get_current_user_id(), $message_recipient );

    $table_name = $wpdb->prefix . 'chat';
    $get_message_content_query = $wpdb->prepare(
      "SELECT message_content FROM %i WHERE id = %d",
      array(
        $wpdb->prefix . 'chat',
        $chat_id
      )
    );
    $get_message_content = $wpdb->get_var( $get_message_content_query );
    $get_message_content = unserialize( $get_message_content );

    if ( empty( $get_message_content ) ) {
      if ( 0 != $message_author && 0 != $message_recipient && '' != $message_content ) {
        $insert_data = array(
          'message_author'    => $message_author,
          'message_recipient' => $message_recipient
        );
    
        $post_message_content[] = array(
          'author'    => $message_author,
          'recipient' => $message_recipient,
          'content'   => $message_content,
          'time'      => current_time( 'timestamp' )
        );
    
        $insert_data['message_content'] = maybe_serialize( $post_message_content );

        $wpdb->insert(
          $table_name,
          $insert_data,
          array (
            '%d',
            '%d',
            '%s'
          )
        );
      }
    } else {
      if ( 0 != $message_author && 0 != $message_recipient && '' != $message_content ) {
        $post_message_content = array(
          'author'    => $message_author,
          'recipient' => $message_recipient,
          'content'   => $message_content,
          'time'      => current_time( 'timestamp' )
        );
    
        array_push( $get_message_content, $post_message_content );

        $wpdb->update(
          $table_name,
          array(
            'message_content' => maybe_serialize( $get_message_content )
          ),
          array(
            'id' => $chat_id
          ),
          array(
            '%s'
          ),
          array(
            '%d'
          )
        );
      }
    }

    $url = add_query_arg( array( 'user_page' => 'messages', 'chat_id' => $this->get_users_chat_id( $message_author, $message_recipient ), 'message_recipient' => $user->ID ), get_author_posts_url( $message_author ) );

    wp_redirect( $url );
  }

  /**
   * Get message content array form the provided chat ID.
   *
   * @param integer $chat_id
   * @return array
   */
  public function get_message_content( $chat_id ) : array
  {
    global $wpdb;

    if ( ! $chat_id ) {
      return [];
    }

    $sql_query = $wpdb->prepare(
      "SELECT message_content FROM %i WHERE id = %d",
      array(
        $wpdb->prefix . 'chat',
        $chat_id
      )
    );

    $get_messages = $wpdb->get_var( $sql_query );

    return ( ! empty( $get_messages ) ) ? unserialize( ( $get_messages ) ) : [];
  }

  /**
   * Check if current user have active chat with the provided user.
   * Return recipient user id.
   *
   * @param integer $recipient_id
   * @return integer
   */
  public function get_current_user_chat_recipient_id( $recipient_id = 0 ) : int
  {
    if ( ! $recipient_id ) {
      return 0;
    }

    $chat_arrays = $this->get_current_user_chat_data();
    $user        = 0;
    $return_id   = 0;

    if ( ! empty( $chat_arrays ) ) {
      foreach ( $chat_arrays as $chat ) {
        $message_author_id    = $chat->message_author;
        $message_recipient_id = $chat->message_recipient;

        if ( $message_author_id != get_current_user_id() ) {
          $filter_recipient_id = $message_author_id;
        }
        
        if ( $message_recipient_id != get_current_user_id() ) {
          $filter_recipient_id = $message_recipient_id;
        }
        
        $user = get_user_by( 'id', $filter_recipient_id );

        if ( $user ) {
          if ( $recipient_id == $user->get_id() ) {
            $return_id = $user->ID;
          }
        }
      }
    }

    return $return_id;
  }

  public function get_users_chat_id( $current_user_id = 0, $recipient_id = 0 ) : int
  {
    if ( ! $recipient_id ) {
      return 0;
    }

    $chat_arrays = $this->get_current_user_chat_data();
    $user        = 0;
    $return_id   = 0;

    if ( ! empty( $chat_arrays ) ) {
      foreach ( $chat_arrays as $chat ) {
        $message_author_id    = $chat->message_author;
        $message_recipient_id = $chat->message_recipient;

        if ( $message_author_id != $current_user_id ) {
          $filter_recipient_id = $message_author_id;
        }
        
        if ( $message_recipient_id != $current_user_id ) {
          $filter_recipient_id = $message_recipient_id;
        }
        
        $user = get_user_by( 'id', $filter_recipient_id );

        if ( $user ) {
          if ( $recipient_id == $user->ID ) {
            $return_id = $chat->id;
          }
        }
      }
    }

    return $return_id;
  }
}