<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$page_id           = get_queried_object_id();
$current_user      = get_user_by( 'id', $page_id );
$image             = get_field( 'profile_image' );
$current_url       = home_url( $wp->request );
$messages_url      = get_author_posts_url( $page_id ) . 'messages';
$notifications_url = get_author_posts_url( $page_id ) . 'notifications';
$ratings_url       = get_author_posts_url( $page_id ) . 'ratings';
$saved_url         = get_author_posts_url( $page_id ) . 'saved';
$edit_account_url  = get_author_posts_url( $page_id ) . 'edit-account';
$edit_profile_url  = get_author_posts_url( $page_id ) . 'edit-profile';
?>
<div class="author-info-wrapper border rounded-4 bg-white">
  <div class="author-info-top d-flex flex-column justify-content-center align-items-center py-6 pt-lg-8 px-lg-6">
    <div class="img-wrapper-profile mb-2">
      <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover' ); ?>
    </div>
    <?php
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-6"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <ul class="author-info-bottom px-6 mb-0">
    <li class="mb-6 <?php echo ( $current_url == $messages_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $messages_url ); ?>">Poruke <?php echo icon_arrow_down(); ?></a>
    </li>
    <li class="mb-6 <?php echo ( $current_url == $notifications_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $notifications_url ); ?>">Obaveštenja <?php echo icon_arrow_down(); ?></a>
    </li>
    <li class="mb-6 <?php echo ( $current_url == $ratings_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $ratings_url ); ?>">Ocene <?php echo icon_arrow_down(); ?></a>
    </li>
    <li class="mb-6 <?php echo ( $current_url == $saved_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $saved_url ); ?>">Sačuvano <?php echo icon_arrow_down(); ?></a>
    </li>
    <li class="mb-6 <?php echo ( $current_url == $edit_account_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $edit_account_url ); ?>">Podešavanje naloga <?php echo icon_arrow_down(); ?></a>
    </li>
    <li class="mb-6 <?php echo ( $current_url == $edit_profile_url ) ? 'active' : ''; ?>">
      <a class="d-flex align-items-center justify-content-between txt-black fw-bold" href="<?php echo esc_url( $edit_profile_url ); ?>">Podešavanje profila usluga <?php echo icon_arrow_down(); ?></a>
    </li>
  </ul>
</div>
