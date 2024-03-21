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
  <a href="<?php echo esc_url( add_query_arg( $query_args, get_author_posts_url( get_current_user_id() ) . 'messages' ) ); ?>" class="btn btn-primary mx-8 d-block">Pošalji poruku</a>
  <a href="javascript:void(0)" id="btn-save-user" data-user_id=<?php esc_attr_e( get_queried_object_id() ); ?> class="btn btn-primary">Sačuvajte profil</a>

  <script>
    // Da se prebaci u JS file
    const button = document.getElementById('btn-save-user')

    button.addEventListener('click', (e) => {
      e.preventDefault();

      const user_id = button.getAttribute('data-user_id')
      
      // AJAX FUNKCIJA
      console.log('user_id')
    })
  </script>

</div>
