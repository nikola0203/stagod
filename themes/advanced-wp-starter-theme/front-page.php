<?php
/**
 * Front Page template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *
 * @package awpt
 */

get_header();

if ( is_front_page() ) :
	get_template_part( 'template-parts/content', 'front-page-form' );
endif;
?>
<main id="post-<?php the_ID(); ?>" <?php post_class( 'site-main' ); ?>>
	<?php the_content(); ?>
</main>
<?php
get_footer();
