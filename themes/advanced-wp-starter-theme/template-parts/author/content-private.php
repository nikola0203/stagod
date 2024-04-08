<?php
/**
 * Template part for displaying user template for the logged in users.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package awpt
 */

?>
<main id="primary" class="site-main bg-light py-8 py-xl-14">
  <div class="container">
    <?php
    if ( ! get_user_meta( get_queried_object_id(), 'account_activated', true ) ) :
      ?>
      <div class="alert alert-danger fs-5 mb-6 mb-xl-14 p-xl-8" role="alert">
        <p>Ovo je automatska poruka koja Vas obaveštava da je Vaš nalog uspešno kreiran na našoj platformi. Da biste potpuno aktivirali Vaš nalog, molimo Vas da sledite korake za verifikaciju putem e-mail adrese.</p>
        <p>Molimo Vas da proverite svoj e-mail inbox (uključujući i spam/junk folder) kako biste pronašli e-mail od nas. U e-mailu će se nalaziti link za potvrdu Vašeg naloga.</p>
        <p class="mb-0">Ukoliko niste primili e-mail u roku od nekoliko minuta, molimo Vas da proverite da li je adresa koju ste uneli ispravna. Ako imate bilo kakvih poteškoća ili dodatnih pitanja, slobodno nas kontaktirajte.</p>
      </div>
      <?php
    endif;
    if ( isset( $_GET['activation_code'] ) && is_user_logged_in() ) {
      $data = unserialize( base64_decode( $_GET['activation_code'] ) );
      $code = get_user_meta( $data['id'], 'activation_code', true );
      // verify whether the code given is the same as ours
      if ( $code == $data['activation_code'] ) {
        ?>
        <div class="alert alert-success fs-5 mb-6 mb-xl-14 p-xl-8" role="alert">
          <p>Vaš nalog uspešno aktiviran! Sada možete u potpunosti pristupiti našoj platformi i koristiti sve njene funkcije.</p>
          <p>Ako imate bilo kakvih pitanja ili nedoumica u vezi sa korišćenjem naše platforme, slobodno nas kontaktirajte. Naš tim je tu da Vam pomogne.</p>
          <p class="mb-0">Još jednom, hvala Vam što ste se pridružili našoj zajednici.</p>
        </div>
        <?php
      }
    }
    ?>
    <div class="row">
      <div class="col-lg-4">
        <?php 
        get_template_part( 'template-parts/author/private/info' );
        get_template_part( 'template-parts/author/public/map' );
        ?>
      </div>
      <div class="col-lg-8">
        <?php
        $get_query_vars = ( ! empty( $wp->query_vars['author_page'] ) ) ? $wp->query_vars['author_page'] : false;
        switch ( $get_query_vars ) :
          case 'messages': 
            get_template_part( 'template-parts/author/private/messages' );
            break;
          case 'notifications': 
            print_var("notifications");
            break;
          case 'ratings': 
            print_var("ratings");
            break;
          case 'saved': 
            print_var("saved");
            break;
          case 'edit-account':
            get_template_part( 'template-parts/author/private/edit-account' );
            break;
          case 'edit-profile':
            get_template_part( 'template-parts/author/private/edit-profile' );
            break;
          case 'reset-password':
            get_template_part( 'template-parts/author/private/reset-password' );
            break;
          default: 
            get_template_part( 'template-parts/author/public/video' );
            get_template_part( 'template-parts/author/private/description' );
            get_template_part( 'template-parts/author/public/categories' );
            get_template_part( 'template-parts/author/public/reviews' );
            get_template_part( 'template-parts/author/public/experience' );
            get_template_part( 'template-parts/author/public/gallery' );
            break;
        endswitch;
        ?>
      </div>
    </div>
  </div>
</main>
