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
    <?php
    $title = get_field( 'title' );
    if ( $title ):
    ?>
      <h3 class="mb-8"><?php esc_html_e($title); ?></h3>
    <?php
    endif;
    ?>
    <div class="swiper popular-services">
      <div class="swiper-wrapper">
        <?php
        if ( $services ):
          foreach ( $services as $service ) :
            $image = get_field( 'image', $service );
            ?>
            <div class="swiper-slide bg-white rounded-bottom-3">
              <div class="image-wrapper mb-6">
                <?php Acf::image( $image, 'large', 'rounded-top-3 object-fit-cover h-100 w-100', ); ?>
              </div>
              <a href="<?php echo esc_url( get_term_link( $service, 'services' ) ); ?>" class="txt-black p-big mb-1 ps-8 fw-bold"><?php esc_html_e( $service->name ); ?></a>
              <?php
              $term_args = array(
                'taxonomy'   => 'services',
                'child_of'   => $service->term_id,
                'hide_empty' => false
              ); 
              $terms = count( get_terms( $term_args ) );
              ?>
              <p class="ms-8 mb-8 txt-light-grey"><?php echo $terms; ?> <?php echo ( $terms < 2 || $terms > 4 ) ? 'veština' : 'veštine' ?></p>
            </div>
            <?php 
          endforeach;
        endif;
        ?>
      </div>
    </div>
    <div class="swiper-button-next swiper-button-next-popular-services rounded-circle d-none d-lg-flex bg-white"></div>
    <div class="swiper-button-prev swiper-button-prev-popular-services rounded-circle d-none d-lg-flex bg-white"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div>
</section>