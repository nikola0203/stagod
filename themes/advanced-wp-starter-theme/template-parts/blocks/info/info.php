<?php
/**
 * Template part for displaying page Info block.
 *
 */

$args = get_field('info');
if ( ! empty( $args )):
  $count_args = count( $args );
  foreach( $args as $arg_key => $arg ):
  ?>
    <section class="info py-12 py-lg-22 <?php echo ( $arg_key == $count_args-1 ) ? 'info-two' : ''; ?>">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 d-flex flex-column justify-content-center <?php echo ( $arg_key == $count_args-1 ) ? 'order-lg-1' : ''; ?> ">
            <h2 class="mb-6"><?php echo esc_html($arg['title']); ?></h2>
            <p class="mb-8 p-small"><?php echo esc_html($arg['text']); ?></p>
            <a href="<?php echo $arg['link']['url'] ?>"><input type="button" value="<?php echo esc_html($arg['link']['title']); ?>" class="btn btn-primary mb-8 mb-lg-0"></a>
          </div>
          <div class="col-12 col-lg-6 <?php echo ( $arg_key == $count_args-1 ) ? 'text-lg-start' : 'text-lg-end'; ?>">
            <img src="<?php echo esc_url($arg['image']['url']); ?>" alt="" class="w-lg-75">
          </div>
        </div>
      </div>
    </section>
    <?php
  endforeach;
endif;
?>  
