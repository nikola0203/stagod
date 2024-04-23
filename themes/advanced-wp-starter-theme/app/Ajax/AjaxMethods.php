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
    add_action( 'wp_ajax_posts_archive_load_more_posts', array( $this, 'posts_archive_load_more_posts' ) );
    add_action( 'wp_ajax_nopriv_posts_archive_load_more_posts', array( $this, 'posts_archive_load_more_posts' ) );

    add_action( 'wp_ajax_filter_posts_by_category', array( $this, 'filter_posts_by_category' ) );
    add_action( 'wp_ajax_nopriv_filter_posts_by_category', array( $this, 'filter_posts_by_category' ) );

    add_action( 'wp_ajax_save_favorite_user', array( $this, 'save_favorite_user' ) );
    add_action( 'wp_ajax_delete_favorite_user', array( $this, 'delete_favorite_user' ) );
    // add_action( 'wp_ajax_nopriv_save_favorite_user', array( $this, 'save_favorite_user' ) );
  }

  function save_favorite_user() {
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

  function delete_favorite_user() {
    $user_id = (int) $_POST['user_id'];
    $current_user_id = (int) $_POST['current_user_id'];
    
    $get_favorite_users = get_user_meta( $current_user_id, 'favorite_users', true );
      if ( $get_favorite_users ) {
        if ( in_array( $user_id, $get_favorite_users ) ) {
          $element_index = array_search( $user_id, $get_favorite_users );
          $i = 1;
          array_splice( $get_favorite_users, $element_index, $i);
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
}
