<?php
/**
 * Template part for displaying page About block.
 *
 */

use Awpt\Plugins\Acf;

$services = get_field( 'select_services' );
?>
<section class="section-popular-services bg-light pt-12 pb-20 py-lg-14 relative">
  <div class="container relative">
    <h3 class="mb-8"><?php echo get_field('title'); ?></h3>
    <div class="swiper popular-services">
      <div class="swiper-wrapper">
        <?php
        foreach ( $services as $service ) :
          $image = get_field( 'image', $service );
          ?>
          <div class="swiper-slide bg-white rounded-bottom-3">
                <div class="image-wrapper mb-6">
                  <?php
                    Acf::image( $image, 'large', 'w-lg-75 rounded-top-3 object-fit-cover h-100 w-100', );
                  ?>
                </div>
                <p class="p-big mb-1 ps-8 fw-bold"><?php echo $service->name; ?></p>
            </div>
            <?php 
        endforeach;
        ?>
      </div>
    </div>
    <div class="swiper-button-next rounded-circle d-none d-lg-flex"></div>
    <div class="swiper-button-prev rounded-circle d-none d-lg-flex"></div>
  </div>
  <div class="swiper-pagination d-lg-none"></div>
</section>
<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  var swiper = new Swiper(".popular-services", {
    slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          992: {
            slidesPerView: 4
          },
        }
    });
    </script>