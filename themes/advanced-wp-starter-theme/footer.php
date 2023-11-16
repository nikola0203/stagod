<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package awpt
 */

use Awpt\Custom\Footer;
?>

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-md-1">
					<a href="#"><?php the_custom_logo(); ?></a>
				</div>
				<?php if( is_active_sidebar( 'footer-menu-1' ) ) : ?>
					<div class="col-md-3">
						<?php dynamic_sidebar( 'footer-menu-1' ); ?>
					</div>
				<?php endif; ?>
				<?php if( is_active_sidebar( 'footer-menu-2' ) ) : ?>
					<div class="col-md-3">
						<?php dynamic_sidebar( 'footer-menu-2' ); ?>
					</div>
				<?php endif; ?>
				<?php if( is_active_sidebar( 'footer-menu-3' ) ) : ?>
					<div class="col-md-3">
						<?php dynamic_sidebar( 'footer-menu-3' ); ?>
					</div>
				<?php endif; ?>
					<div class="col-md-2">
						<?php Footer::footer_contact(); ?>
					</div>
					<div class="col-6">
						<?php Footer::copy(); ?>
					</div>
					<div class="col-6">
						<?php Footer::footer_links(); ?>
					</div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
