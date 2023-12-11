<?php
/**
 * Template part for the user categories.
 */

$current_user = get_user_by( 'id', get_queried_object_id() );
$services     = get_field( 'services' );
?>
<div class="author-desc-wrapper">
  <h2 class="h4 mb-6 text-primary"><?php echo ( $current_user->user_firstname ) ? $current_user->user_firstname : ''; ?> može da vam pomogne sa:</h2>
  <div class="mb-8 mb-lg-14">
    <?php
    if ( ! empty( $services ) ) :
      ?>
      <ul class="list-author-categories ps-0">
        <?php
        foreach ( $services as $service_key => $service ) :
          ?>
          <li class="bg-blue-transperent text-primary fw-bold py-1 px-5 ms-0 me-2 mb-2 rounded-5 text-smaller object-cover d-inline-flex justify-content-center"><?php esc_html_e( $service->name ); ?></li>
          <?php
        endforeach;
        ?>
      </ul>
      <?php
    endif;
    ?>
  </div>
</div>
