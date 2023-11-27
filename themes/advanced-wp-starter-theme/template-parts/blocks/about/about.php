<?php
/**
 * Template part for displaying page About block.
 *
 */

?>
<section class="about text-center py-12 py-lg-22 txt-white">
  <div class="container">
    <div class="row">
      <?php
      $args = get_field('about');
      foreach( $args as $arg):
        ?>
        <div class="col-12 col-lg-4">
          <img src="<?php echo $arg['image']['url'] ?>" alt="" class="rounded-circle mb-10">
          <h4 class="mb-2"><?php echo $arg['title']; ?></h4>
          <p class="mb-8 mb-lg-0 p-small"><?php echo $arg['text']; ?></p>
        </div>
      <?php 
      endforeach;
      ?>
    </div>
  </div>
</section>
