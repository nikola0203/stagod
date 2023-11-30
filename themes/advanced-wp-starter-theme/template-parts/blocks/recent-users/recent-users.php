<?php
  use Awpt\Plugins\Acf;
  $args = array(
    'fields' => 'all',
  );
  $users = get_users($args);
  $name = get_field('phone_number');
  print_var($users);
?>

<section class="section-recent-users my-22">
  <div class="container">
    <h2 class="mb-8"><?php esc_html_e( get_field('title') ); ?></h2>
    <?php
    foreach( $users as $user ):
      print_var($user->phone_number);
      
      ?>
      <img src="<?php $user->profile_image; ?>" alt="">
      <h4><?php esc_html_e( $user->display_name ) ?></h4>
      <?php
    endforeach;
    ?>
  </div>
</section>