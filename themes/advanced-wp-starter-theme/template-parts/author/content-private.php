<?php
/**
 * Template part for displaying user template for the logged in users.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */

?>
<main id="primary" class="site-main bg-light">
  <div class="container">
    <div class="row py-8 py-xl-14">
      <div class="col-lg-4">
        <?php 
        get_template_part( 'template-parts/author/private/info' );
        get_template_part( 'template-parts/author/public/map' );
        ?>
      </div>
      <div class="col-lg-8">
        <?php
        $get_query_vars = ( ! empty( $wp->query_vars['author_page'] ) ) ? $wp->query_vars['author_page'] : false;
        switch ( $get_query_vars ) :
          case 'messages': 
            get_template_part( 'template-parts/author/private/messages' );
            break;
          case 'notifications': 
            print_var("notifications");
            break;
          case 'ratings': 
            print_var("ratings");
            break;
          case 'saved': 
            print_var("saved");
            break;
          case 'edit-profile':
            get_template_part( 'template-parts/author/private/edit-profile' );
            break;
          default: 
            get_template_part( 'template-parts/author/public/video' );
            get_template_part( 'template-parts/author/private/description' );
            get_template_part( 'template-parts/author/public/categories' );
            get_template_part( 'template-parts/author/public/reviews' );
            get_template_part( 'template-parts/author/public/experience' );
            get_template_part( 'template-parts/author/public/gallery' );
            break;
        endswitch;
        ?>
      </div>
    </div>
  </div>
</main>
