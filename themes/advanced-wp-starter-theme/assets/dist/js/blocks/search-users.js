"use strict";
(self["webpackChunkadvanced_wp_starter_theme"] = self["webpackChunkadvanced_wp_starter_theme"] || []).push([["/js/blocks/search-users"],{

/***/ "./assets/src/scripts/blocks/search-users.js":
/*!***************************************************!*\
  !*** ./assets/src/scripts/blocks/search-users.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/tab */ "./.yarn/__virtual__/bootstrap-virtual-fe983d1d46/0/cache/bootstrap-npm-5.3.2-20b391b636-5c3eb06342.zip/node_modules/bootstrap/js/dist/tab.js");
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_SwiperSearchUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/SwiperSearchUsers */ "./assets/src/scripts/modules/SwiperSearchUsers.js");


new _modules_SwiperSearchUsers__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./assets/src/scripts/modules/SwiperSearchUsers.js":
/*!*********************************************************!*\
  !*** ./assets/src/scripts/modules/SwiperSearchUsers.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css */ "./.yarn/cache/swiper-npm-11.0.5-152220df64-4a544e9551.zip/node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/pagination */ "./.yarn/cache/swiper-npm-11.0.5-152220df64-4a544e9551.zip/node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./.yarn/cache/swiper-npm-11.0.5-152220df64-4a544e9551.zip/node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./.yarn/cache/swiper-npm-11.0.5-152220df64-4a544e9551.zip/node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./.yarn/cache/swiper-npm-11.0.5-152220df64-4a544e9551.zip/node_modules/swiper/modules/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import 'swiper/css/bundle'
// swiper core styles

// modules styles




var SwiperSearchUsers = /*#__PURE__*/_createClass(function SwiperSearchUsers() {
  _classCallCheck(this, SwiperSearchUsers);
  _defineProperty(this, "searchUsers", function () {
    var slides = document.querySelectorAll(".search-users");
    slides.forEach(function (slider, index) {
      slider.classList.add("search-users-" + index);
      slider.parentElement.getElementsByClassName("swiper-button-next-search-users")[0].classList.add("swiper-button-next-search-users-" + index);
      slider.parentElement.getElementsByClassName("swiper-button-prev-search-users")[0].classList.add("swiper-button-prev-search-users-" + index);

      // console.log(slider.getElementsByClassName('swiper-pagination')[0])

      new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".search-users-" + index, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation],
        // autoHeight: true,
        // slidesPerView: "auto",
        slidesPerView: 1,
        // freeMode: true,
        // centeredSlides: true,
        // loop: true,
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination-" + index,
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next-search-users-" + index,
          prevEl: ".swiper-button-prev-search-users-" + index
        },
        // Responsive breakpoints
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 4
          }
          // 1400: {
          //   slidesPerView: 3,
          //   spaceBetween: 150
          // },
        }
      });
    });
  });
  this.searchUsers();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwiperSearchUsers);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/blocks/vendor"], () => (__webpack_exec__("./assets/src/scripts/blocks/search-users.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);