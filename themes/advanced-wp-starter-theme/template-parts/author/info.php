<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$current_user = wp_get_current_user();
$image        = get_field( 'profile_image' );
?>
<div class="author-info-wrapper border rounded-4">
  <div class="author-info-top d-flex flex-column justify-content-center align-items-center p-lg-8">
    <?php
    if ( $image ) :
      Acf::image( $image );
    endif;
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-2"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <h3 class="h5 mb-6">Engleski jezik</h3>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <a href="" class="btn btn-transparent">Klikni za broj telefona</a>
  <a href="" class="btn btn-primary">Pošalji poruku</a>
</div>
