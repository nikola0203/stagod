<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package awpt
 */

use Awpt\Custom\Custom;
use Awpt\Plugins\Acf;

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'seo_one_click_theme' ); ?></a>

	<header id="masthead" class="site-header py-8">
		<nav id="site-navigation" role="navigation" class="container d-lg-flex align-items-lg-center">
			<div class="nav-logo-btn-wrapper d-flex align-items-center">
				<?php Custom::site_logo(); ?>
				<div class="navtoggle relative d-flex justify-content-end align-items-center d-lg-none">
					<div class="navtoggle__icon"></div>
				</div>
			</div>
			<div class="d-flex align-items-center ms-lg-auto">
				<?php
				if ( has_nav_menu( 'primary' ) ) :
					wp_nav_menu(
						array(
							'theme_location'  => 'primary',
							'menu_id'         => 'primary-menu',
							'menu_class'      => 'menu d-lg-flex align-items-lg-center ps-0',
							'container_id'    => 'primary-menu-container',
							'container_class' => 'ms-lg-auto ',
						)
					);
				endif;
				?>
				<a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'messages/'; ?>" class="me-8"><?php echo icon_chat(); ?></a>
				<?php $profile_image = get_field( 'profile_image', get_user_by( 'id', get_current_user_id() ) ); ?>
				<button class="me-8"><?php Acf::image( $profile_image, 'thumbnail', 'rounded-circle' ); ?> <?php echo icon_carret_down(); ?></button>
				<ul>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'messages/'; ?>">Poruke</a></li>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'notifications/'; ?>">Obavestenja</a></li>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'ratings/'; ?>">Ocene</a></li>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'saved/'; ?>">Sacuvano</a></li>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'edit-account/'; ?>">Podesavanje naloga</a></li>
					<li><a href="<?php echo get_author_posts_url( get_current_user_id() ) . 'edit-profile/'; ?>">Podesavanje profila usluga</a></li>
				</ul>
				<?php
				// if ( ! is_user_logged_in() ) :
					?>
					<div id="user-register"></div>
					<?php
				// endif;
				?>
		</nav>
	</header>
