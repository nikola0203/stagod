<?php

namespace Awpt\REST;

use WP_REST_Response;
use WP_Error;

class UserSetNewPassword
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
      'users/set-new-password/(?P<user_id>\d+)',
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

    if ( empty( $parameters['password'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je obavezna', 'password' ) );
    }

    $user = get_user_by( 'ID', $parameters['user_id'] );

    if ( $user->user_pass == wp_hash_password( $parameters['password'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je vec registrovana', 'password' ) );
    }

    $reset_password_code = get_user_meta( $user->ID, 'reset_password_code', true );

    if ( ! $reset_password_code ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je već resetovana', '' ) );
    }

    wp_set_password( $parameters['password'], $parameters['user_id'] );

    // Empty meta field to prevent multiple resset
    update_user_meta( $parameters['user_id'], 'reset_password_code', '' );

    return rest_ensure_response(
      $this->response_handler(
        200,
        'Uspešno ste resetovali lozinku!',
        '',
        [
          'redirect_url' => home_url('/login/'),
        ]
      )
    );
  }
}