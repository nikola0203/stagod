<?php
use Awpt\Plugins\Acf;

$title    = get_field( 'title' );
$services = get_field( 'taxonomy' );
?>
<section class="section-search-users text-center my-12 my-lg-22">
  <div class="container relative">
    <h2 class="mb-8"><?php esc_html_e( $title ); ?></h2>
    <div class="col-12 col-lg-8 mx-auto mb-12">
      <?php
      foreach( $services as $service ):
        ?>
        <button class="btn btn-secondary py-2 px-5 mb-4 me-4 rounded-5 btn-filter-users-by-taxononomy" data-taxonomy_id="<?php esc_attr_e( $service->term_id ); ?>"><?php esc_html_e( $service->name ); ?></button>
        <?php
      endforeach;
      ?>
    </div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
      <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
    </div>
    <div class="swiper search-users text-center">
      <div class="swiper-wrapper">
        <?php
        foreach ( $services as $service ) :
          $usersID = get_objects_in_term( $service->term_id, 'services', array( 'order' => 'DESC' ) );

          foreach ( $usersID as $usersIDkey => $userID ) :
            if ( $usersIDkey < 10 ) :
              // $users = get_users( array( 'include' => [$userID] ) );
              $user = get_user_by('id', $userID);
              // print_var($user_test);

              // foreach ( $users as $user ) : 
                $image         = get_field('profile_image', $user);
                $user_services = get_field('services', $user);
                $more_services = count($services) - 4;
                ?>
                <div class="swiper-slide border border-2 border-light rounded-3">
                  <div class="image-wrapper-users mb-6 ">
                    <?php Acf::image( $image, 'large', 'rounded-circle', ); ?> 
                  </div>
                  <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?> <?php esc_html_e( $user->last_name ) ?></h4>
                  <ul class="ps-0 justify-content-center text-center">
                    <?php
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
                    ?>
                  </ul>
                  <a href="<?php echo esc_url( $user->user_url ); ?>" class="btn btn-orange-ghost mb-8">Pogledaj profil</a>
                </div>
                <?php
              // endforeach;
            endif;
          endforeach;
        endforeach;
        ?>
      </div>
    </div>
    <div class="swiper-button-next swiper-button-next-search-users rounded-circle d-none d-lg-flex bg-white border border-light"></div>
    <div class="swiper-button-prev swiper-button-prev-search-users rounded-circle d-none d-lg-flex bg-white border border-light"></div>
  </div>
  <div class="swiper-pagination d-lg-none mb-6"></div>
</section>