<?php 
/*
  -----------------------------
  Template Name: Services Page
  -----------------------------
*/

get_header(); ?>
<main id="post-<?php the_ID(); ?>" <?php post_class( 'site-main bg-light pb-22 pt-8' ); ?> class="bg-light">
  <?php get_template_part( 'template-parts/content', 'services-page' ); ?>
</main><!-- #main -->
<?php
get_footer();
