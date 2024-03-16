<?php
/**
 * Edit profile page.
 */

$user_id    = get_queried_object_id();
$user       = get_user_by( 'id', $user_id );
$short_desc = get_user_meta( $user_id, 'description', true );
// print_var($user);
?>

<h1>Edit Profile</h1>
<div class="border p-4 p-xl-8 mb-6 rounded-4">
  <?php
  if ( $short_desc ) :
    ?>
    <h2 class="h4 mb-0"><?php echo wp_kses_post( $short_desc ); ?></h2>
    <?php
  endif;
  ?>
</div>