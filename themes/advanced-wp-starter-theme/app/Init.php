<?php
/**
 *
 * This theme uses PSR-4 and OOP logic
 *
 * @package awpt
 */

namespace Awpt;

final class Init
{
	/**
	 * Store all the classes inside an array.
	 *
	 * @return array Full list of classes
	 */
	public static function get_services()
	{
		return [
			Plugins\RequiredPlugins::class,
			// Core\PostTypes::class,
			Core\RewriteRules::class,
			Core\Taxonomies::class,
			Core\Tags::class,
			Core\Sidebar::class,
			Core\Widgets\TextWidget::class,
			Core\Blocks::class,
			Core\Comments::class,
			Core\OptionsPages::class, 
			Core\Shortcodes::class,
			Setup\Setup::class,
			Setup\Menus::class,
			Setup\Enqueue::class,
			Ajax\AjaxMethods::class,
			Custom\Filters::class,
			Custom\Custom::class,
			Plugins\Acf::class,
			Plugins\AcfBlocks::class,
			Chat\Chat::class,
			REST\UserExtendEndpoint::class,
			REST\UserRegister::class,
			REST\UserLogin::class,
			REST\UserResetPassword::class,
			REST\UserSetNewPassword::class,
		]; 
	}

	/**
	 * Loop through the classes, initialize them, and call the register() method if it exists.
	 *
	 * @return
	 */
	public static function register_services()
	{
		foreach ( self::get_services() as $class ) {
			$service = self::instantiate( $class );
			if ( method_exists( $service, 'register' ) ) {
				$service->register();
			}
		}
	}

	/**
	 * Initialize the class.
	 *
	 * @param class $class class from the services array
	 * @return class instance new instance of the class
	 */
	private static function instantiate( $class )
	{
		return new $class();
	}

}
