<?php
/**
 * Favorite users page.
 */
use Awpt\Plugins\Acf;

$get_favorite_users = get_user_meta( get_current_user_id(), 'favorite_users', true );
$count_users = count( $get_favorite_users );
?>

<h3>Sacuvano (<?php esc_html_e( $count_users ); ?>)</h3>
<section class="section-favorite-users text-center">
<div class="row">
<?php 
    if ( ! empty( $get_favorite_users ) ) :
      foreach( $get_favorite_users as $user_id ):
        $user = get_user_by( 'id', $user_id );
        $services      = get_field( 'services', $user );
        $image         = get_field( 'profile_image', $user );
        $more_services = ( ! empty( $services ) ) ? count( $services ) - 4 : array();
        ?>
        <div class="col-md-6 col-xl-4">
          <div class="user-wrapper border border-2 border-light bg-white rounded-3 px-6 relative">
            <a href="javascript:void(0)" id="btn-delete-user" data-user_id=<?php esc_attr_e( $user_id ); ?> class="close-icon position-absolute bg-white">
              <?php echo icon_closed_circle(); ?>
            </a>
            <?php
            if ( ! empty( $image ) ) :
              ?>
              <div class="image-wrapper-users mb-6 d-block">
                <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover h-100 w-100', ); ?> 
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
            <a href="<?php echo esc_url( get_author_posts_url( $user->ID ) ); ?>" class="btn btn-primary mb-6 w-100">Posaljite poruku</a>
            <a href="<?php echo esc_url( get_author_posts_url( $user->ID ) ); ?>" class="btn btn-orange-ghost mb-6 w-100">Pogledaj profil</a>

          </div>
        </div>
        <?php
      endforeach;
    endif;
  ?>
</div>
</section>