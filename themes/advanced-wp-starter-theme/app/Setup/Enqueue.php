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
		if ( ! is_user_logged_in() ) {
			wp_enqueue_script( 'user-register', mix( 'js/react/user-register.js' ), [], false, ['strategy' => 'async', 'in_footer' => true] );
		}
		wp_enqueue_script( 'main', mix( 'js/app.js' ), [], false, ['strategy' => 'async', 'in_footer' => true] );

		if ( is_author() ) {
			wp_enqueue_script( 'user-single', mix( 'js/user-single.js' ), ['main'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		}

		// print_var($_SERVER);
		// global $wp;
		// print_var($wp);

   	if ( isset( $_GET['reset_password_code'] ) ) {
      $data = unserialize( base64_decode( $_GET['reset_password_code'] ) );
      $code = get_user_meta( $data['id'], 'reset_password_code', true );
      // verify whether the code given is the same as ours
      if ( $code == $data['reset_password_code'] ) {
				wp_enqueue_script( 'reset-password', mix( 'js/react/reset-password.js' ), ['main'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
      }
    }

		// wp_localize_script( 'main', 'main_object', array(
		// 	'site_url'  => get_site_url(),
		// 	'ajax_url'  => admin_url( 'admin-ajax.php' ),
		// ));

		wp_register_script( 'manifest', mix( 'js/blocks/manifest.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'vendor', mix( 'js/blocks/vendor.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );

		// ACF Blocks.
		wp_register_script( 'popular-services', mix( 'js/blocks/popular-services.js' ), ['manifest', 'vendor'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'find-services', mix( 'js/blocks/find-services.js' ), ['manifest', 'vendor'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'recent-users', mix( 'js/blocks/recent-users.js' ), ['manifest', 'vendor'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'search-users', mix( 'js/blocks/search-users.js' ), ['manifest', 'vendor'], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
		wp_register_script( 'faq', mix( 'js/blocks/faq.js' ), [], '1.0.0', ['strategy' => 'async', 'in_footer' => true] );
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