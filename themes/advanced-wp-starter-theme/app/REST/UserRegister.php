<?php

namespace Awpt\REST;

use WP_REST_Response;
use WP_Error;

/**
 * UserRegister.
 */
class UserRegister
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    add_action( 'rest_api_init', [$this, 'wp_rest_user_endpoints' ] );
    add_action( 'init', [$this, 'verify_user_code'] );
  }

  /**
   * Register a new user
   *
   * @param  WP_REST_Request $request Full details about the request.
   * @return array $args.
   **/
  function wp_rest_user_endpoints( $request )
  {
    /**
     * Handle Register User request.
     */
    register_rest_route(
      'wp/v2',
      'users/register/',
      [
        'methods'             => 'POST',
        'callback'            => [$this, 'wc_rest_user_endpoint_handler'],
        'permission_callback' => false
      ]
    );
  }

  public function response_handler( $status, $message, $field = '', $args = [] ) : array
  {
    $response = [
      'status'  => $status,
      'message' => $message,
      'field'   => $field,
      'args'    => $args
    ];

    return $response;
  }

  function wc_rest_user_endpoint_handler( $request = null )
  {
    $parameters = $request->get_json_params();

    if ( empty( $parameters['username'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Korisničko ime je obavezno', 'username' ) );
    }

    if ( username_exists( $parameters['username'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Korisničko ime već postoji', 'username' ) );
    }

    if ( empty( $parameters['first_name'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Ime je obavezno', 'first_name' ) );
    }

    if ( empty( $parameters['last_name'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Prezime je obavezno', 'last_name' ) );
    }

    if ( empty( $parameters['password'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je obavezna', 'password' ) );
    }

    if ( empty( $parameters['email'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Email je obavezan', 'email' ) );
    }
    
    if ( email_exists( $parameters['email'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Email je već registrovan', 'email' ) );
    }

    if ( false == $parameters['terms_conditions'] ) {
      return rest_ensure_response( $this->response_handler( 406, 'Uslovi korišćenja moraju biti prihvaćeni', 'terms_conditions' ) );
    }

    $username    = sanitize_user( $parameters['username'] );
    $email       = sanitize_email( $parameters['email'] );
    $password    = sanitize_text_field( $parameters['password'] );
    $first_name  = sanitize_text_field( $parameters['first_name'] );
    $last_name   = sanitize_text_field( $parameters['last_name'] );
    $terms       = rest_sanitize_boolean( $parameters['terms_conditions'] );
    $meta_values = [
      'first_name'       => $first_name,
      'last_name'        => $last_name,
      'terms_conditions' => $terms
    ];
    $credentials = [
      'user_login'    => $username,
      'user_password' => $password,
      'remember'      => true
    ];

    // Create user
    $user_id = wp_create_user( $username, $password, $email );

    if ( ! is_wp_error( $user_id ) ) {
      foreach( $meta_values as $key => $val ) {
        update_user_meta( $user_id, $key, $val ); 
      }

      $this->send_email_to_user_with_verification_code( $user_id, $email );

      wp_signon( $credentials );
      wp_set_current_user( $user_id );

      return rest_ensure_response(
        $this->response_handler(
          200,
          'Uspešno ste se registrovali!',
          '',
          [
            'user_registered' => true,
            'redirect_url'    => get_author_posts_url( $user_id ),
          ]
        )
      );
    } else {
      return rest_ensure_response( $this->response_handler( 404, 'Error!' ) );
    }
  }

  function send_email_to_user_with_verification_code( $user_id, $user_email )
  {
    $code   = md5( time() );
    $string = [
      'id'              => $user_id,
      'activation_code' => $code
    ];

    update_user_meta( $user_id, 'account_activated', 0 );
    update_user_meta( $user_id, 'activation_code', $code );

    $url     = get_author_posts_url( $user_id ) . '?activation_code=' . base64_encode( serialize( $string ) );
    $html    = 'Kliknite na link ispod da bi verifikovali nalog <br/><br/> <a href="' . $url . '">' . $url . '</a>';
    $headers = [ 'Content-Type: text/html; charset=UTF-8' ];

    wp_mail( $user_email, __(  'ŠtaGod verifikacioni kod', 'stagod' ), $html, $headers );
  }

  function verify_user_code()
  {
    if ( isset( $_GET['activation_code'] ) && is_user_logged_in() ) {
      $data = unserialize( base64_decode( $_GET['activation_code'] ) );
      $code = get_user_meta( $data['id'], 'activation_code', true );
      // verify whether the code given is the same as ours
      if ( $code == $data['activation_code'] ) {
        update_user_meta( $data['id'], 'account_activated', 1 );
      }
    }
  }
}