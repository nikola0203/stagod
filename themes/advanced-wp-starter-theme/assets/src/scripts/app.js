/**
 * Manage global libraries from the package.json file
 */

/**
 * Import libraries
 */
// Lazy load library
// import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/bgset/ls.bgset";
import "lazysizes/plugins/respimg/ls.respimg";
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

// Import custom modules
import App from './modules/app.js';
import NavMenu from "./modules/nav-menu";
// import Slider from './modules/slider.js';

const app = new App();
const nav_menu = new NavMenu();
// const slider = new Slider();