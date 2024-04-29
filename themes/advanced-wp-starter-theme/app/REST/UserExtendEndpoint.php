<?php

namespace Awpt\REST;

use WP_REST_Response;
use WP_Error;

class UserExtendEndpoint
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    add_action( 'rest_api_init', [$this, 'add_user_fields'] );
  }
  
  function add_user_fields()
  {
    register_rest_field(
      'user',
      'user_email',
      [
        'get_callback'    => [$this, 'rest_get_user_field_email'],
        'update_callback' => null,
        'schema'          => [
          'description' => __( 'Email for the resource.' ),
          'type'        => 'string',
          'context'     => ['view'], // Adding `embed` and `view`
          'arg_options' => [
            'sanitize_callback' => [$this, 'sanitize_email_field'],
          ],
        ],
      ]
    );
    register_rest_field(
      'user',
      'first_name',
      [
        'get_callback'    => [$this, 'rest_get_user_field'],
        'update_callback' => null,
        'schema'          => [
          'description' => __( 'First name for the resource.' ),
          'type'        => 'string',
          'context'     => ['view'], // Adding `embed` and `view`
          'arg_options' => [
            'sanitize_callback' => [$this, 'sanitize_field'],
          ],
        ],
      ]
    );
    register_rest_field(
      'user',
      'last_name',
      [
        'methods'         => 'GET',
        'get_callback'    => [$this, 'rest_get_user_field'],
        'update_callback' => null,
        'schema'          => [
          'description' => __( 'Last name for the resource.' ),
          'type'        => 'string',
          'context'     => ['view'], // Adding `embed` and `view`
          'arg_options' => [
            'sanitize_callback' => [$this, 'sanitize_field'],
          ],
        ],
      ]
    );
  }

  function sanitize_field( $value )
  {
    return sanitize_text_field( $value );
  }

  function sanitize_email_field( $value )
  {
    return sanitize_email( $value );
  }

  function rest_get_user_field( $user, $field_name, $request )
  {
    return get_user_meta( $user['id'], $field_name, true );
  }

  function rest_get_user_field_email( $user, $field_name, $request ) {
    $get_userdata = get_userdata( $user['id'] );
    return $get_userdata->user_email;
  }
}