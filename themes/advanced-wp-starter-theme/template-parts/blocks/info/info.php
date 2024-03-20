<?php
/**
 * Template part for displaying page Info block.
 *
 */

use Awpt\Plugins\Acf;

$image_left  = get_field('image_left');
$background  = get_field('background');
$title       = get_field('title');
$text        = get_field('text');
$image       = get_field('image');
$link        = get_field('link');
$allowedHTML = array(
  'a' => array(
    'href'  => array(),
    'title' => array(),
    'class' => array(),
  ),
);
?>
<section class="info <?php echo ( $background ) ? 'bg-light py-12 py-lg-22' : 'my-12 my-lg-22'; ?>">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-center <?php echo ( $image_left ) ? 'order-lg-1' : ''; ?> ">
        <?php
        if ( $title ) :
          ?>
          <h2 class="mb-6"><?php esc_html_e( $title ); ?></h2>
          <?php
        endif;
        if ( $text ) :
          ?>
          <p class="mb-8 p-small"><?php echo wp_kses( $text, $allowedHTML ); ?></p>
          <?php
        endif;
        if ( ! empty( $link ) ) :
          ?>
          <a href="<?php echo esc_url( $link['url'] ); ?>" class="btn btn-primary mb-8 mb-lg-0" title="<?php esc_html_e( $link['title'] ); ?>"><?php esc_html_e( $link['title'] ); ?></a>
          <?php 
        endif;
        ?>
      </div>
      <?php
      if ( ! empty ( $image ) ) :
        ?>
        <div class="col-12 col-lg-6 <?php echo ( $image_left ) ? 'text-lg-start' : 'text-lg-end'; ?>">
          <?php Acf::image( $image, 'large', 'object-fit-cover image-wraper' ); ?>
        </div>
        <?php
      endif;
      ?>
    </div>
  </div>
</section>
