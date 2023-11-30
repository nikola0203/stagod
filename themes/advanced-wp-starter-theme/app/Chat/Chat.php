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
}