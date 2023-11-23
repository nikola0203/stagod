<?php
/**
 * Author (users) page template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package awpt
 */

get_header();
?>
<main id="primary" class="site-main">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <?php 
        get_template_part( 'template-parts/author/video' );
        get_template_part( 'template-parts/author/description' );
        get_template_part( 'template-parts/author/categories' );
        get_template_part( 'template-parts/author/reviews' );
        get_template_part( 'template-parts/author/experience' );
        get_template_part( 'template-parts/author/gallery' );
        ?>
      </div>
      <div class="col-lg-4">
        <?php 
        get_template_part( 'template-parts/author/info' );
        get_template_part( 'template-parts/author/map' );
        ?>
      </div>
    </div>
  </div>
</main><!-- #main -->
<?php
get_footer();
