<?php
  use Awpt\Plugins\Acf;
  $args = array(
    'orderby' => 'user_registered',
    'order' => 'DESC',
    'number' => '10',
  );
  $users = get_users($args);
?>

<section class="section-recent-users my-22">
  <div class="container">
    <h2 class="mb-8"><?php esc_html_e( get_field('title') ); ?></h2>
    <?php
    foreach( $users as $user ):
      $services = get_field( 'services', $user );
      $image = get_field('profile_image', $user);
      $more_services = count($services) - 4;
      ?>
      <div class="image-wrapper mb-6 ">
        <?php Acf::image( $image, 'large', 'rounded-circle', ); ?> 
      </div>
      <h4 class="mb-2"><?php esc_html_e( $user->first_name ) ?> <?php esc_html_e( $user->last_name ) ?></h4>
      <ul class="d-flex ps-0">
        <?php
        foreach( $services as $service_key => $service ):
          if( $service_key < 4 ):
        ?>
            <li class="bg-blue-transperent py-1 px-5 ms-0 me-2 rounded-5 text-smaller object-cover"><?php esc_html_e( $service->name ) ?></li>
          <?php
          endif;
        endforeach;
        if ( $more_services > 0 ):      
        ?>
          <a href="" class="txt-primary"><li>+<?php echo $more_services; ?></li></a>
        <?php 
        endif;
        ?>
      </ul>
      <a href="<?php echo esc_url( $user->user_url); ?>" class="btn btn-orange-ghost">Pogledaj profil</a>
      <?php
    endforeach;
    ?>
  </div>
</section>