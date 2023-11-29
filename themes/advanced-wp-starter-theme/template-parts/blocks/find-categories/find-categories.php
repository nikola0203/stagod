<?php
use Awpt\Plugins\Acf;
  $terms = get_terms('services');
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
        foreach( $terms as $term ):
          if( $term->parent == 0 ):
          ?>
            <div class="swiper-slide">
              <div class="icon-wrapper rounded-circle d-flex justify-content-center align-items-center mb-2">
                <?php $icon = get_field( 'icon', $term );
                Acf::image( $icon, 'large', 'w-lg-50' );
              ?>
              </div>
              <p class="text-center fw-bold"><?php esc_html_e($term->name); ?></p>
            </div>
        <?php
          endif;
        endforeach;
        ?>
      </div>
    </div>
    <div class="swiper-button-next rounded-circle d-none d-lg-flex bg-white"></div>
    <div class="swiper-button-prev rounded-circle d-none d-lg-flex bg-white"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div> 
  </div>
</section>