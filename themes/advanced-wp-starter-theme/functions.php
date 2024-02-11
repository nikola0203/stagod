<?php
/**
 *
 * This theme uses PSR-4 and OOP logic instead of procedural coding
 * Every function, hook and action is properly divided and organized inside related folders and files
 * Use the file `app/Custom/Custom.php` to write your custom functions
 *
 * @package awpt
 */

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) :
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
endif;

if ( class_exists( 'Awpt\\Init' ) ) :
	Awpt\Init::register_services();
endif;

// Register Custom Taxonomy
function custom_taxonomy() {
  $labels = array(
    'name'                       => _x( 'Services', 'Services Name', 'text_domain' ),
    'singular_name'              => _x( 'Service', 'Service Name', 'text_domain' ),
    'menu_name'                  => __( 'Services', 'text_domain' ),
    'all_items'                  => __( 'All Services', 'text_domain' ),
    'parent_item'                => __( 'Parent Service', 'text_domain' ),
    'parent_item_colon'          => __( 'Parent Service:', 'text_domain' ),
    'new_item_name'              => __( 'New Service Name', 'text_domain' ),
    'add_new_item'               => __( 'Add Service', 'text_domain' ),
    'edit_item'                  => __( 'Edit Service', 'text_domain' ),
    'update_item'                => __( 'Update Service', 'text_domain' ),
    'view_item'                  => __( 'View Service', 'text_domain' ),
    'separate_items_with_commas' => __( 'Separate Service with commas', 'text_domain' ),
    'add_or_remove_items'        => __( 'Add or remove services', 'text_domain' ),
    'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
    'popular_items'              => __( 'Popular Services', 'text_domain' ),
    'search_items'               => __( 'Search Services', 'text_domain' ),
    'not_found'                  => __( 'Not Found', 'text_domain' ),
    'no_terms'                   => __( 'No services', 'text_domain' ),
    'items_list'                 => __( 'Services list', 'text_domain' ),
    'items_list_navigation'      => __( 'Services list navigation', 'text_domain' ),
  );
  $args = array(
    // 'labels'            => $labels,
    // 'hierarchical'      => true,
    // 'public'            => true,
    // 'has_archive' => true,
    // 'show_ui'           => true,
    // 'show_admin_column' => true,
    // 'show_in_nav_menus' => true,
    // 'publicly_queryable' => true,
    // 'rewrite' => array( 'slug' => 'services' ),
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
add_action( 'init', 'custom_taxonomy', 0 );

/**
 * Create two taxonomies, genres and writers for the post type "book".
 *
 * @see register_post_type() for registering custom post types.
 */
function wpdocs_create_book_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Genres', 'taxonomy general name', 'textdomain' ),
		'singular_name'     => _x( 'Genre', 'taxonomy singular name', 'textdomain' ),
		'search_items'      => __( 'Search Genres', 'textdomain' ),
		'all_items'         => __( 'All Genres', 'textdomain' ),
		'parent_item'       => __( 'Parent Genre', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Genre:', 'textdomain' ),
		'edit_item'         => __( 'Edit Genre', 'textdomain' ),
		'update_item'       => __( 'Update Genre', 'textdomain' ),
		'add_new_item'      => __( 'Add New Genre', 'textdomain' ),
		'new_item_name'     => __( 'New Genre Name', 'textdomain' ),
		'menu_name'         => __( 'Genre', 'textdomain' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'genre' ),
	);

	register_taxonomy( 'genre', array( 'book' ), $args );

	unset( $args );
	unset( $labels );

	// Add new taxonomy, NOT hierarchical (like tags)
	$labels = array(
		'name'                       => _x( 'Writers', 'taxonomy general name', 'textdomain' ),
		'singular_name'              => _x( 'Writer', 'taxonomy singular name', 'textdomain' ),
		'search_items'               => __( 'Search Writers', 'textdomain' ),
		'popular_items'              => __( 'Popular Writers', 'textdomain' ),
		'all_items'                  => __( 'All Writers', 'textdomain' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Writer', 'textdomain' ),
		'update_item'                => __( 'Update Writer', 'textdomain' ),
		'add_new_item'               => __( 'Add New Writer', 'textdomain' ),
		'new_item_name'              => __( 'New Writer Name', 'textdomain' ),
		'separate_items_with_commas' => __( 'Separate writers with commas', 'textdomain' ),
		'add_or_remove_items'        => __( 'Add or remove writers', 'textdomain' ),
		'choose_from_most_used'      => __( 'Choose from the most used writers', 'textdomain' ),
		'not_found'                  => __( 'No writers found.', 'textdomain' ),
		'menu_name'                  => __( 'Writers', 'textdomain' ),
	);

	$args = array(
		'hierarchical'          => false,
		'labels'                => $labels,
		'show_ui'               => true,
		'show_admin_column'     => true,
    // 'publicly_queryable' 
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'writer' ),
	);

	register_taxonomy( 'writer', 'book', $args );
}
// hook into the init action and call create_book_taxonomies when it fires
// add_action( 'init', 'wpdocs_create_book_taxonomies', 0 );

/**
 * Admin page for the 'departments' taxonomy
 */
function cb_add_departments_taxonomy_admin_page() {
  $tax = get_taxonomy( 'services' );

  add_users_page(
    esc_attr( $tax->labels->menu_name ),
    esc_attr( $tax->labels->menu_name ),
    $tax->cap->manage_terms,
    'edit-tags.php?taxonomy=' . $tax->name
  );
}
add_action( 'admin_menu', 'cb_add_departments_taxonomy_admin_page' );

/**
 * Unsets the 'posts' column and adds a 'users' column on the manage departments admin page.
 */
function cb_manage_departments_user_column( $columns ) {
  unset( $columns['posts'] );

  $columns['users'] = __( 'Users' );

  return $columns;
}
add_filter( 'manage_edit-departments_columns', 'cb_manage_departments_user_column' );

/**
 * @param string $display WP just passes an empty string here.
 * @param string $column The name of the custom column.
 * @param int $term_id The ID of the term being displayed in the table.
 */
function cb_manage_departments_column( $display, $column, $term_id ) {
  if ( 'users' === $column ) {
    $term = get_term( $term_id, 'services' );
    echo $term->count;
  }
}
add_filter( 'manage_services_custom_column', 'cb_manage_departments_column', 10, 3 );

/**
 * @param string $username The username of the user before registration is complete.
 */
function cb_disable_departments_username( $username ) {
  if ( 'services' === $username ) {
    $username = '';
  }

  return $username;
}
add_filter( 'sanitize_user', 'cb_disable_departments_username' );

/**
 * Update parent file name to fix the selected menu issue
 */
function cb_change_parent_file( $parent_file ) {
  global $submenu_file;

  if ( isset( $_GET['taxonomy'] ) && $_GET['taxonomy'] == 'services' && $submenu_file == 'edit-tags.php?taxonomy=services' ) {
    $parent_file = 'users.php';
  }

  return $parent_file;
}
add_filter( 'parent_file', 'cb_change_parent_file' );

/**
 * @param object $user The user object currently being edited.
 */
function cb_edit_user_department_section( $user ) {
  global $pagenow;

  $tax = get_taxonomy( 'services' );

  /* Make sure the user can assign terms of the services taxonomy before proceeding. */
  if ( !current_user_can( $tax->cap->assign_terms ) )
    return;

  /* Get the terms of the 'services' taxonomy. */
  $terms = get_terms( 'services', array( 'hide_empty' => false ) ); ?>

  <h3><?php _e( 'services' ); ?></h3>

  <table class="form-table">

    <tr>
      <th><label for="services"><?php _e( 'Allocated services' ); ?></label></th>

      <td><?php

      /* If there are any services terms, loop through them and display checkboxes. */
      if ( !empty( $terms ) ) {
          echo cb_custom_form_field('services', $terms, $user->ID);
      }

      /* If there are no services terms, display a message. */
      else {
        _e( 'There are no services available.' );
      }

      ?></td>
    </tr>

  </table>
<?php }

// add_action( 'show_user_profile', 'cb_edit_user_department_section' );
// add_action( 'edit_user_profile', 'cb_edit_user_department_section' );
// add_action( 'user_new_form', 'cb_edit_user_department_section' );


// Register Custom Widgets

function cb_widgets_init() {

}
add_action( 'widgets_init', 'cb_widgets_init' );

add_theme_support( 'custom-logo' );
