<?php

namespace Awpt\Plugins;

/**
 * Register ACF Blocks.
 */
class AcfBlocks
{
	/**
	 * Register default hooks and actions for WordPress.
	 *
	 * @return
	 */
	public function register() 
	{
		add_action( 'init', array( $this, 'init_block_types' ) );
		add_filter( 'block_categories_all', array( $this, 'register_new_blocks_category' ), 10, 2 );
	}

	/**
	 * Return array of acf blocks settings
	 *
	 * @return array
	 */
	private function blocks_settings()
	{
		$blocks_dir = get_template_directory() . '/template-parts/blocks/';

		$blocks_settings = array(
			'cta'              => $blocks_dir . 'cta',
			'about'            => $blocks_dir . 'about',
			'info'             => $blocks_dir . 'info',
			'popular_services' => $blocks_dir . 'popular-services',
			'find_categories'  => $blocks_dir . 'find-categories',
			'recent_users'     => $blocks_dir . 'recent-users',
			'all_services'     => $blocks_dir . 'all-services',
			'search_users'     => $blocks_dir . 'search-users',
			'faq'              => $blocks_dir . 'faq',
		);

		return apply_filters( 'awpt_add_acf_block', $blocks_settings );
	}

	/**
	 * Register ACF blocks.
	 *
	 * @return void
	 */
	public function init_block_types()
	{
		if ( ! empty( $this->blocks_settings() ) ) {
			foreach ( $this->blocks_settings() as $block ) {
				register_block_type( $block );
			}
		}
	}

	/**
	 * Register ACF blocks category.
	 *
	 * @param array $block_categories
	 * @param string $editor_context
	 * @return array
	 */
	function register_new_blocks_category( $block_categories, $editor_context )
	{
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'acf-blocks',
					'title' => __( 'ACF Blocks', 'awpt' ),
					'icon'  => 'admin-plugins',
				)
			);
		}

		return $block_categories;
	}
}
