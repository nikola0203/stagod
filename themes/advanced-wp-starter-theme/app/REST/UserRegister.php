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
      array(
        'methods'  => 'POST',
        'callback' => [$this, 'wc_rest_user_endpoint_handler'],
      )
    );
  }

  public function response_handler( $status, $message, $field, $args = [] ) : array
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
      'verified_user'    => false,
      'terms_conditions' => $terms
    ];

    // Create user
    $user = wp_create_user( $username, $password, $email );

    if ( ! is_wp_error( $user ) ) {
      foreach( $meta_values as $key => $val ) {
        update_user_meta( $user, $key, $val ); 
      }

      return rest_ensure_response( $this->response_handler( 200, 'Uspešno ste se registrovali!' ) );
    } else {
      return rest_ensure_response( $this->response_handler( 404, 'Error!' ) );
    }
  }
}