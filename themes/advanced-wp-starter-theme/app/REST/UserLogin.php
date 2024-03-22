<?php

namespace Awpt\REST;

use WP_REST_Response;
use WP_Error;

class UserLogin
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
      'users/login/',
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

    if ( empty( $parameters['password'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je obavezna', 'password' ) );
    }

    $username = sanitize_user( $parameters['username'] );
    $password = sanitize_text_field( $parameters['password'] );
    $email    = sanitize_email( $parameters['email'] );

    $credentials = [
      'user_login'    => $username,
      'user_password' => $password,
      'remember'      => true
    ];

    // Create user
    $user = wp_signon( $credentials );

    if ( ! is_wp_error( $user ) ) {
      wp_set_current_user( $user->ID );

      return rest_ensure_response(
        $this->response_handler(
          200,
          'Uspešno ste se ulogovali!',
          '',
          [
            'user_logged_in' => true,
            'redirect_url'   => get_author_posts_url( $user->ID ),
          ]
        )
      );
    } else {
      return rest_ensure_response( $this->response_handler( 404, 'Korisničko ime ili lozinka nisu ispravni' ) );
    }
  }
}