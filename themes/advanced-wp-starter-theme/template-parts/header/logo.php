<?php
$headerSettings = get_field( 'header_settings', 'option' );
if ( ! empty( $headerSettings['logo'] ) ) :
  ?>
  <a href="<?php echo esc_url( home_url() ); ?>" title="<?php bloginfo( 'name' ); ?>" class="custom-logo-link">
    <img src="<?php echo esc_url( $headerSettings['logo']['sizes']['medium'] ); ?>" width="<?php esc_attr_e( $headerSettings['logo']['width'] ); ?>" height="<?php esc_attr_e( $headerSettings['logo']['height'] ); ?>" class="w-100 custom-logo" alt="<?php bloginfo( 'name' ); ?>">
  </a>
  <?php
endif;