<?php
  use Awpt\Plugins\Acf;
  $title = get_field( 'title' );
  $services = get_field( 'taxonomy' );
?>

<section class="section-search-users text-center my-12 my-lg-22">
  <div class="container relative">
    <h2 class="mb-8"><?php esc_html_e( $title ); ?></h2>
    <div class="col-12 col-lg-8 mx-auto mb-12">
      <?php
      foreach( $services as $service ):
        ?>
        <button class="btn btn-secondary py-2 px-5 mb-4 me-4 rounded-5"><?php esc_html_e( $service->name ); ?></button>
        <?php
      endforeach;
      ?>
    </div>
    <div class="swiper search-users text-center">
      <div class="swiper-wrapper">
      <?php
        foreach( $services as $service ):
          $usersID = get_objects_in_term( $service->term_id, 'services', array( 'order' => 'DESC' ));
          foreach($usersID as $usersIDkey => $userID):
            if( $usersIDkey < 10 ):
              $users = get_users( array( 'include' => [$userID] ) );
              foreach($users as $user): 
                $image = get_field('profile_image', $user);
                $more_services = count($services) - 4;
                ?>
                <div class="swiper-slide border border-2 border-light rounded-3">
                      <div class="image-wrapper-users mb-6 ">
                        <?php Acf::image( $image, 'large', 'rounded-circle', ); ?> 
                      </div>
                      <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?> <?php esc_html_e( $user->last_name ) ?></h4>
                      <ul class="ps-0 justify-content-center text-center">
                        <?php
                        foreach( $services as $service_key => $service ):
                          if( $service_key < 4 ):
                        ?>
                            <li class="bg-blue-transperent py-1 px-5 ms-0 me-2 mb-2 rounded-5 text-smaller object-cover d-inline-flex justify-content-center"><?php esc_html_e( $service->name ) ?></li>
                          <?php
                          endif;
                        endforeach;  
                        if ( $more_services > 0 ):      
                        ?>
                          <a href="" class="txt-primary d-inline-flex"><li>+<?php echo $more_services; ?></li></a>
                        <?php 
                        endif;
                        ?>
                      </ul>
                      <a href="<?php echo esc_url( $user->user_url); ?>" class="btn btn-orange-ghost mb-8">Pogledaj profil</a>
                  </div>
                  <?php 
              endforeach;
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