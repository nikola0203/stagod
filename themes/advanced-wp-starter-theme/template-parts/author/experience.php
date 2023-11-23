<?php
/**
 * Template part for the user long description.
 */

$work_experience = get_field( 'work_experience' );
$educations      = get_field( 'educations' );
// print_var($current_user->description);
?>
<ul class="nav nav-tabs" role="tablist">
  <?php
  if ( have_rows( 'work_experience' ) ) :
    ?>
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="experience-tab" data-bs-toggle="tab" data-bs-target="#experience-tab-pane" type="button" role="tab" aria-controls="experience-tab-pane" aria-selected="true">Iskustvo</button>
    </li>
    <?php
  endif;
  ?>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Edukacija</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <?php
  if ( have_rows( 'work_experience' ) ) :
    ?>
    <div class="tab-pane fade show active" id="experience-tab-pane" role="tabpanel" aria-labelledby="experience-tab" tabindex="0">
      <?php
      while( have_rows( 'work_experience' ) ) :
        the_row();
        $from_year = get_sub_field( 'from_year' );
        $to_year   = get_sub_field( 'to_year' );
        $position  = get_sub_field( 'position' );
        $company   = get_sub_field( 'company_name' );
        $work_desc = get_sub_field( 'work_description' );
        ?>
        <div class="border-bottom pb-10 mb-10">
          <div class="row">
            <div class="col-lg-3">
              <div class="d-flex"><?php echo ( $from_year ) ? $from_year : ''; ?> &dash; <?php echo ( $to_year ) ? $to_year : ''; ?></div>
            </div>
            <div class="col-lg-9">
              <?php
              if ( $position ) :
                ?>
                <h2 class="h4"><?php esc_html_e( $position ); ?></h2>
                <?php
              endif;
              if ( $company ) :
                ?>
                <h3 class="h5"><?php esc_html_e( $company ); ?></h3>
                <?php
              endif;
              if ( $work_desc ) :
                ?>
                <div class=""><?php echo wp_kses_post( $work_desc ); ?></div>
                <?php
              endif;
              ?>
            </div>
          </div>
        </div>
        <?php
      endwhile;
      ?>
    </div>
    <?php
  endif;
  if ( have_rows( 'educations' ) ) :
    ?>
    <div class="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabindex="0">
      <?php
      while( have_rows( 'educations' ) ) :
        the_row();
        $from_year = get_sub_field( 'from_year' );
        $to_year   = get_sub_field( 'to_year' );
        $school    = get_sub_field( 'school_name' );
        $degree    = get_sub_field( 'degree' );
        ?>
        <div class="border-bottom pb-10 mb-10">
          <div class="row">
            <div class="col-lg-3">
              <div class="d-flex"><?php echo ( $from_year ) ? $from_year : ''; ?> &dash; <?php echo ( $to_year ) ? $to_year : ''; ?></div>
            </div>
            <div class="col-lg-9">
              <?php
              if ( $school ) :
                ?>
                <h2 class="h4"><?php esc_html_e( $school ); ?></h2>
                <?php
              endif;
              if ( $degree ) :
                ?>
                <h3 class="h5"><?php esc_html_e( $degree ); ?></h3>
                <?php
              endif;
              ?>
            </div>
          </div>
        </div>
        <?php
      endwhile;
      ?>
    </div>
    <?php
  endif;
  ?>
</div>
