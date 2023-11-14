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
			<?php Footer::copy(); ?>
			<button class="btn btn-primary">Test</button>
			<button class="btn btn-transparent">Test</button>
			<button class="btn btn-orange-ghost">Test</button>
			<a href="" class="txt-primary">Test link primary</a>
			<a href="" class="txt-secondary">Test link secondary</a>
			<a href="" class="txt-small">Test link small</a>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
