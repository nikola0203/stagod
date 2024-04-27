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
                      <div class="swiper-slide border border-2 border-light rounded-3 px-6">
                        <?php
                        if ( ! empty( $image ) ) :
                          ?>
                          <div class="image-wrapper-users mb-6 d-block">
                            <a href="<?php echo esc_url( get_author_posts_url( $userID ) ); ?>"><?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover img-hover h-100 w-100', ); ?></a> 
                          </div>
                          <?php
                        endif;
                        if ( $user ) :
                          ?>
                          <a href="<?php echo esc_url( get_author_posts_url( $userID ) ); ?>"><h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?>&nbsp;<?php esc_html_e( $user->last_name ) ?></h4></a>
                          <?php
                        endif;
                        ?>
                        <ul class="ps-0 justify-content-center text-center border-bottom mb-6 border-light">
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
                              <a href="" class="txt-primary d-inline-flex mb-6"><li>+<?php echo $more_services; ?></li></a>
                              <?php 
                            endif;
                          endif;
                          ?>
                        </ul>
                        <div class="user-info-wrapper d-flex mb-6 justify-content-between">
                          <div class="ratings-wrapper d-flex fw-bold">
                            <div class="rating p-5 rounded-3 bg-primary">
                              <p class="mb-0 text-white">4.6</p>
                            </div>
                            <div class="rating-txt lh-1 ms-4 mt-1">
                              <p class="p-big mb-3">Izvrsno</p>
                              <p class="p-small m-0 text-secondary">25 Ocena</p>
                            </div>
                          </div>
                          <div class="date-created">
                            <p class="p-small mb-0 text-gray-200 text-end">Clan od<br><?php echo date( 'd.m.Y', strtotime($user->user_registered) ) ?></p>
                          </div>
                        </div>
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
