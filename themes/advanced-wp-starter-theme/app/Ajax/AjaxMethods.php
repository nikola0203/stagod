<?php

namespace Awpt\Ajax;

/**
 * Ajax Methods.
 */
class AjaxMethods
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
	public function register() 
	{
    add_action( 'wp_ajax_posts_archive_load_more_posts', [$this, 'posts_archive_load_more_posts'] );
    add_action( 'wp_ajax_nopriv_posts_archive_load_more_posts', [$this, 'posts_archive_load_more_posts'] );

    add_action( 'wp_ajax_filter_posts_by_category', [$this, 'filter_posts_by_category'] );
    add_action( 'wp_ajax_nopriv_filter_posts_by_category', [$this, 'filter_posts_by_category'] );

    add_action( 'wp_ajax_save_favorite_user', [$this, 'save_favorite_user'] );
    add_action( 'wp_ajax_delete_favorite_user', [$this, 'delete_favorite_user'] );

    add_action( 'wp_ajax_edit_personal_data', [$this, 'edit_personal_data'] );
    add_action( 'wp_ajax_change_current_user_email', [$this, 'change_current_user_email'] );
    add_action( 'wp_ajax_change_current_user_password', [$this, 'change_current_user_password'] );
    add_action( 'wp_ajax_delete_account', [$this, 'delete_account'] );
    add_action( 'wp_ajax_upload_profile_image', [$this, 'upload_profile_image'] );
  }

  function upload_profile_image()
  {
    check_ajax_referer( 'nonce-upload-profile-image', 'nonce' );

    if ( empty( $_FILES['image'] ) ) {
      wp_send_json_error( 'No file uploaded.' );
      return;
    }

    // Load image.
    $image  = $_FILES['image'];
    $upload = wp_handle_upload( $image, array( 'test_form' => false ) );

    if ( ! empty( $upload['error'] ) ) {
      wp_send_json_error( $upload['error'] );
      return;
    }

    // Delete current image.
    $user               = get_user_by( 'id', get_current_user_id() );
    $current_user_image = get_field( 'profile_image', $user );
    wp_delete_attachment( $current_user_image['ID'], true );

    // Upload to media library
    $attachment_id = wp_insert_attachment(
      array(
        'guid'           => $upload['url'], 
        'post_mime_type' => $upload['type'],
        'post_title'     => sanitize_file_name( $file['name'] ),
        'post_content'   => '',
        'post_status'    => 'inherit',
      ),
      $upload['file']
    );

    // Generate metadata
    require_once( ABSPATH . 'wp-admin/includes/image.php' );
    $attach_data = wp_generate_attachment_metadata( $attachment_id, $upload['file'] );
    wp_update_attachment_metadata( $attachment_id, $attach_data );

    // Poveži sa ACF poljem
    update_field( sanitize_text_field( 'profile_image' ), $attachment_id, $user );

    wp_send_json(
      array(
        'attachment_id' => $attachment_id,
        'url'           => $upload['url'],
      )
    );
  }

  function save_favorite_user()
  {
    check_ajax_referer( 'nonce-favorite-users', 'nonce' );

    $user_id            = (int) $_POST['user_id'];
    $current_user_id    = (int) $_POST['current_user_id'];
    $delete_user        = (string) $_POST['delete_user'];
    $get_favorite_users = get_user_meta( $current_user_id, 'favorite_users', true );

    if ( $delete_user == 'true' ) {
      // Save favorite user.
      if ( ! empty( $get_favorite_users ) ) {
        if ( ! in_array( $user_id, $get_favorite_users ) ) {
          array_push( $get_favorite_users, $user_id );
          update_user_meta( $current_user_id, 'favorite_users', $get_favorite_users ); 
        }
      } else {
        $favorite_users = [$user_id];
        update_user_meta( $current_user_id, 'favorite_users', $favorite_users );
      }
    } else {
      // Delete favorite user.
      if ( ! empty( $get_favorite_users ) ) {
        if ( in_array( $user_id, $get_favorite_users ) ) {
          $element_index = array_search( $user_id, $get_favorite_users );
          array_splice( $get_favorite_users, $element_index, 1);
          update_user_meta( $current_user_id, 'favorite_users', $get_favorite_users );
        }
      } else {
        $favorite_users = [$user_id];
        update_user_meta( $current_user_id, 'favorite_users', $favorite_users );
      }
    }
    
    $data = array(
      'user_id'            => $user_id,
      'current_user_id'    => $current_user_id,
      'get_favorite_users' => $get_favorite_users,
      'delete_user'        => $delete_user,
    );

    wp_send_json( $data );
  }

  function delete_favorite_user()
  {
    $user_id = (int) $_POST['user_id'];
    $current_user_id = (int) $_POST['current_user_id'];
    
    $get_favorite_users = get_user_meta( $current_user_id, 'favorite_users', true );
      if ( ! empty( $get_favorite_users ) ) {
        if ( in_array( $user_id, $get_favorite_users ) ) {
          $element_index = array_search( $user_id, $get_favorite_users );
          array_splice( $get_favorite_users, $element_index, 1);
          update_user_meta( $current_user_id, 'favorite_users', $get_favorite_users );
        }
      } else {
        $favorite_users = [
          $user_id
        ];
        update_user_meta( $current_user_id, 'favorite_users', $favorite_users );
      }

    $data = array(
      'user_id'            => $user_id,
      'current_user_id'    => $current_user_id,
      'get_favorite_users' => $get_favorite_users,
    );

    wp_send_json( $data );
  }

  /**
   * Load more posts on posts archive.
   *
   * @return html
   */
  public function posts_archive_load_more_posts()
  {
    check_ajax_referer( 'load-more-posts-nonce', 'nonce' );

    $args = array(
      'posts_per_page' => 4,
      'post_type'      => array( 'our-work' ),
      'post_status'    => 'publish',
      'paged'          => $_POST['page'] + 1
    );

    if ( $_POST['cat_slug'] != 'all' ) {
      $args['tax_query'] = array(
        array(
          'taxonomy' => 'our-work-categories',
          'field'    => 'slug',
          'terms'    => $_POST['cat_slug']
        )
      );
    }

    $filter_query = new \WP_Query( $args );
   
    if ( $filter_query->have_posts() ) :
      while( $filter_query->have_posts() ) :
        $filter_query->the_post();
        ?>
        <div class="col-lg-6 mb-8">
          <div class="showroom-block-wrapper relative p-6 d-flex justify-content-between flex-column showroom-block-wrapper-<?php echo get_the_ID(); ?> bg-cover lazyload">
            <style>
              .showroom-block-wrapper-<?php echo get_the_ID(); ?>.lazyloaded {
                background-image: url(<?php echo get_the_post_thumbnail_url( get_the_id(), 'medium_large' ); ?>);
              }
              @media screen and (min-width:992px) {
                .showroom-block-wrapper-<?php echo get_the_ID(); ?>.lazyloaded {
                  background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);
                }
              }
            </style>
            <?php
            if ( get_the_title() ) :
              ?>
              <h2 class="showroom-block-title relative font-family-base txt-transform-none text-white h3 mb-lg-0"><?php esc_html_e( get_the_title() ); ?></h2>
              <?php
            endif;
            if ( get_the_excerpt() ) : 
              ?>
              <p class="showroom-block-desc relative text-big txt-white mb-lg-0"><?php echo get_the_excerpt(); ?></p>
              <?php
            endif;
            ?>
            <div class="d-inline-flex align-items-center justify-content-end">
              <a href="<?php echo esc_url( get_the_permalink() ); ?>" class="relative d-inline-flex align-items-center text-uppercase txt-white text-lg-end" title="<?php esc_attr_e( get_the_title() ); ?>">Read More&nbsp;<?php echo icon_arrow_down( '16', '16', '#ffffff' ); ?></a>
            </div>
            <?php
            ?>
          </div>
        </div>
        <?php
      endwhile;
    endif;

    wp_die();
  }

  /**
   * Filter posts by category on the posts archive page.
   *
   * @return json
   */
  public function filter_posts_by_category()
  {
    check_ajax_referer( 'filter-posts-nonce', 'nonce' );

    $args = array(
      'posts_per_page' => 4,
      'post_type'      => array( 'our-work' ),
      'post_status'    => 'publish'
    );

    if ( $_POST['cat_slug'] != 'all' ) {
      $args['tax_query'] = array(
        array(
          'taxonomy' => 'our-work-categories',
          'field'    => 'slug',
          'terms'    => $_POST['cat_slug']
        )
      );
    }

    $filter_query = new \WP_Query( $args );

    // global $wp_query;

    if ( $filter_query->have_posts() ) :
      ob_start(); // start buffering because we do not need to print the posts now

      while( $filter_query->have_posts() ) :
        $filter_query->the_post();
        ?>
        <div class="col-lg-6 mb-8">
          <div class="showroom-block-wrapper relative p-6 d-flex justify-content-between flex-column showroom-block-wrapper-<?php echo get_the_ID(); ?> bg-cover lazyload">
            <style>
              .showroom-block-wrapper-<?php echo get_the_ID(); ?>.lazyloaded {
                background-image: url(<?php echo get_the_post_thumbnail_url( get_the_id(), 'medium_large' ); ?>);
              }
              @media screen and (min-width:992px) {
                .showroom-block-wrapper-<?php echo get_the_ID(); ?>.lazyloaded {
                  background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);
                }
              }
            </style>
            <?php
            if ( get_the_title() ) :
              ?>
              <h2 class="showroom-block-title relative font-family-base txt-transform-none text-white h3 mb-lg-0"><?php esc_html_e( get_the_title() ); ?></h2>
              <?php
            endif;
            if ( get_the_excerpt() ) : 
              ?>
              <p class="showroom-block-desc relative text-big txt-white mb-lg-0"><?php echo get_the_excerpt(); ?></p>
              <?php
            endif;
            ?>
            <div class="d-inline-flex align-items-center justify-content-end">
              <a href="<?php echo esc_url( get_the_permalink() ); ?>" class="relative d-inline-flex align-items-center text-uppercase txt-white text-lg-end" title="<?php esc_attr_e( get_the_title() ); ?>">Read More&nbsp;<?php echo icon_arrow_down( '16', '16', '#ffffff' ); ?></a>
            </div>
            <?php
            ?>
          </div>
        </div>
        <?php
      endwhile;

      $posts_html = ob_get_contents(); // we pass the posts to variable

      ob_end_clean(); // clear the buffer
    endif;

    // no wp_reset_query() required

    $data = array(
      'posts'       => json_encode( $filter_query->query_vars ),
      'max_page'    => $filter_query->max_num_pages,
      'found_posts' => $filter_query->found_posts,
      'content'     => $posts_html,
      'cat_slug'    => $_POST['cat_slug']
    );

    wp_send_json($data);
  }

  function edit_personal_data()
  {
    check_ajax_referer( 'nonce-edit-personal-data', 'nonce' );

    $field_updated   = false;
    $current_user_id = ( isset( $_POST['current_user_id'] ) ) ? $_POST['current_user_id'] : 0;
    $first_name      = ( isset( $_POST['first_name'] ) ) ? $_POST['first_name'] : 0;
    $last_name       = ( isset( $_POST['last_name'] ) ) ? $_POST['last_name'] : 0;
    $city            = ( isset( $_POST['city'] ) ) ? $_POST['city'] : 0;
    $get_first_name  = get_user_meta( $current_user_id, 'first_name', true );
    $get_last_name   = get_user_meta( $current_user_id, 'last_name', true );
    $get_city        = get_user_meta( $current_user_id, 'city', true );
    $success_message = '';
    $error_message   = '';

    if ( $first_name && ( $first_name !== $get_first_name ) ) {
      update_user_meta( $current_user_id, 'first_name', $first_name );
      $field_updated = true;
    }
    if ( $last_name && ( $last_name !== $get_last_name ) ) {
      update_user_meta( $current_user_id, 'last_name', $last_name );
      $field_updated = true;
    }
    if ( $city && ( $city !== $get_city ) ) {
      update_user_meta( $current_user_id, 'city', $city );
      $field_updated = true;
    }

    if ( $field_updated ) {
      $success_status = $field_updated;
    } else {
      $success_status = false;
    }

    $data = [
      'success_status' => $success_status
    ];

    wp_send_json( $data );  
  }

  function change_current_user_email()
  {
    check_ajax_referer( 'nonce-change-current-user-email', 'nonce' );

    $user_id       = $_POST['current_user_id'];
    $email         = $_POST['email'];
    $password      = $_POST['password'];
    $user          = get_user_by( 'ID', $user_id );
    $email_changed = false;

    if ( $user->data->user_email == $email ) {
      wp_send_json_error();
    }
    
    if ( $user && wp_check_password( $password, $user->data->user_pass, $user_id ) ) {
      $userdata = [
        'ID'         => $user_id,
        'user_email' => $email
      ];
      wp_update_user( $userdata );

      update_user_meta( $user_id, 'account_activated', 0 );

      $email_changed = true;
    } else {
      $email_changed = false;
    }

    $data = [
      'new_email'     => $email,
      'email_changed' => $email_changed
    ];

    wp_send_json( $data );
  }

  function change_current_user_password()
  {
    check_ajax_referer( 'nonce-change-current-user-password', 'nonce' );

    $current_password = $_POST['current_password'];
    $update_password  = $_POST['update_password'];
    $user_id          = $_POST['current_user_id'];
    $user             = get_user_by( 'ID', $user_id );
    $password_changed = false;

    if ( ! wp_check_password( $current_password, $user->data->user_pass, $user_id ) ) {
      wp_send_json_error();
    } else {
      $userdata = [
        'ID'        => $user_id,
        'user_pass' => $update_password
      ];
      wp_update_user( $userdata );

      $password_changed = true;
    }
    
    $data = [
      'password_changed' => $password_changed,
      'user'             => $user,
    ];

    wp_send_json( $data );  
  }

  function delete_account() {
    check_ajax_referer( 'nonce-delete-account', 'nonce' );

    $password        = $_POST['password'];
    $user_id         = $_POST['current_user_id'];
    $user            = get_user_by( 'ID', $user_id );
    $account_deleted = false;

    if ( ! wp_check_password( $password, $user->data->user_pass, $user_id ) ) {
      wp_send_json_error();
    } else {
      wp_delete_user( $user_id );

      $account_deleted = true;
    }

    $data = [
      'account_deleted' => $account_deleted
    ];

    wp_send_json( $data );
  }
}
