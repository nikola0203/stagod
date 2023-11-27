<?php
/**
 * Template part for displaying page About block.
 *
 */
$args = get_field('about');
if ( ! empty( $args )):
?>
  <section class="about text-center py-12 py-lg-22 txt-white">
    <div class="container">
      <div class="row">
        <?php
        foreach( $args as $arg):
          ?>
          <div class="col-12 col-lg-4">
            <img src="<?php echo esc_url($arg['image']['url']); ?>" alt="" class="rounded-circle mb-10">
            <h4 class="mb-2"><?php echo esc_html($arg['title']); ?></h4>
            <p class="mb-8 mb-lg-0 p-small"><?php echo esc_html($arg['text']); ?></p>
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
