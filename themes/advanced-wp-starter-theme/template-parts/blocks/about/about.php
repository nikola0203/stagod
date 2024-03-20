<?php
/**
 * Template part for displaying page About block.
 *
 */
$args = get_field('about');
if ( ! empty( $args )):
?>
  <section class="about text-center py-12 py-lg-22 txt-white bg-primary">
    <div class="container">
      <div class="row">
        <?php
        foreach( $args as $arg):
          ?>
          <div class="col-12 col-lg-4">
            <div class="image-wraper m-auto mb-10 rounded-circle">
              <img src="<?php echo esc_url($arg['image']['url']); ?>" alt="" class="rounded-circle object-fit-cover">
            </div>
            <h4 class="mb-2 txt-white"><?php echo esc_html($arg['title']); ?></h4>
            <p class="mb-8 mb-lg-0 p-small txt-white"><?php echo esc_html($arg['text']); ?></p>
          </div>
        <?php 
        endforeach;
        ?>
      </div>
    </div>
  </section>
<?php
endif;
?>
