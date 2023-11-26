<?php
/**
 * Template part for displaying page Info block.
 *
 */

$args = get_field('info');
$count_args = count( $args );
foreach( $args as $arg_key => $arg ):
?>
  <section class="info pt-12 pt-lg-22 <?php echo ( $arg_key == $count_args-1 ) ? 'info-two' : ''; ?>">
    <div class="container">
      <div class="row">
        <div class="col-6 <?php echo ( $arg_key == $count_args-1 ) ? 'order-1' : ''; ?>">
          <h2><?php echo $arg['title']; ?></h2>
          <p><?php echo $arg['text']; ?></p>
          <a href="<?php echo $arg['link']['url'] ?>"><input type="button" value="<?php echo $arg['link']['title']; ?>" class="btn btn-primary"></a>
        </div>
        <div class="col-6 mb-12 mb-lg-22">
          <img src="<?php echo $arg['image']['url']; ?>" alt="">
        </div>
      </div>
    </div>
  </section>
  <?php
endforeach;
?>  
