"use strict";
(self["webpackChunkadvanced_wp_starter_theme"] = self["webpackChunkadvanced_wp_starter_theme"] || []).push([["/js/blocks/faq"],{

/***/ "./assets/src/scripts/blocks/faq.js":
/*!******************************************!*\
  !*** ./assets/src/scripts/blocks/faq.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_faq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/faq.js */ "./assets/src/scripts/modules/faq.js");

new _modules_faq_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./assets/src/scripts/modules/faq.js":
/*!*******************************************!*\
  !*** ./assets/src/scripts/modules/faq.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Faq = /*#__PURE__*/_createClass(function Faq() {
  _classCallCheck(this, Faq);
  _defineProperty(this, "faq", function (faq_section_class) {
    var faq_section = document.querySelectorAll(faq_section_class);
    if (faq_section.length > 0) {
      faq_section.forEach(function (faq, index) {
        var questions = faq.getElementsByClassName("faq__wrapper-question");
        var answers = faq.getElementsByClassName("faq__wrapper-answer");
        var _loop = function _loop(c) {
          questions[c].addEventListener("click", function (e) {
            var icon = this.getElementsByTagName('i')[0];
            // Hide other answers
            for (var i = 0; i < answers.length; i++) {
              if (c !== i) {
                answers[i].style.maxHeight = null;
              }
            }
            // Remove active class from other elements
            for (var _i = 0; _i < questions.length; _i++) {
              if (c !== _i) {
                questions[_i].classList.remove("active");
                // questions[i].getElementsByTagName('i')[0].classList.remove("icon-minus");
              }
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }

            // Add active class
            this.classList.toggle("active");
            // if (icon.classList.contains("icon-minus")) {
            //   icon.classList.add("icon-plus");
            // } else {
            //   icon.classList.add("icon-minus");
            // }
          });
        };
        for (var c = 0; c < questions.length; c++) {
          _loop(c);
        }
      });
    }
    // if ($(faq_section_class).length > 0) {
    //   $(faq_section_class).each(function (index, faq) {
    //     $(faq).find('.faq__wrapper-answer').hide()
    //     $(faq).find('.faq__wrapper-question').on('click', function () {
    //       $(this).next('div').siblings('div').slideUp(400)
    //       $(this).next('div').slideToggle(400)
    //       $(this).siblings('.faq__wrapper-question').find('i').removeClass('icon-minus').addClass('icon-plus')
    //       if ($(this).find('i').hasClass('icon-plus')) {
    //         $(this).find('i').removeClass('icon-plus').addClass('icon-minus')
    //       } else {
    //         $(this).find('i').removeClass('icon-minus').addClass('icon-plus')
    //       }
    //     })
    //   })
    // }
  });
  this.faq('.faq');
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/src/scripts/blocks/faq.js"));
/******/ }
]);