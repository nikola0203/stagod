<?php
/**
 * Template part for the user info.
 */

use Awpt\Plugins\Acf;
use Awpt\Chat\Chat;

$current_user = get_user_by( 'id', get_queried_object_id() );
$image        = get_field( 'profile_image' );
$chat         = new Chat();
?>
<div class="author-info-wrapper border border-light rounded-4 pb-8 mb-8">
  <div class="author-info-top border-light d-flex flex-column justify-content-center align-items-center p-lg-8">
    <?php
    if ( $image ) :
      ?>
      <div class="img-wrapper mb-6">
        <?php Acf::image( $image, 'large', 'rounded-circle object-fit-cover h-100 w-100' ); ?>
      </div>
      <?php
    endif;
    if ( $current_user->user_firstname && $current_user->user_lastname ) :
      ?>
      <h2 class="h4 mb-2"><?php esc_html_e( $current_user->user_firstname . '&nbsp;' . $current_user->user_lastname ); ?></h2>
      <?php
    endif;
    ?>
    <hr>
  </div>
  <div class="user-info-wrapper d-flex mb-6 justify-content-between px-8">
    <div class="ratings-wrapper d-flex fw-bold">
      <div class="rating p-5 rounded-3 bg-primary">
        <p class="mb-0 text-white">4.6</p>
      </div>
      <div class="rating-txt lh-1 ms-4 mt-1">
        <p class="p-big mb-3">Izvrsno</p>
        <p class="p-small m-0 text-secondary">25 Ocena</p>
      </div>
    </div>
    <div class="date-created">
      <p class="p-small mb-0 text-gray-200 text-end">Clan od<br><?php echo date( 'd.m.Y', strtotime($current_user->user_registered) ) ?></p>
    </div>
  </div>
  <?php
  $chat_id                  = ( $chat->get_users_chat_id( get_current_user_id(), get_queried_object_id() ) );
  $active_chat_recipient_id = $chat->get_current_user_chat_recipient_id( get_queried_object_id() );
  $recipient_id             = ( $active_chat_recipient_id ) ? $active_chat_recipient_id : get_queried_object_id();
  $query_args               = array(
    'message_recipient' => $recipient_id
  );

  if ( 0 != $chat_id ) :
    $query_args['chat_id'] = $chat_id;
  endif;
  ?>
  <a href="<?php echo esc_url( add_query_arg( $query_args, get_author_posts_url( get_current_user_id() ) . 'messages' ) ); ?>" class="btn btn-primary mx-8 d-block mb-6">Pošalji poruku</a>

  <?php
  $get_favorite_users = get_user_meta( get_current_blog_id(), 'favorite_users', true );
  $user_id            = get_queried_object_id();
  $element_index      = ( ! empty( $element_index ) ) ? array_search( $user_id, $get_favorite_users ) : 0;
  $user_saved_id      = ( ! empty( $element_index ) ) ? $get_favorite_users[$element_index] : 0;
  // print_var($get_favorite_users);
  // print_var('element_index '.  $element_index);
  // print_var('user_saved_id '.  $user_saved_id);
  // print_var('user_id ' . $user_id);
  ?>
  <a href="javascript:void(0)" id="btn-save-user" data-user_id=<?php esc_attr_e( get_queried_object_id() ); ?> class="d-block mx-8 btn btn-save-user <?php echo ( $user_id == $user_saved_id ) ? 'favorite-user' : ''; ?>">Sačuvajte profil</a>
</div>
