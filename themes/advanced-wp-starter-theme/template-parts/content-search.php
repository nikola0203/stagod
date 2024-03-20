<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php Awpt\Core\Tags::posted_on(); ?>
			</div>
			<?php
		endif;
		?>
	</header>

	<div class="entry-content">
		<?php
			the_content(
				sprintf(
					wp_kses(
						__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'awpt' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				)
			);
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'awpt' ),
					'after'  => '</div>',
				)
			);
		?>
	</div>

	<footer class="entry-footer">
		<?php Awpt\Core\Tags::entry_footer(); ?>
	</footer>
</article>
