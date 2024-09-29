<?php
use Awpt\Plugins\Acf;

$city  = get_field( 'city' );
$image = get_field( 'profile_image' );
?>
<h1 class="h3">Podešavanje naloga</h1>

<div id="account-settings" data-user_id="<?php esc_attr_e( get_current_user_id() ); ?>" class="row">
  <div class="col-xl-8">
    <div id="form-update-personal-data" data-user_city="<?php echo ( $city ) ? esc_attr( $city ) : 'Beograd'; ?>"></div>
    <div id="form-update-email"></div>
    <div id="form-update-password"></div>
    <div id="form-delete-account"></div>
  </div>
  <div class="col-xl-4">
    <div class="border p-4 p-xl-8 mb-6 rounded-4 bg-white">
      <h2 class="h5 text-center text-xxl-start">Profilna slika</h2>
      <div id="form-update-image" data-profile_image="<?php echo ( ! empty( $image ) ) ? esc_url( $image['sizes']['medium'] ) : '' ?>"></div>
    </div>
  </div>
</div>