
<?php
/**
 * Reset password template
 *
 * @package awpt
 */

get_header('empty');
?>
<div class="container py-6 py-xl-12">
  <div class="row justify-content-center align-items-center">
    <div class="col-xl-6">
      <div id="section-reset-password" data-user_id=<?php echo $args; ?>></div>
    </div>
  </div>
</div>
<?php
get_footer();
