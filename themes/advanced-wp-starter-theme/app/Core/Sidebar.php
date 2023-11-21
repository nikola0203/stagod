<?php

namespace Awpt\Core;

/**
 * Sidebar.
 */
class Sidebar
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    add_action( 'widgets_init', array( $this, 'widgets_init' ) );
  }

  /**
   * Define the sidebar.
   */
  public function widgets_init()
  {
    register_sidebar(
      array(
        'name'          => esc_html__( 'Sidebar', 'awpt' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'awpt' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
      )
    );
    register_sidebar(
      array(
        'name'          => esc_html__( 'footer-menu-1', 'awpt' ),
        'id'            => 'footer-menu-1',
        'description'   => esc_html__( 'Add widgets here.', 'awpt' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title text-white fw-bold">',
        'after_title'   => '</h2>',
      )
    );
    register_sidebar(
      array(
        'name'          => esc_html__( 'footer-menu-2', 'awpt' ),
        'id'            => 'footer-menu-2',
        'description'   => esc_html__( 'Add widgets here.', 'awpt' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title text-white fw-bold">',
        'after_title'   => '</h2>',
      )
    );
    register_sidebar(
      array(
        'name'          => esc_html__( 'footer-menu-3', 'awpt' ),
        'id'            => 'footer-menu-3',
        'description'   => esc_html__( 'Add widgets here.', 'awpt' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title text-white fw-bold">',
        'after_title'   => '</h2>',
      )
    );
  }
}