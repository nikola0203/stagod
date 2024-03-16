<?php

namespace Awpt\Core;

/**
 * Shortcodes.
 */
class RewriteRules
{
  /**
   * Register default hooks and actions for WordPress.
   *
   * @return
   */
  public function register()
  {
    add_filter( 'author_rewrite_rules', [$this, 'author_rewrite_rules'], 10, 1 );
    add_filter( 'query_vars', [$this, 'register_author_query_var'], 10, 1 );
  }

  public function register_author_query_var( $qvars )
  {
	  $qvars[] = "author_page";

    return $qvars;
  }

  public function author_rewrite_rules( $rewrite_rules )
  {
    $rewrite_rules['author/([^/]+)/([^/]+)/?$'] = 'index.php?author_name=$matches[1]&author_page=$matches[2]';

    return $rewrite_rules;
  }
}
