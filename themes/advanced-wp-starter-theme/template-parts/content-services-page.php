<?php
/**
 * Template part for displaying results in services page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */

use Awpt\Plugins\Acf;

$total_services = count(get_terms(array('taxonomy' => 'services', 'hide_empty' => false)));
$term_args = array (
  'taxonomy' => 'services',
  'parent'   => '0',
  'hide_empty' => true,
  'count' => true,
);
$terms = get_terms( $term_args );
?>
<div class="container">
  <div class="link-wrap mb-6">
    <a href="<?php echo esc_url( get_home_url() ); ?>">Početna</a> / <span>Sve kategorije</span>
  </div>
  <h3 class="mb-8 d-inline-flex">Sve kategorije </h3><span class="text-huge-1 txt-dark-grey"> (<?php esc_html_e($total_services); ?>)</span>
  <div class="row">  
    <?php
    foreach ( $terms as $term ):
      $children_args = array(
        'taxonomy'   => 'services',
        'child_of'   => $term->term_id,
        'hide_empty' => false
      );
      $children = get_terms( $children_args );
      if ( ! empty ( $children ) ):
        $icon = get_field( 'icon', $term );
        ?>  
        <div class="col-12 col-md-6 col-lg-3 mb-6 mb-lg-0">
          <div class="cat-wrapper bg-white br-16 p-8">
            <div class="icon-wrap">
              <?php Acf::image( $icon, 'large', 'w-lg-50 bg-light p-6 br-16 mb-6' ); ?>
            </div>
            <h4><?php esc_html_e( $term->name ); ?></h4>
            <ul class="ps-0 mb-0 margin-a-last-none">
              <?php
              foreach ( $children as $child ):
              ?>
                <a href="" class="mb-6 d-block txt-black"><li class="fw-bold"><?php esc_html_e( $child->name ); ?></li></a>
              <?php
              endforeach;
              ?>
            </ul>
          </div>
        </div>
        <?php
      endif;
    endforeach;
    ?>
  </div>
</div>