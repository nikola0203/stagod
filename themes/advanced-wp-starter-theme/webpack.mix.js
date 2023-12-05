/**
 * Advanced WP Starter Theme uses Laravel Mix
 *
 * Check the documentation at
 * https://laravel-mix.com/docs/6.0/what-is-mix
 */

let mix = require('laravel-mix')

// Autloading jQuery to make it accessible to all the packages.
mix.autoload({
	jquery: ['$', 'window.jQuery', 'jQuery'],
})

mix.setPublicPath('./assets/dist')

// Compile assets
mix.js('assets/src/scripts/app.js', 'assets/dist/js')
	.js('assets/src/scripts/admin.js', 'assets/dist/js')
	.js('assets/src/scripts/user-single.js', 'assets/dist/js')
	.js('assets/src/scripts/blocks/popular-services', 'assets/dist/js/blocks')
	.js('assets/src/scripts/blocks/find-services', 'assets/dist/js/blocks')
	.js('assets/src/scripts/blocks/recent-users', 'assets/dist/js/blocks')
	.js('assets/src/scripts/blocks/search-users', 'assets/dist/js/blocks')
	.sass('assets/src/sass/style.scss', 'assets/dist/css')
	.sass('assets/src/sass/admin.scss', 'assets/dist/css')

// Add versioning to assets in production environment
if (mix.inProduction()) {
	mix.version();
}
