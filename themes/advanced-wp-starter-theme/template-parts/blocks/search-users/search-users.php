<?php
use Awpt\Plugins\Acf;

$title    = get_field( 'title' );
$services = get_field( 'taxonomy' );
?>
<section class="section-search-users text-center my-12 my-lg-22">
  <div class="container relative">
    <h2 class="mb-8"><?php esc_html_e( $title ); ?></h2>
    <div class="col-12 col-lg-8 mx-auto mb-12">
      <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <?php
        if ( ! empty( $services ) ) :
          foreach( $services as $serviceKey => $service ) :
            ?>
            <li class="nav-item" role="presentation">
              <button class="btn btn-secondary py-2 px-5 mb-4 me-4 rounded-5 <?php echo ( $serviceKey == 0 ) ? 'active' : ''; ?>" id="<?php esc_html_e( $service->slug ); ?>-tab" data-bs-toggle="pill" data-bs-target="#<?php esc_html_e($service->slug); ?>" type="button" role="tab" aria-controls="<?php esc_html_e($service->slug); ?>" aria-selected="true"><?php esc_html_e( $service->name ); ?></button>
            </li>
            <?php
          endforeach;
        endif;
        ?>
      </ul>
    </div>
    <div class="tab-content" id="pills-tabContent">    
      <?php
      if ( ! empty( $services ) ) :
        foreach ( $services as $serviceKey => $service ) :
          $usersID = get_objects_in_term( $service->term_id, 'services', array( 'order' => 'DESC' ) );
          ?>
          <div class="tab-pane fade <?php echo ( $serviceKey == 0 ) ? 'active show' : ''; ?>" id="<?php esc_attr_e( $service->slug ); ?>" role="tabpanel" aria-labelledby="<?php esc_attr_e( $service->slug ); ?>-tab" tabindex="0">
            <div class="swiper search-users text-center">
              <div class="swiper-wrapper">
                <?php
                if ( ! empty( $usersID ) ) :
                  foreach ( $usersID as $usersIDkey => $userID ) :
                    if ( $usersIDkey < 10 ) :
                      $user          = get_user_by( 'id', $userID );
                      $image         = get_field( 'profile_image', $user );
                      $user_services = get_field( 'services', $user );
                      $more_services = count( $services ) - 4;
                      ?>
                      <div class="swiper-slide border border-2 border-light rounded-3">
                        <?php
                        if ( ! empty( $image ) ) :
                          ?>
                          <div class="image-wrapper-users mb-6">
                            <?php Acf::image( $image, 'large', 'rounded-circle', ); ?> 
                          </div>
                          <?php
                        endif;
                        if ( $user ) :
                          ?>
                          <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?>&nbsp;<?php esc_html_e( $user->last_name ) ?></h4>
                          <?php
                        endif;
                        ?>
                        <ul class="ps-0 justify-content-center text-center">
                          <?php
                          if ( ! empty( $user_services ) ) :
                            foreach( $user_services as $service_key => $service ) :
                              if ( $service_key < 4 ) :
                                ?>
                                <li class="bg-blue-transperent py-1 px-5 ms-0 me-2 mb-2 rounded-5 text-smaller object-cover d-inline-flex justify-content-center"><?php esc_html_e( $service->name ) ?></li>
                                <?php
                              endif;
                            endforeach;  
                            if ( $more_services > 0 ) :      
                              ?>
                              <a href="" class="txt-primary d-inline-flex"><li>+<?php echo $more_services; ?></li></a>
                              <?php 
                            endif;
                          endif;
                          ?>
                        </ul>
                        <a href="<?php echo esc_url( get_author_posts_url( $userID ) ); ?>" class="btn btn-orange-ghost mb-8">Pogledaj profil</a>
                      </div>
                      <?php
                    endif;
                  endforeach;
                endif;
                ?>
              </div>
            </div>
          <div class="swiper-button-next swiper-button-next-search-users rounded-circle d-none d-lg-flex bg-white border border-light"></div>
          <div class="swiper-button-prev swiper-button-prev-search-users rounded-circle d-none d-lg-flex bg-white border border-light"></div>
          <div class="swiper-pagination d-lg-none mb-6"></div>
          </div>
          <?php
        endforeach;
      endif;
      ?>
    </div>
  </div>
</section>
