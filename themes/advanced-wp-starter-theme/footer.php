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
	<footer id="colophon" class="site-footer py-12 pt-md-22 text-break">
		<div class="container">
			<div class="row justify-content-lg-between mb-lg-18">
				<div class="col-12 col-lg-1 mb-8 mb-lg-0">
					<?php Footer::logo(); ?>
				</div>
				<?php
				if ( is_active_sidebar( 'footer-menu-1' ) ) :
					?>
					<div class="col-6 col-lg-2 mb-8 mb-lg-0">
						<?php dynamic_sidebar( 'footer-menu-1' ); ?>
					</div>
					<?php
				endif;
				if ( is_active_sidebar( 'footer-menu-2' ) ) :
					?>
					<div class="col-6 col-lg-2">
						<?php dynamic_sidebar( 'footer-menu-2' ); ?>
					</div>
					<?php
				endif;
				if ( is_active_sidebar( 'footer-menu-3' ) ) :
					?>
					<div class="col-12 col-lg-2 mb-8 mb-lg-8">
						<?php dynamic_sidebar( 'footer-menu-3' ); ?>
					</div>
					<?php
				endif;
				?>
				<div class="col-12 col-lg-2 text-lg-end mb-8">
					<?php Footer::footer_contact(); ?>
				</div>
			</div>
			<div class="col-12 footer-copy">
				<div class="row">
					<div class="col-lg-6 mb-8 mb-lg-0 text-end footer_links order-lg-2">
						<?php Footer::footer_links(); ?>
					</div>
					<div class="col-lg-6">
						<?php Footer::copy(); ?>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
