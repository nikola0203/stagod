<?php
if ( has_nav_menu( 'primary' ) ) :
  wp_nav_menu(
    array(
      'theme_location'  => 'primary',
      'menu_id'         => 'primary-menu',
      'menu_class'      => 'menu d-lg-flex align-items-lg-center ps-0',
      'container_id'    => 'primary-menu-container',
      'container_class' => 'ms-lg-auto ',
    )
  );
endif;
