<?php
use Awpt\Plugins\Acf;

$terms = get_terms(
  array(
    'taxonomy' => 'services',
    'parent'   => 0,
  )
);
?>
<section class="section-find-services bg-light py-10">
  <div class="container relative">
    <div class="head-wrapper col-12 mb-4">
      <div class="row align-items-baseline">
        <div class="col-6">
          <h4><?php esc_html_e( get_field('title') ); ?></h4>
        </div>
        <div class="col-6 text-end">
          <a href="#" class="txt-primary">Vidi sve kategorije</a>
        </div>
      </div>
    </div>
    <div class="swiper find-services">
      <div class="swiper-wrapper">
        <?php 
        foreach( $terms as $term ) :
          $icon = get_field( 'icon', $term );
          ?>
          <div class="swiper-slide">
            <div class="icon-wrapper rounded-circle d-flex justify-content-center align-items-center mb-2">
              <?php Acf::image( $icon, 'large', 'w-lg-50' ); ?>
            </div>
            <p class="text-center fw-bold"><?php esc_html_e( $term->name ); ?></p>
          </div>
          <?php
        endforeach;
        ?>
      </div>
    </div>
    <div class="swiper-button-next swiper-button-next-find-services rounded-circle d-none d-lg-flex bg-white"></div>
    <div class="swiper-button-prev swiper-button-prev-find-services rounded-circle d-none d-lg-flex bg-white"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div> 
  </div>
</section>