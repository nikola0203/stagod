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
    global $wpdb;

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
    
        $message_content[] = array(
          'author'    => $message_author,
          'recipient' => $message_recipient,
          'content'   => $message_content,
          'time'      => current_time( 'timestamp' )
        );
    
        $insert_data['message_content'] = maybe_serialize( $message_content );

        $wpdb->insert(
          $table_name,
          $insert_data
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
}