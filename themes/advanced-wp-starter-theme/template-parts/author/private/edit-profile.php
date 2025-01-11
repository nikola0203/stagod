<?php
/**
 * Edit profile page.
 */

$user_id    = get_queried_object_id();
$user       = get_user_by( 'id', $user_id );
$short_desc = get_user_meta( $user_id, 'description', true );
// print_var($user);
?>

<h1 class="h3">Podešavanje profila usluga</h1>
<div id="settings-edit-profile" data-user_id="<?php esc_attr_e( get_current_user_id() ); ?>">
  <div id="form-edit-short-desc"></div> 
  <div id="form-edit-city"></div>
  <div id="form-edit-long-desc"></div>
</div>