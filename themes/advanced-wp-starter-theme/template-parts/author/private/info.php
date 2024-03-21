<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$current_user = get_user_by( 'id', get_queried_object_id() );
$image        = get_field( 'profile_image' );
$current_url = home_url(add_query_arg(array(), $wp->request));
$messages_url = get_author_posts_url( get_queried_object_id() ) . 'messages';
$notifications_url = get_author_posts_url( get_queried_object_id() ) . 'notifications';
$ratings_url = get_author_posts_url( get_queried_object_id() ) . 'ratings';
$saved_url = get_author_posts_url( get_queried_object_id() ) . 'saved';
$edit_account_url = get_author_posts_url( get_queried_object_id() ) . 'edit-account';
$edit_profile_url = get_author_posts_url( get_queried_object_id() ) . 'edit-profile';
?>
<div class="author-info-wrapper border rounded-4">
  <div class="author-info-top d-flex flex-column justify-content-center align-items-center p-lg-8">
    <?php
    Acf::image( $image );
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-2"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <div class="author-info-bottom">
    <ul>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $messages_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $messages_url ); ?>">Poruke <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $notifications_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $notifications_url ); ?>">Obavestenja <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $ratings_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $ratings_url ); ?>">Ocene <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $saved_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $saved_url ); ?>">Sacuvano <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $edit_account_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $edit_account_url ); ?>">Podesavanje naloga <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8 <?php echo ( $current_url == $edit_profile_url ) ? 'active' : ''; ?>"><a href="<?php echo esc_url( $edit_profile_url ); ?>">Podesavanje profila usluga <?php echo icon_arrow_down(); ?></a></li>
    </ul>
  </div>
</div>
