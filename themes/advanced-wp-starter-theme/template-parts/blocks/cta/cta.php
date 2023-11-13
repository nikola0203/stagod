<?php
/**
 * Template part for displaying page Home Hero block.
 *
 */

$class_name      = 'section-cta bg-cover pb-10 pt-xl-12 pb-xl-22 lazyload lazu-fade';
$global_data     = get_field( 'global_data' );
$get_global_data = ( $global_data ) ? get_field( 'cta', 'option' ) : '';
$title           = ( $global_data && ! empty( $get_global_data ) ) ? $get_global_data['title'] : get_field( 'title' );
$button          = ( $global_data && ! empty( $get_global_data ) ) ? $get_global_data['button'] : get_field( 'button' );
$allowedHtml     = array(
  'strong' => array(),
  'span'   => array(),
  'br'     => array(),
);
// Create class attribute allowing for custom "className" values.
if ( ! empty( $block['className'] ) ) {
  $class_name .= ' ' . $block['className'];
}
?>
<section class="<?php echo esc_attr( $class_name ); ?>">
</section>
