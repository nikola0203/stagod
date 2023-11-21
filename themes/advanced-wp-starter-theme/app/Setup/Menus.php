<?php

namespace Awpt\Setup;

/**
 * Menu.
 */
class Menus
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    add_action( 'after_setup_theme', array( $this, 'menus' ) );
  }

  public function menus()
  {
    register_nav_menus(
      array(
        'primary'       => esc_html__( 'Primary Menu', 'awpt' ),
        'footer menu 1' => esc_html__( 'Footer Menu 1', 'awpt' ),
        'footer menu 2' => esc_html__( 'Footer Menu 2', 'awpt' ),
        'footer menu 3' => esc_html__( 'Footer Menu 3', 'awpt' ),
      )
    );
  }
}