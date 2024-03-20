<?php
use Awpt\Plugins\Acf;

$args = array(
  'orderby' => 'user_registered',
  'order'   => 'DESC',
  'number'  => 10,
);

$users = get_users( $args );
$title = get_field( 'title' );

// print_var($users);
?>
<section class="section-recent-users my-22">
  <div class="container relative">
    <?php
    if ( $title ) :
      ?>
      <h2 class="mb-8"><?php esc_html_e( $title ); ?></h2>
      <?php
    endif;
    ?>
    <div class="swiper recent-users text-center">
      <div class="swiper-wrapper">
        <?php
        if ( ! empty( $users ) ) :
          foreach( $users as $user ):
            $services      = get_field( 'services', $user );
            $image         = get_field( 'profile_image', $user );
            $more_services = ( ! empty( $services ) ) ? count( $services ) - 4 : array();
            ?>
            <div class="swiper-slide border border-2 border-light rounded-3">
              <?php
              if ( ! empty( $image ) ) :
                ?>
                <div class="image-wrapper-users mb-6 ">
                  <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover', ); ?> 
                </div>
                <?php
              endif;
              ?>
              <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?> <?php esc_html_e( $user->last_name ) ?></h4>
              <ul class="ps-0 justify-content-center text-center">
                <?php
                if ( ! empty( $services ) ) :
                  foreach( $services as $service_key => $service ) :
                    if( $service_key < 4 ):
                      ?>
                      <li class="bg-blue-transperent py-1 px-5 ms-0 me-2 mb-2 rounded-5 text-smaller object-cover d-inline-flex justify-content-center"><?php esc_html_e( $service->name ) ?></li>
                      <?php
                    endif;
                  endforeach;  
                  if ( $more_services > 0 ) :      
                    ?>
                    <a href="javascript:void(0);" class="txt-primary d-inline-flex"><li>+<?php echo $more_services; ?></li></a>
                    <?php 
                  endif;
                endif;
                ?>
              </ul>
              <a href="<?php echo esc_url( get_author_posts_url( $user->ID ) ); ?>" class="btn btn-orange-ghost mb-8">Pogledaj profil</a>
            </div>
            <?php
          endforeach;
        endif;
        ?>
      </div>
    </div>
    <div class="swiper-button-next rounded-circle d-none d-lg-flex bg-white border border-light"></div>
    <div class="swiper-button-prev rounded-circle d-none d-lg-flex bg-white border border-light"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div> 
</section>