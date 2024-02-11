<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;

$current_user = get_user_by( 'id', get_queried_object_id() );
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
      <?php
    endif;
    ?>
    <hr>
  </div>
  <div class="author-info-bottom">
    <ul>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'messages', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Poruke <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'notifications', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Obavestenja <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'ratings', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Ocene <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'saved', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Sacuvano <?php echo icon_arrow_down(); ?></a></li>
      <li class="mb-4 mb-xl-8"><a href="<?php echo esc_url( add_query_arg( 'user_page', 'edit-profile', get_author_posts_url( get_queried_object_id() ) ) ); ?>">Podesavanje Profila <?php echo icon_arrow_down(); ?></a></li>
    </ul>
  </div>
</div>
