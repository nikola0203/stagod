<?php
/**
 * Template part for the user gallery.
 */

use Awpt\Plugins\Acf;

$images = get_field( 'gallery' );

if ( ! empty( $images ) ) :
  ?>
  <div class="swiper author-gallery">
    <div class="swiper-wrapper">
      <?php
      foreach ( $images as $image ) :
        ?>
        <div class="swiper-slide">
          <div class="author-gallery-image">
            <?php Acf::image( $image, 'medium_large', 'w-100 h-100 object-fit-cover' ); ?>
          </div>
        </div>
        <?php
      endforeach;
      ?>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
  <?php
endif;
