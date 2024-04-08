<?php
/**
 *
 * This theme uses PSR-4 and OOP logic instead of procedural coding
 * Every function, hook and action is properly divided and organized inside related folders and files
 * Use the file `app/Custom/Custom.php` to write your custom functions
 *
 * @package awpt
 */

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) :
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
endif;

if ( class_exists( 'Awpt\\Init' ) ) :
	Awpt\Init::register_services();
endif;

/**
* multiple custom routing with one page
*/
add_filter( 'template_include', 'wpdocs_include_template_files_on_page' );

function wpdocs_include_template_files_on_page( $template ) {
	if ( isset( $_GET['reset_password_code'] ) ) {
		$data = unserialize( base64_decode( $_GET['reset_password_code'] ) );
		$code = get_user_meta( $data['id'], 'reset_password_code', true );
		// verify whether the code given is the same as ours
		if ( $code == $data['reset_password_code'] ) {
			$template = get_template_part( 'user-reset-password', '', $data['id'] );
		}
	}

	return $template;
}