<?php
/**
 * Template part for the user long description.
 */

 
$current_user = get_user_by( 'id', get_queried_object_id() );
$long_desc    = get_field( 'long_description' );
?>
<div class="author-desc-wrapper">
  <?php
  if ( $current_user->description ) :
    ?>
    <h1 class="mb-8"><?php esc_html_e( $current_user->description ); ?></h1>
    <?php
  endif;
  if ( $long_desc ) :
    ?>
    <h2 class="h4 mb-6">O Meni</h2>
    <div class="mb-8 mb-lg-14">
      <?php echo wp_kses_post( $long_desc ); ?>
    </div>
    <?php
  endif;
  ?>
</div>
