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

    return $parameters;

    if ( empty( $parameters['password'] ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je obavezna', 'password' ) );
    }

    $user = get_user_by( 'ID', 68 );

    if ( ! wp_check_password( $pass, $user->data->user_pass, $user->ID ) ) {
      return rest_ensure_response( $this->response_handler( 406, 'Lozinka je vec registrovana', 'password' ) );
    }

    $password = sanitize_text_field( $parameters['password'] );

    wp_set_password( $password, 68 );

    return rest_ensure_response(
      $this->response_handler(
        200,
        'Uspešno ste resetovali password!',
        '',
        [
          'redirect_url' => get_author_posts_url( $user->ID ),
        ]
      )
    );
  }

  function send_email_to_user_with_verification_code( $user_id, $user_email )
  {
    $code   = md5( time() );
    $string = [
      'id'                  => $user_id,
      'reset_password_code' => $code
    ];

    update_user_meta( $user_id, 'reset_password_code', $code );

    $url = get_author_posts_url( $user_id ) . '?reset_password_code=' . base64_encode( serialize( $string ) );

    $html = '<p>Pozdrav '. $first_name .',</p><br>';
    $html .= '<p>Kliknite na sledeći link za resetovanje lozinke: <a href="' . $url . '">' . $url . '</a></p>';
    $html .= 'ŠtaGod Tim';

    $headers = [ 'Content-Type: text/html; charset=UTF-8' ];

    wp_mail( $user_email, __(  'ŠtaGod reset lozinke', 'stagod' ), $html, $headers );
  }
}