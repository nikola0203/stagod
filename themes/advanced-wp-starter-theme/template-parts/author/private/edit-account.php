<?php
$city = get_field( 'city' );
?>
<h1 class="h3">Podešavanje naloga</h1>

<div class="row">
  <div class="col-xl-8">
    <div class="border p-4 p-xl-8 mb-6 rounded-4 bg-white">
      <div id="form-update-personal-data" data-user_id="<?php esc_attr_e( get_current_user_id() ); ?>" data-user_city="<?php echo ( $city ) ? esc_attr( $city ) : 'Beograd'; ?>"></div>
    </div>
    <div id="form-update-email" data-user_id="<?php esc_attr_e( get_current_user_id() ); ?>"></div>
    <div id="form-update-password"></div>
    <div id="form-delete-account"></div>
  </div>
  <div class="col-xl-4">
    <div class="border p-4 p-xl-8 mb-6 rounded-4 bg-white">
      <h2 class="h5">Profilna slika</h2>
      <div id="form-update-image"></div>
    </div>
  </div>
</div>