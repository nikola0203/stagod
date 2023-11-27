<?php
/**
 * Template part for displaying page About block.
 *
 */

use Awpt\Plugins\Acf;

$services = get_field( 'select_services' );

foreach ( $services as $service ) :
  $image = get_field( 'image', $service );
  
  Acf::image( $image, 'large', 'w-lg-75' );
  
  print_var( $service );
  print_var( $service->name );
  print_var( $service->count . ' vestina' );
  ?>
  <?php 
endforeach;