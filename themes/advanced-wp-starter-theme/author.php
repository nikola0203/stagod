<?php
/**
 * Author (users) page template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package awpt
 */

get_header();
if ( get_queried_object_id() == get_current_user_id() ) :
  get_template_part( 'template-parts/author/content', 'private' );
else :
  get_template_part( 'template-parts/author/content', 'public' );
endif;
get_footer();
