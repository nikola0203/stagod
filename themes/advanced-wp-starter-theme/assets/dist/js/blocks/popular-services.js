"use strict";
(self["webpackChunkadvanced_wp_starter_theme"] = self["webpackChunkadvanced_wp_starter_theme"] || []).push([["/js/blocks/popular-services"],{

/***/ "./assets/src/scripts/blocks/popular-services.js":
/*!*******************************************************!*\
  !*** ./assets/src/scripts/blocks/popular-services.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SwiperPopularServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SwiperPopularServices */ "./assets/src/scripts/modules/SwiperPopularServices.js");

new _modules_SwiperPopularServices__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./assets/src/scripts/modules/SwiperPopularServices.js":
/*!*************************************************************!*\
  !*** ./assets/src/scripts/modules/SwiperPopularServices.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css */ "./.yarn/cache/swiper-npm-11.2.0-e5138a1d83-e5903d9cad.zip/node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/pagination */ "./.yarn/cache/swiper-npm-11.2.0-e5138a1d83-e5903d9cad.zip/node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./.yarn/cache/swiper-npm-11.2.0-e5138a1d83-e5903d9cad.zip/node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./.yarn/cache/swiper-npm-11.2.0-e5138a1d83-e5903d9cad.zip/node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./.yarn/cache/swiper-npm-11.2.0-e5138a1d83-e5903d9cad.zip/node_modules/swiper/modules/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import 'swiper/css/bundle'
// swiper core styles

// modules styles




var SwiperPopularServices = /*#__PURE__*/_createClass(function SwiperPopularServices() {
  _classCallCheck(this, SwiperPopularServices);
  _defineProperty(this, "popularServices", function () {
    var slides = document.querySelectorAll(".popular-services");
    slides.forEach(function (slider, index) {
      slider.classList.add("popular-services-" + index);
      slider.parentElement.parentElement.getElementsByClassName("swiper-pagination")[0].classList.add("swiper-pagination-" + index);
      slider.parentElement.getElementsByClassName("swiper-button-next-popular-services")[0].classList.add("swiper-button-next-popular-services-" + index);
      slider.parentElement.getElementsByClassName("swiper-button-prev-popular-services")[0].classList.add("swiper-button-prev-popular-services-" + index);

      // console.log(slider.getElementsByClassName('swiper-pagination')[0])

      new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".popular-services-" + index, {
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
          nextEl: ".swiper-button-next-popular-services-" + index,
          prevEl: ".swiper-button-prev-popular-services-" + index
        },
        // Responsive breakpoints
        breakpoints: {
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
  this.popularServices();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwiperPopularServices);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/blocks/vendor"], () => (__webpack_exec__("./assets/src/scripts/blocks/popular-services.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);