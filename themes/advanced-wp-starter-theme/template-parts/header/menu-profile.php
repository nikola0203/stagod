<?php
use Awpt\Plugins\Acf;

$user_id       = get_current_user_id();
$profile_image = get_field( 'profile_image', get_user_by( 'id', get_current_user_id() ) );
?>
<div class="header-menu-profile position-relative">
  <button class="me-8 header-menu-profile-button">
    <?php Acf::image( $profile_image, 'thumbnail', 'rounded-circle header-menu-profile-icon' ); ?>&nbsp;<?php echo icon_carret_down(); ?>
  </button>
  <ul id="header-menu-profile-list" class="position-absolute end-0 text-xl-end bg-primary z-index-1 p-4 p-xl-8 rounded-4 mb-0">
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'messages/' ); ?>" class="d-flex py-3" title="Poruke">Poruke</a></li>
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'notifications/' ); ?>" class="d-flex py-3" title="Obaveštenja">Obaveštenja</a></li>
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'ratings/' ); ?>" class="d-flex py-3" title="Ocene">Ocene</a></li>
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'saved/' ); ?>" class="d-flex py-3" title="Sačuvano">Sačuvano</a></li>
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'edit-account/' ); ?>" class="d-flex py-3" title="Podešavanje naloga">Podešavanje naloga</a></li>
    <li class="pe-0"><a href="<?php echo esc_url( get_author_posts_url( $user_id ) . 'edit-profile/' ); ?>" class="d-flex py-3" title="Podešavanje profila">Podešavanje profila usluga</a></li>
  </ul>
</div>