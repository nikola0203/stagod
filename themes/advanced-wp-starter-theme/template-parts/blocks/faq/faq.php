<?php
/**
 * Template part for displaying page FAQ block.
 *
 */

$class_name = 'faq';
$title      = get_field( 'title' );
$link       = get_field( 'link' );
$gray_bg    = get_field( 'gray_background' );
$allowedHtml = array(
  'strong' => array(),
  'span'   => array(),
);

if ( $gray_bg ) {
  $class_name .= ' py-12 py-lg-20';
} else {
  $class_name .= ' my-12 my-lg-20';
}

// Create class attribute allowing for custom "className" values.
if ( ! empty( $block['className'] ) ) {
  $class_name .= ' ' . $block['className'];
}
?>
<section class="<?php echo esc_attr( $class_name ); ?>">
  <div class="container">
    <?php
    if ( $gray_bg ) :
      ?>
      <style>.faq {background-color: #F5F5F5;}</style>
      <?php
    endif;
    if ( $title ) :
      ?>
      <h2 class="mb-8 mb-lg-15"><?php echo wp_kses( $title, $allowedHtml ); ?></h2>
      <?php
    endif;
    if ( have_rows( 'faqs' ) ) :
      ?>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="faq__wrapper">
            <?php
            while ( have_rows( 'faqs' ) ) :
              the_row();
              $question = get_sub_field( 'question' );
              $answer   = get_sub_field( 'answer' );
              if ( $question ) :
                ?>
                <h3 class="faq__wrapper-question h5 font-family-base px-xl-5 py-5 d-flex justify-content-between align-items-center fw-light border-bottom mb-0">
                <span class="flex-shrink-1"><?php esc_html_e( $question ); ?>&nbsp;</span><i class="icon d-inline-block ms-5 flex-shrink-0"></i></h3>
                <?php
              endif;
              if ( $answer ) : 
                ?>
                <div class="faq__wrapper-answer margin-last-none px-5 mb-0"><?php echo wp_kses_post( $answer ); ?></div>
                <?php
              endif;
            endwhile;
            ?>
          </div>
        </div>
      </div>
      <?php
    endif;
    if ( ! empty( $link ) ) :
      ?>
      <div class="text-center mt-8 mt-xl-14">
        <a href="<?php echo esc_url( $link['url'] ); ?>" class="btn btn-transparent btn-small" title="<?php esc_attr_e( $link['title'] ); ?>" target="<?php esc_attr_e( $link['target'] ); ?>"><?php esc_html_e( $link['title'] ); ?><i class="icon-btn"><?php echo icon_plus( '10px', '14px', '#915447' ); ?></i></a>
      </div>
      <?php
    endif;
    ?>
  </div>
</section>
<?php
