<?php

namespace Awpt\Core;

/**
 * Use it to write your custom functions.s
 */
class Taxonomies
{
	/**
	 * Register default hooks and actions for WordPress.
	 *
	 * @return
	 */
	public function register() {
    add_action( 'init', [$this, 'register_taxonomy_services'] );
    add_action( 'admin_menu', [$this, 'services_taxonomy_admin_page'] );
    add_filter( 'parent_file', [$this, 'highlight_active_menu_item'] );
    add_filter( 'sanitize_user', [$this, 'disable_services_username_for_registration'] );
	}

  public function register_taxonomy_services()
  {
    $labels = array(
      'name'                       => _x( 'Services', 'Services Name', 'awpt' ),
      'singular_name'              => _x( 'Service', 'Service Name', 'awpt' ),
      'menu_name'                  => __( 'Services', 'awpt' ),
      'all_items'                  => __( 'All Services', 'awpt' ),
      'parent_item'                => __( 'Parent Service', 'awpt' ),
      'parent_item_colon'          => __( 'Parent Service:', 'awpt' ),
      'new_item_name'              => __( 'New Service Name', 'awpt' ),
      'add_new_item'               => __( 'Add Service', 'awpt' ),
      'edit_item'                  => __( 'Edit Service', 'awpt' ),
      'update_item'                => __( 'Update Service', 'awpt' ),
      'view_item'                  => __( 'View Service', 'awpt' ),
      'separate_items_with_commas' => __( 'Separate Service with commas', 'awpt' ),
      'add_or_remove_items'        => __( 'Add or remove services', 'awpt' ),
      'choose_from_most_used'      => __( 'Choose from the most used', 'awpt' ),
      'popular_items'              => __( 'Popular Services', 'awpt' ),
      'search_items'               => __( 'Search Services', 'awpt' ),
      'not_found'                  => __( 'Not Found', 'awpt' ),
      'no_terms'                   => __( 'No services', 'awpt' ),
      'items_list'                 => __( 'Services list', 'awpt' ),
      'items_list_navigation'      => __( 'Services list navigation', 'awpt' ),
    );
    $args = array(
      'labels'            => $labels,
      'hierarchical'      => true,
      'public'            => true,
      'show_ui'           => true,
      'show_admin_column' => true,
      'query_var'         => true,
      'rewrite'           => array( 'slug' => 'services' ),
      'show_in_rest'      => true,
    );
    register_taxonomy( 'services', 'user', $args );
  }

  /**
   * Admin page for the 'services' taxonomy
   */
  public function services_taxonomy_admin_page()
  {
    $tax = get_taxonomy( 'services' );

    add_users_page(
      esc_attr( $tax->labels->menu_name ),
      esc_attr( $tax->labels->menu_name ),
      $tax->cap->manage_terms,
      'edit-tags.php?taxonomy=' . $tax->name
    );
  }

  /**
   * Update parent file name to fix the selected menu issue
   */
  public function highlight_active_menu_item( $parent_file )
  {
    global $submenu_file;

    if ( isset( $_GET['taxonomy'] ) && $_GET['taxonomy'] == 'services' && $submenu_file == 'edit-tags.php?taxonomy=services' ) {
      $parent_file = 'users.php';
    }

    return $parent_file;
  }

  /**
   * @param string $username The username of the user before registration is complete.
   */
  function disable_services_username_for_registration( $username )
  {
    if ( 'services' === $username ) {
      $username = '';
    }

    return $username;
  }
}