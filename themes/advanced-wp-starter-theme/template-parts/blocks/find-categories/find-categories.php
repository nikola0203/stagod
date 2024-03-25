<?php
use Awpt\Plugins\Acf;

$services = get_terms(
  [
    'taxonomy' => 'services',
    'parent'   => 0,
  ]
);
?>
<section class="section-find-services bg-light py-10">
  <div class="container relative">
    <div class="head-wrapper col-12 mb-4">
      <div class="row align-items-baseline">
        <div class="col-6"> 
          <h4><?php esc_html_e( get_field( 'title' ) ); ?></h4>
        </div>
        <div class="col-6 text-end">
          <a href="<?php echo esc_url( get_field( 'link' ) ); ?>" class="txt-primary">Vidi sve kategorije</a>
        </div>
      </div>
    </div>
    <div class="swiper find-services">
      <div class="swiper-wrapper">
        <?php
        if ( ! empty( $services ) ) :
          foreach( $services as $service ) :
            $icon = get_field( 'icon', $service );
            ?>
            <div class="swiper-slide text-center">
              <div class="icon-wrapper rounded-circle d-flex justify-content-center align-items-center mb-2">
                <a href="<?php esc_html_e( get_term_link( $service ) ); ?>"><?php Acf::image( $icon, 'large', 'w-lg-50 object-fit-cover rounded-circle icon-size img-hover' ); ?></a>
              </div>
              <a href="<?php esc_html_e( get_term_link( $service ) ); ?>" class="txt-black fw-bold"><?php esc_html_e( $service->name ); ?></a>
            </div>
            <?php
          endforeach;
        endif;
        ?>
      </div>
    </div>
    <div class="swiper-button-next swiper-button-next-find-services rounded-circle d-none d-lg-flex bg-white"></div>
    <div class="swiper-button-prev swiper-button-prev-find-services rounded-circle d-none d-lg-flex bg-white"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div> 
</section>