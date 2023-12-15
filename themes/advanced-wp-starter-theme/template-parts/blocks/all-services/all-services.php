<?php
$terms = get_field('taxonomy');
?>
<section class="section-all-services bg-light py-12 py-lg-22">
  <div class="container">
    <?php
    if ( ! empty ($terms) ):
      ?>
      <h2 class="mb-8 mb-lg-10"><?php esc_html_e( get_field( 'title' ) ); ?></h2>
      <?php
      foreach( $terms as $term ):
        ?>
        <h4 class="mb-6"><?php esc_html_e( $term->name ) ?></h4>
        <?php
        $term_args = array(
          'taxonomy'   => 'services',
          'child_of'   => $term->term_id,
          'hide_empty' => false
        );
        $childred = get_terms($term_args);
        ?>
        <ul class=" list-style-type-none ps-0 mb-10">
        <?php
        foreach ( $childred as $child ):
        ?>
          <a href="<?php echo esc_url( get_term_link( $child, 'services' ) ); ?>"><li class="bg-blue-transperent py-1 px-5 me-6 rounded-5 fw-bold d-inline-flex mb-6"><?php esc_html_e( $child->name );?></li></a>
        <?php
        endforeach;
        ?>
        </ul>
        <?php
      endforeach;
    endif;
    ?>
    <a href="<?php echo esc_url( get_field( 'link' ) ); ?>" class="txt-primary">Vidi sve kategorije +</a>
  </div>
</section>