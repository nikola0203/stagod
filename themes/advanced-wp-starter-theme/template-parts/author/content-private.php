<?php
/**
 * Template part for displaying user template for the logged in users.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */

?>
<main id="primary" class="site-main">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <?php 
        get_template_part( 'template-parts/author/private/info' );
        get_template_part( 'template-parts/author/public/map' );
        ?>
      </div>
      <div class="col-lg-8">
        <?php 
        get_template_part( 'template-parts/author/public/video' );
        get_template_part( 'template-parts/author/private/description' );
        get_template_part( 'template-parts/author/public/categories' );
        get_template_part( 'template-parts/author/public/reviews' );
        get_template_part( 'template-parts/author/public/experience' );
        get_template_part( 'template-parts/author/public/gallery' );
        ?>
      </div>
    </div>
  </div>
</main>
