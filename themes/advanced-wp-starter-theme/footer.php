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

	<footer id="colophon" class="site-footer pt-10 pt-md-22 text-break">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-3 pb-6 pb-md-0">
					<a href="<?php echo esc_url(get_home_url()); ?>"><?php the_custom_logo(); ?></a>
				</div>
				<?php if( is_active_sidebar( 'footer-menu-1' ) ) : ?>
					<div class="col-6 col-md-2">
						<?php dynamic_sidebar( 'footer-menu-1' ); ?>
					</div>
				<?php endif; ?>
				<?php if( is_active_sidebar( 'footer-menu-2' ) ) : ?>
					<div class="col-6 col-md-2">
						<?php dynamic_sidebar( 'footer-menu-2' ); ?>
					</div>
				<?php endif; ?>
				<?php if( is_active_sidebar( 'footer-menu-3' ) ) : ?>
					<div class="col-6 col-md-3">
						<?php dynamic_sidebar( 'footer-menu-3' ); ?>
					</div>
				<?php endif; ?>
					<div class="col-6 col-md-2 text-md-end">
						<?php Footer::footer_contact(); ?>
					</div>
					<div class="col-12 border-top">
						<div class="row">
							<div class="col-6 text-left">
								<?php Footer::copy(); ?>
							</div>
							<div class="col-6 pt-8 pb-10 text-end footer_links">
								<?php Footer::footer_links(); ?>
							</div>
						</div>
					</div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
