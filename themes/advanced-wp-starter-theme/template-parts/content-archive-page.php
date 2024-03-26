<?php
/**
 * Template part for displaying results in archive page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */
use Awpt\Plugins\Acf;
$term = get_queried_object();
$usersID = get_objects_in_term( $term->term_id, 'services');

?>
<div class="archive-wrapper container">
  <div class="row">
    <div class="col-lg-4">

    </div>
    <div class="col-12 col-lg-8">
      <?php
      if ( ! empty ($usersID) ):
        ?>
        <div class="row">
          <div class="col-md-6 mb-2">
            <h3 class="text-align-left"><?php esc_html_e( single_term_title() ); ?></h3>
            <p class="mb-4 text-gray-200">Pronadjeno <?php echo esc_html( $term->count ); ?> profesionalca</p>
          </div>
          <div class="col-md-6 d-flex align-items-center justify-content-lg-end mb-2">
            <div class="select-wrapper bg-white px-8 border border-dark br-8 fw-bold">
              <label for="sort" class="bg-white border-0 py-6 text-black">Sortiraj po:</label>
              <select name="sort" id="sort" class="border-0 rounded-start-0 py-6 p-small text-secondary pe-1 fw-bold">
                <option value="popular">Popularno</option>
                <option value="recent">Najnovije</option>
                <option value="old">Najstarije</option>
              </select>
            </div>
          </div>
        </div>
        <?php
        foreach ( $usersID as $userID ):
          $user          = get_user_by( 'id', $userID );
          $user_services = get_field( 'services', $user );
          $image         = get_field( 'profile_image',  $user);
          $more_services = ( ! empty( $user_services ) ) ? count( $user_services ) - 6 : [];
          $description   = get_field( 'long_description', $user );
          $address       = get_field( 'address', $user );
          $city          = get_field( 'city', $user);
          ?>
          <div class="user-wrapper bg-white mb-6 p-8 br-8">
            <div class="row">
              <div class="col-lg-2">
                <div class="image-wrapper-users img-wrap-128 mb-6 m-auto">
                  <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover', ); ?> 
                </div>
              </div>
              <div class="col-lg-6 text-center text-lg-start">
                <?php
                if ( $user ) :
                  ?>
                  <div class="info-wrapper">
                    <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?> <?php esc_html_e( $user->last_name ) ?></h4>
                    <span class="text-black d-inline-flex align-items-center mb-6 me-6 fw-bold"><?php echo icon_pin() .' ',  esc_html_e( $address ) .', ', esc_html_e( $city ); ?></span>
                    <span class="text-black d-inline-flex align-items-center fw-bold"><?php echo icon_basket(); ?> Online usluga</span>
                    <span class="d-none d-md-block fw-bold p-small"><?php echo $description ; ?></span>
                  </div>
                  <?php
                endif;
                if ( ! empty( $user_services ) ) :
                  ?>
                  <ul class="ps-0 pb-6 pb-lg-0 mb-6 mb-lg-0 border-bottom border-light border-lg-none">
                    <?php
                    foreach( $user_services as $service_key => $service ) :
                      if ( $service_key < 6 ) :
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
                  <?php
                endif;
                ?>
              </div>
              <div class="col-lg-4 text-center text-lg-end position-relative">
                <div class="mb-6">
                  <span class="fw-bold text-black me-4">Šeruj <?php echo icon_share(); ?></span><span class="fw-bold text-black">Sačuvaj </span><?php echo icon_heart(); ?>
                </div>
                <a href="<?php echo esc_url( get_author_posts_url( $userID ) ); ?>" class="btn btn-orange-ghost bg-white">Pogledaj profil</a>
              </div>
            </div>
          </div>
          <?php
        endforeach;
        else :
        ?>
        <h3 class="text-align-left">U kategoriji <?php esc_html_e( single_term_title() ); ?> trenutno nema selektovanih korisnika!</h3>
        <?php
      endif;
      ?>
    </div>
  </div>
</div>