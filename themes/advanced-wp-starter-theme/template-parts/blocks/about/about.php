<?php
/**
 * Template part for displaying page About block.
 *
 */

use Awpt\Plugins\Acf;

$about_blocks = get_field( 'about' );

if ( ! empty( $about_blocks ) ) :
  ?>
  <section class="about text-center py-12 py-lg-22 txt-white bg-primary">
    <div class="container">
      <div class="row">
        <?php
        foreach ( $about_blocks as $block ) :
          ?>
          <div class="col-12 col-lg-4">
            <?php
            if ( ! empty( $block['image'] ) ) :
              ?>
              <div class="image-wraper m-auto mb-10 rounded-circle">
                <?php Acf::image( $block['image'], 'medium', 'rounded-circle object-fit-cover' ); ?>
              </div>
              <?php
            endif;
            if ( ! empty( $block['title'] ) ) :
              ?>
              <h4 class="mb-2 txt-white"><?php esc_html_e( $block['title'] ); ?></h4>
              <?php
            endif;
            if ( ! empty( $block['text'] ) ) :
              ?>
              <p class="mb-8 mb-lg-0 p-small txt-white"><?php esc_html_e( $block['text'] ); ?></p>
              <?php
            endif;
            ?>
          </div>
          <?php 
        endforeach;
        ?>
      </div>
    </div>
  </section>
  <?php
endif;
