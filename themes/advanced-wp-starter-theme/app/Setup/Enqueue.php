<?php

namespace Awpt\Setup;

/**
 * Enqueue.
 */
class Enqueue
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
	public function register() 
	{
		// add_action( 'wp_head', [$this, 'preconnect_google_font'], 5 );
		add_action( 'wp_enqueue_scripts', [$this, 'enqueue_scripts'] );
		add_action( 'admin_enqueue_scripts', [$this, 'admin_enqueue_scripts'] );
  }

	public function preconnect_google_font()
	{
		$font_url = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap';
		?>
		<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link as="style" rel="preload" href="<?php echo esc_url( $font_url ); ?>">
    <link rel="stylesheet" href="<?php echo esc_url( $font_url ); ?>" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="<?php echo esc_url( $font_url ); ?>"></noscript>
		<?php
	}

  /**
	 * mix() function in enqueue_scripts() method provides the path to a versioned asset by Laravel Mix using querystring-based 
	 * cache-busting (This means, the file name won't change, but the md5. Look here for 
	 * more information: https://github.com/JeffreyWay/laravel-mix/issues/920 )
	 */
	public function enqueue_scripts() 
	{
		// Deregister the built-in version of jQuery from WordPress.
		wp_deregister_script( 'jquery' );

		// CSS
		wp_enqueue_style( 'main', mix( 'css/style.css' ), [], '1.0.0', 'all' );

		// JS
		wp_enqueue_script( 'user-register', mix( 'js/react/user-register.js' ), [], false, ['strategy' => 'async', 'in_footer' => true] );
		wp_enqueue_script( 'main', mix( 'js/app.js' ), [], false, ['strategy' => 'async', 'in_footer' => true] );

		if ( is_author() ) {
			wp_enqueue_script( 'user-single', mix( 'js/user-single.js' ), ['main'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
			wp_enqueue_script( 'user-single', mix( 'js/user-single.js' ), ['main'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		}
		// wp_localize_script( 'main', 'main_object', array(
		// 	'site_url'  => get_site_url(),
		// 	'ajax_url'  => admin_url( 'admin-ajax.php' ),
		// ));

		wp_register_script( 'swiper-style-core', mix( 'js/swiper-style-core.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'swiper-style-navigation', mix( 'js/swiper-style-navigation.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'swiper-style-pagination', mix( 'js/swiper-style-pagination.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
	
		// ACF Blocks.
		wp_register_script( 'popular-services', mix( 'js/blocks/popular-services.js' ), ['swiper-style-core', 'swiper-style-navigation', 'swiper-style-pagination'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'find-services', mix( 'js/blocks/find-services.js' ), ['swiper-style-core', 'swiper-style-navigation', 'swiper-style-pagination'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'recent-users', mix( 'js/blocks/recent-users.js' ), ['swiper-style-core', 'swiper-style-navigation', 'swiper-style-pagination'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'search-users', mix( 'js/blocks/search-users.js' ), ['swiper-style-core', 'swiper-style-navigation', 'swiper-style-pagination'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'faq', mix( 'js/blocks/faq.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );

		// Activate browser-sync on development environment
		// if ( getenv( 'APP_ENV' ) === 'development' ) :
		// 	wp_enqueue_script( '__bs_script__', getenv('WP_SITEURL') . ':3000/browser-sync/browser-sync-client.js', [], null, true );
		// endif;

		// Extra
		// if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		// 	wp_enqueue_script( 'comment-reply' );
		// }
	}

	public function admin_enqueue_scripts( $hook )
	{
		if ( 'theme-settings_page_seo_one_click_theme-custom-css' == $hook ) {
			wp_enqueue_style( 'ace', get_template_directory_uri() . '/assets/dist/css/admin/seo_one_click_theme-custom-css-page.css', [], '1.0.0', 'all' ); 

			wp_enqueue_script( 'ace', get_template_directory_uri() . '/assets/dist/js/admin/ace/ace.js', ['jquery'], '', true );
			wp_enqueue_script( 'ace-ext-language_tools', get_template_directory_uri() . '/assets/dist/js/admin/ace/ext-language_tools.js', ['jquery', 'ace'], '', true );
			wp_enqueue_script( 'seo_one_click_theme-custom-css-page', get_template_directory_uri() . '/assets/dist/js/admin/seo_one_click_theme-custom-css-page.js', ['jquery'], '1.0.0', true );
		}
	}
}