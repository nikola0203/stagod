"use strict";
(self["webpackChunkadvanced_wp_starter_theme"] = self["webpackChunkadvanced_wp_starter_theme"] || []).push([["/js/react/edit-account"],{

/***/ "./assets/src/scripts/react/components/formik/Checkbox.js":
/*!****************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/Checkbox.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextError */ "./assets/src/scripts/react/components/formik/TextError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "name", "errors"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



function Checkbox(props) {
  var label = props.label,
    name = props.name,
    errors = props.errors,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "form-check mb-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "d-flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread({
        id: name,
        name: name,
        className: "form-check-input me-4 cursor-pointer"
      }, rest)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        htmlFor: name,
        className: "form-check-label text-black fw-bold mb-1",
        children: label
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
      name: name,
      component: _TextError__WEBPACK_IMPORTED_MODULE_0__["default"]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FieldSelect.js":
/*!*******************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FieldSelect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./.yarn/__virtual__/react-select-virtual-419c39523d/0/cache/react-select-npm-5.9.0-537cb5774c-2206b6687d.zip/node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextError */ "./assets/src/scripts/react/components/formik/TextError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "name", "labelClass", "placeholder", "options"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




function FieldSelect(props) {
  var label = props.label,
    name = props.name,
    labelClass = props.labelClass,
    placeholder = props.placeholder,
    options = props.options,
    rest = _objectWithoutProperties(props, _excluded);
  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    helpers = _useField2[2];
  var onChange = function onChange(selectedOption) {
    helpers.setValue(selectedOption || null);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "form-control mb-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: name,
      className: "text-black fw-bold mb-1 ".concat(labelClass || ''),
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
      id: name,
      name: name,
      value: field.value // Osigurava da vrednost bude kontrolisana
      ,
      placeholder: placeholder,
      onChange: onChange,
      options: options,
      getOptionLabel: function getOptionLabel(option) {
        return option.label;
      },
      getOptionValue: function getOptionValue(option) {
        return option.value;
      },
      noOptionsMessage: function noOptionsMessage(_ref) {
        var inputValue = _ref.inputValue;
        return "Nema rezultata za \"".concat(inputValue, "\"");
      }
    }, rest)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
      name: name,
      component: _TextError__WEBPACK_IMPORTED_MODULE_0__["default"]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldSelect);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikControl.js":
/*!*********************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikControl.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./assets/src/scripts/react/components/formik/Input.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textarea */ "./assets/src/scripts/react/components/formik/Textarea.js");
/* harmony import */ var _FieldSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldSelect */ "./assets/src/scripts/react/components/formik/FieldSelect.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./assets/src/scripts/react/components/formik/Checkbox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["control"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }





function FormikControl(props) {
  // console.log(props)
  var control = props.control,
    rest = _objectWithoutProperties(props, _excluded);
  switch (control) {
    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread({}, rest));
    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, rest));
    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldSelect__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, rest));
    case 'radio':
    case 'checkbox':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, rest));
    case 'date':
    case 'file-upload':
    default:
      return null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikControl);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikDeleteAccount.js":
/*!***************************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikDeleteAccount.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./.yarn/__virtual__/bootstrap-virtual-178a5b5195/0/cache/bootstrap-npm-5.3.3-da08e2f0fe-f05183948b.zip/node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-1.7.9-3c98466f87-b7a5f660ea.zip/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./.yarn/cache/yup-npm-1.6.1-e90c4f7113-19dba13403.zip/node_modules/yup/index.esm.js");
/* harmony import */ var _FormikControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormikControl */ "./assets/src/scripts/react/components/formik/FormikControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function FormikDeleteAccount(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dataUpdated = _useState2[0],
    setDataUpdated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1];
  var initialValues = {
    password_delete_account: ''
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    password_delete_account: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(8, 'Lozinka mora biti duža od 8 karaktera').matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj').matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo').matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo').required('Lozinka je obavezna')
  });
  var onSubmit = function onSubmit(values, formikBag) {
    var setSubmitting = formikBag.setSubmitting;

    // console.log(values)
    var data = new FormData();
    data.append('action', 'delete_account');
    data.append('nonce', edit_account_data.nonce_delete_account);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('password', values.password_delete_account);
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      return response.data;
    }).then(function (data) {
      console.log(data);
      if (!data.success) {
        setDataUpdated(false);
        setErrorMessage(true);
        setSubmitting(false);
      }
      if (data.account_deleted) {
        setErrorMessage(false);
        setDataUpdated(true);
        setSubmitting(false);
        // sessionStorage.setItem("account_deleted", "true")
        // window.location.replace(edit_account_data.home_url)
      }
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "border p-4 p-xl-8 mb-6 rounded-4 bg-white d-flex align-items-center justify-content-between",
      type: "button",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-delete-account",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "h5 mb-0 fw-bold",
          children: "\u017Delim da izbri\u0161em svoj nalog"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "#EA4900",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            fillRule: "evenodd",
            d: "M12.2929,5.292875 C12.6834,4.902375 13.3166,4.902375 13.7071,5.292875 C14.0976,5.683375 14.0976,6.316555 13.7071,6.707085 L8.70711,11.707085 C8.31658,12.097605 7.68342,12.097605 7.29289,11.707085 L2.29289,6.707085 C1.90237,6.316555 1.90237,5.683375 2.29289,5.292875 C2.68342,4.902375 3.31658,4.902375 3.70711,5.292875 L8,9.585765 L12.2929,5.292875 Z"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: "modal-delete-account",
      tabIndex: "-1",
      "aria-labelledby": "modal-label-delete-account",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content p-4 p-xl-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-header border-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "h3",
            id: "modal-label-user-delete-account",
            children: "\u017Delite da obri\u0161ete nalog?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "mb-0 text-danger",
            children: "Brisanjem naloga \u0107e se obrisati svi va\u0161i podaci iz baze."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-danger",
            children: "Ova radnja se ne mo\u017Ee poni\u0161titi."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: onSubmit,
            children: function children(formik) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "password",
                  label: "Va\u017Ee\u0107a lozinka",
                  name: "password_delete_account",
                  autoComplete: "on"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary me-4",
                    children: "Obri\u0161i"
                  }), formik.isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "icon-spinner"
                  }) : '']
                }), dataUpdated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-success mt-6",
                  children: "Va\u0161 nalog je obrisan."
                }) : '', errorMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-warning mt-6",
                  children: "Va\u017Ee\u0107a lozinka nije ispravna."
                }) : '']
              });
            }
          })]
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikDeleteAccount);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikUpdateEmail.js":
/*!*************************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikUpdateEmail.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./.yarn/__virtual__/bootstrap-virtual-178a5b5195/0/cache/bootstrap-npm-5.3.3-da08e2f0fe-f05183948b.zip/node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-1.7.9-3c98466f87-b7a5f660ea.zip/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./.yarn/cache/yup-npm-1.6.1-e90c4f7113-19dba13403.zip/node_modules/yup/index.esm.js");
/* harmony import */ var _FormikControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormikControl */ "./assets/src/scripts/react/components/formik/FormikControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






// import listOfCities from '../../../cities.json'

function FormikUpdateEmail(props) {
  var user_id = props.user_id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    userEmail = _useState2[0],
    setUserEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dataUpdated = _useState4[0],
    setDataUpdated = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    errorMessage = _useState6[0],
    setErrorMessage = _useState6[1];
  var initialValues = {
    email: '',
    password: ''
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email('Neispravan email').required('Email je obavezan'),
    password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(8, 'Lozinka mora biti duža od 8 karaktera').matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj').matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo').matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo').required('Lozinka je obavezna')
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(edit_account_data.home_url + '/wp-json/wp/v2/users/' + user_id, {
      headers: {
        'X-WP-Nonce': edit_account_data.nonce
      }
    }).then(function (response) {
      return response.data;
    }).then(function (data) {
      setUserEmail(data.user_email);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  var onSubmit = function onSubmit(values, formikBag) {
    var setSubmitting = formikBag.setSubmitting,
      setFieldError = formikBag.setFieldError;

    // console.log(values)
    var data = new FormData();
    data.append('action', 'change_current_user_email');
    data.append('nonce', edit_account_data.nonce_change_current_user_email);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('password', values.password);
    data.append('email', values.email);
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      return response.data;
    }).then(function (data) {
      console.log(data);
      if (!data.success) {
        setDataUpdated(false);
        setErrorMessage(true);
        setSubmitting(false);
      }
      if (data.email_changed) {
        setErrorMessage(false);
        setDataUpdated(true);
        setSubmitting(false);
        setUserEmail(data.new_email);
      }
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "border p-4 p-xl-8 mb-6 rounded-4 bg-white d-flex align-items-center justify-content-between",
      type: "button",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-update-email",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "h5 mb-0 fw-bold",
          children: "Promena e-maila"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-gray-200 fw-bold",
          children: userEmail
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "#EA4900",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            fillRule: "evenodd",
            d: "M12.2929,5.292875 C12.6834,4.902375 13.3166,4.902375 13.7071,5.292875 C14.0976,5.683375 14.0976,6.316555 13.7071,6.707085 L8.70711,11.707085 C8.31658,12.097605 7.68342,12.097605 7.29289,11.707085 L2.29289,6.707085 C1.90237,6.316555 1.90237,5.683375 2.29289,5.292875 C2.68342,4.902375 3.31658,4.902375 3.70711,5.292875 L8,9.585765 L12.2929,5.292875 Z"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: "modal-update-email",
      tabIndex: "-1",
      "aria-labelledby": "modal-label-update-email",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content p-4 p-xl-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-header border-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "h3",
            id: "modal-label-user-update-email",
            children: "Promena e-maila"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "fw-700 mb-0",
            children: "Trenutna e-mail adresa"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-gray-200 fw-bold",
            children: userEmail
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: onSubmit,
            children: function children(formik) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "email",
                  label: "Nova email adresa",
                  name: "email"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "password",
                  label: "Va\u017Ee\u0107a lozinka",
                  name: "password",
                  autoComplete: "on"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary me-4",
                    children: "Promeni email"
                  }), formik.isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "icon-spinner"
                  }) : '']
                }), dataUpdated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-success mt-6",
                  children: "Va\u0161e izmene su sa\u010Duvane."
                }) : '', errorMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-warning mt-6",
                  children: "Email adresa je ista kao i trenutna."
                }) : '']
              });
            }
          })]
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikUpdateEmail);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikUpdatePassword.js":
/*!****************************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikUpdatePassword.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./.yarn/__virtual__/bootstrap-virtual-178a5b5195/0/cache/bootstrap-npm-5.3.3-da08e2f0fe-f05183948b.zip/node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-1.7.9-3c98466f87-b7a5f660ea.zip/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./.yarn/cache/yup-npm-1.6.1-e90c4f7113-19dba13403.zip/node_modules/yup/index.esm.js");
/* harmony import */ var _FormikControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormikControl */ "./assets/src/scripts/react/components/formik/FormikControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






// import listOfCities from '../../../cities.json'

function FormikUpdatePassword(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dataUpdated = _useState2[0],
    setDataUpdated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1];
  var initialValues = {
    current_password: '',
    update_password: '',
    confirm_update_password: ''
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    current_password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(8, 'Lozinka mora biti duža od 8 karaktera').matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj').matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo').matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo').required('Lozinka je obavezna'),
    update_password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(8, 'Lozinka mora biti duža od 8 karaktera').matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj').matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo').matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo').required('Lozinka je obavezna'),
    confirm_update_password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Potvrdite lozinku").oneOf([yup__WEBPACK_IMPORTED_MODULE_2__.ref("update_password")], "Lozinka mora da se poklapa")
  });
  var onSubmit = function onSubmit(values, formikBag) {
    var setSubmitting = formikBag.setSubmitting,
      setFieldError = formikBag.setFieldError;

    // console.log(values)
    var data = new FormData();
    data.append('action', 'change_current_user_password');
    data.append('nonce', edit_account_data.nonce_change_current_user_password);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('current_password', values.current_password);
    data.append('update_password', values.update_password);
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      return response.data;
    }).then(function (data) {
      console.log(data);
      if (!data.success) {
        setDataUpdated(false);
        setErrorMessage(true);
        setSubmitting(false);
      }
      if (data.password_changed) {
        setErrorMessage(false);
        setDataUpdated(true);
        setSubmitting(false);
      }
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "border p-4 p-xl-8 mb-6 rounded-4 bg-white d-flex align-items-center justify-content-between",
      type: "button",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-update-password",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "h5 mb-0 fw-bold",
          children: "Promena lozinke"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "#EA4900",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            fillRule: "evenodd",
            d: "M12.2929,5.292875 C12.6834,4.902375 13.3166,4.902375 13.7071,5.292875 C14.0976,5.683375 14.0976,6.316555 13.7071,6.707085 L8.70711,11.707085 C8.31658,12.097605 7.68342,12.097605 7.29289,11.707085 L2.29289,6.707085 C1.90237,6.316555 1.90237,5.683375 2.29289,5.292875 C2.68342,4.902375 3.31658,4.902375 3.70711,5.292875 L8,9.585765 L12.2929,5.292875 Z"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: "modal-update-password",
      tabIndex: "-1",
      "aria-labelledby": "modal-label-update-password",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content p-4 p-xl-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-header border-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "h3",
            id: "modal-label-user-update-password",
            children: "Promena lozinke"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: onSubmit,
            children: function children(formik) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "password",
                  label: "Va\u017Ee\u0107a lozinka",
                  name: "current_password",
                  autoComplete: "on"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "password",
                  label: "Nova lozinka",
                  name: "update_password",
                  autoComplete: "on"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  control: "input",
                  type: "password",
                  label: "Ponovite novu lozinku",
                  name: "confirm_update_password",
                  autoComplete: "on"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary me-4",
                    children: "Promeni lozinku"
                  }), formik.isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "icon-spinner"
                  }) : '']
                }), dataUpdated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-success mt-6",
                  children: "Va\u0161e izmene su sa\u010Duvane."
                }) : '', errorMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "alert alert-warning mt-6",
                  children: "Va\u017Ee\u0107a lozinka nije ispravna."
                }) : '']
              });
            }
          })]
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikUpdatePassword);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikUpdateProfileImage.js":
/*!********************************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikUpdateProfileImage.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./.yarn/__virtual__/bootstrap-virtual-178a5b5195/0/cache/bootstrap-npm-5.3.3-da08e2f0fe-f05183948b.zip/node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-1.7.9-3c98466f87-b7a5f660ea.zip/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./.yarn/cache/yup-npm-1.6.1-e90c4f7113-19dba13403.zip/node_modules/yup/index.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./.yarn/__virtual__/react-dropzone-virtual-3ab3114e7d/0/cache/react-dropzone-npm-14.3.5-1dc0066433-6124bacd21.zip/node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function FormikUpdateProfileImage(props) {
  var profile_image = props.profile_image;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dataUpdated = _useState2[0],
    setDataUpdated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    uploadedImage = _useState4[0],
    setUploadedImage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    imageDeleted = _useState8[0],
    setImageDeleted = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    deletingImage = _useState10[0],
    setDeletingImage = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(profile_image),
    _useState12 = _slicedToArray(_useState11, 2),
    profileImage = _useState12[0],
    setProfileImage = _useState12[1];
  var initialValues = {
    image: null
  };
  var SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  var MAX_FILE_SIZE = 1000000; // 1MB

  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    image: yup__WEBPACK_IMPORTED_MODULE_2__.mixed().required('Slika je obavezna').test('fileSize', 'Slika je prevelika', function (value) {
      return value && value.size <= MAX_FILE_SIZE;
    }).test('fileFormat', 'Nepodržani format (slika mora biti u jpg ili png formatu)', function (value) {
      return value && SUPPORTED_FORMATS.includes(value.type);
    })
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage.preview);
      }
    };
  }, [uploadedImage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timer = setTimeout(function () {
      setDataUpdated(false);
    }, 3000);
    return function () {
      clearTimeout(timer);
    };
  }, [dataUpdated]);
  var onSubmit = function onSubmit(values, formikBag) {
    var setSubmitting = formikBag.setSubmitting,
      setFieldError = formikBag.setFieldError;
    var data = new FormData();
    data.append('action', 'upload_profile_image');
    data.append('nonce', edit_account_data.nonce_upload_profile_image);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('image', image);
    axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      return response.data;
    }).then(function (data) {
      console.log(data);
      setDataUpdated(true);
      setSubmitting(false);
      setProfileImage(data.url);
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
  var deleteProfileImage = function deleteProfileImage() {
    setDeletingImage(true);
    var data = new FormData();
    data.append('action', 'delete_profile_image');
    data.append('nonce', edit_account_data.nonce_delete_profile_image);
    data.append('current_user_id', edit_account_data.current_user_id);
    axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      return response.data;
    }).then(function (data) {
      console.log(data);
      if (data.image_id) {
        setImageDeleted(true);
        setDeletingImage(false);
        setProfileImage(edit_account_data.theme_uri + '/assets/dist/img/placeholder-profile.svg');
      }
    })["catch"](function (error) {
      console.log(error.data);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "img-wrapper-profile",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: profileImage,
          className: "lazyload lazy-fade rounded-circle object-fit-cover"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "d-flex flex-column ms-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "btn btn-update-profile-image",
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": "#modal-update-profile-image",
          children: "Promeni sliku"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "btn bg-transparent py-4 mt-4",
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": "#modal-delete-profile-image",
          children: "Ukloni sliku"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "modal modal-lg fade",
      id: "modal-update-profile-image",
      tabIndex: "-1",
      "aria-labelledby": "modal-label-update-profile-image",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-content p-4 p-xl-14 bg-light",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "btn-close border rounded-circle p-5 absolute",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "modal-header border-0 p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "h3 mb-8",
              id: "modal-label-user-update-profile-image",
              children: "Promeni sliku:"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: onSubmit,
            children: function children(formik) {
              var removeAll = function removeAll() {
                formik.setFieldValue('image', false);
                formik.setFieldTouched('image', false);
                setUploadedImage(false);
                setImage(false);
              };
              var onDrop = function onDrop(acceptedFiles) {
                if (acceptedFiles.length > 0) {
                  // Dodaj preview za sliku
                  Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                  });
                  setImage(acceptedFiles[0]);
                  setUploadedImage(acceptedFiles[0]);
                  // Init validation
                  formik.setFieldTouched('image', true);
                  // Set field value to formik
                  formik.setFieldValue('image', acceptedFiles[0]);
                }
              };
              var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone)({
                  onDrop: onDrop,
                  accept: {
                    'image/jpg': [],
                    'image/jpeg': [],
                    'image/png': []
                  },
                  multiple: false,
                  maxFiles: 1
                }),
                getRootProps = _useDropzone.getRootProps,
                getInputProps = _useDropzone.getInputProps,
                isDragActive = _useDropzone.isDragActive;
              var onClickUpload = function onClickUpload(e) {
                var file = e.target.files[0];
                console.log(file);
                if (file) {
                  Object.assign(file, {
                    preview: URL.createObjectURL(file)
                  });
                  // Init validation
                  formik.setFieldTouched('image', true);
                  // Set field value to formik
                  formik.setFieldValue('image', file);
                  setUploadedImage(file);
                  setImage(file);
                }
              };
              var current_profile_image = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "current-profile-image relative w-100 p-6 border rounded",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: profileImage,
                  className: "object-fit-cover w-100 h-100 rounded lazyload lazy-fade"
                })
              });
              var uploaded_image = uploadedImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "relative w-100 p-6 border rounded image-uploaded",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  type: "button",
                  className: "btn-remove-image bg-transparent absolute",
                  "aria-label": "Remove Uploaded Image",
                  onClick: removeAll
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  className: "object-fit-cover w-100 h-100 rounded",
                  src: uploadedImage.preview
                  // Revoke data uri after image is loaded
                  ,
                  onLoad: function onLoad() {
                    URL.revokeObjectURL(uploadedImage.preview);
                  }
                })]
              }, uploadedImage.name) : false;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "row mb-6 mb-xl-12",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "col-lg-4",
                    children: uploaded_image == false ? current_profile_image : uploaded_image
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-8",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", _objectSpread(_objectSpread({
                      className: "modal-upload-image-box d-flex align-items-center justify-content-center p-10 bg-white border border-primary rounded"
                    }, getRootProps()), {}, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", _objectSpread(_objectSpread({
                        name: "image"
                      }, getInputProps()), {}, {
                        onChange: onClickUpload
                      })), isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "icon-upload-image bg-cover mb-6"
                        }), "Privuci sliku ovde..."]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "icon-upload-image bg-cover mb-6"
                        }), "Dodaj ili privuci sliku..."]
                      })]
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {
                      name: "image",
                      component: "div",
                      className: "fs-6 text-danger fw-bold"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-lg-end",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    type: "button",
                    className: "me-4 btn bg-transparent",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    onClick: removeAll,
                    children: "Otka\u017Ei"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: !formik.isValid,
                    children: "Sa\u010Duvaj"
                  }), formik.isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    className: "icon-spinner"
                  }) : '']
                }), dataUpdated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "alert alert-success mt-6 mb-0 lazy-fade text-center fw-600",
                  children: "Va\u0161a profilna slika je sa\u010Duvana."
                }) : '']
              });
            }
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "modal modal-lg fade",
      id: "modal-delete-profile-image",
      tabIndex: "-1",
      "aria-labelledby": "modal-label-delete-profile-image",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-content p-4 p-xl-14 bg-light",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "btn-close border rounded-circle p-5 absolute",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "col-lg-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "modal-content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "current-profile-image relative w-100 p-6 border rounded",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                    src: profileImage,
                    className: "object-fit-cover w-100 h-100 rounded lazyload lazy-fade"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "col-lg-8 pt-lg-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "h-100 d-flex flex-column justify-content-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                  className: "h3 mb-8",
                  id: "modal-label-user-delete-profile-image",
                  children: "Da li ste sigurni da \u017Eelite da obir\u0161ete profilnu sliku?"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-lg-end",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    type: "button",
                    className: "me-4 btn bg-transparent",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    children: "Otka\u017Ei"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    onClick: deleteProfileImage,
                    children: "Da, siguran sam"
                  }), deletingImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    className: "icon-spinner"
                  }) : '']
                })]
              })
            })]
          }), imageDeleted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "alert alert-success mt-6 mb-0 lazy-fade text-center fw-600",
            children: "Uspe\u0161no ste obrisali profilnu sliku"
          }) : '']
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikUpdateProfileImage);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/FormikUpdateUserData.js":
/*!****************************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/FormikUpdateUserData.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-1.7.9-3c98466f87-b7a5f660ea.zip/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./.yarn/cache/yup-npm-1.6.1-e90c4f7113-19dba13403.zip/node_modules/yup/index.esm.js");
/* harmony import */ var _FormikControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormikControl */ "./assets/src/scripts/react/components/formik/FormikControl.js");
/* harmony import */ var _FieldSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldSelect */ "./assets/src/scripts/react/components/formik/FieldSelect.js");
/* harmony import */ var _cities_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cities.json */ "./assets/src/scripts/cities.json");
/* harmony import */ var _skeleton_FormChangePersonalData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skeleton/FormChangePersonalData */ "./assets/src/scripts/react/components/skeleton/FormChangePersonalData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









function FormikUpdateUserData(props) {
  var user_id = props.user_id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    userCity = _useState2[0],
    setUserCity = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    firstName = _useState4[0],
    setFirstName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    lastName = _useState6[0],
    setLastName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    dataUpdated = _useState8[0],
    setDataUpdated = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var cityOptions = _cities_json__WEBPACK_IMPORTED_MODULE_4__.map(function (city) {
    return {
      label: city.city,
      value: city._id
    };
  });
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object({
    first_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Ime je obavezno'),
    last_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Prezime je obavezno'),
    city: yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      label: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Izaberi grad'),
      value: yup__WEBPACK_IMPORTED_MODULE_1__.number().required('Izaberi grad')
    }).nullable().required('Izaberi grad')
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("".concat(edit_account_data.home_url, "/wp-json/wp/v2/users/").concat(user_id), {
      headers: {
        'X-WP-Nonce': edit_account_data.nonce
      }
    }).then(function (response) {
      var data = response.data;
      setFirstName(data.first_name || '');
      setLastName(data.last_name || '');
      if (data && data.acf.city) {
        var _cityOptions$find;
        setUserCity({
          label: data.acf.city,
          value: (_cityOptions$find = cityOptions.find(function (o) {
            return o.label === data.acf.city;
          })) === null || _cityOptions$find === void 0 ? void 0 : _cityOptions$find.value
        });
      } else {
        setUserCity(null);
      }
    })["catch"](function (error) {
      console.error('Greška pri učitavanju podataka:', error);
    })["finally"](function () {
      setIsLoading(false); // Ukloni preloader nakon učitavanja
    });
  }, [user_id]);
  var onSubmit = function onSubmit(values, _ref) {
    var _values$city;
    var setSubmitting = _ref.setSubmitting,
      resetForm = _ref.resetForm;
    var cityName = (_values$city = values.city) === null || _values$city === void 0 ? void 0 : _values$city.label;
    var data = new FormData();
    data.append('action', 'edit_personal_data');
    data.append('nonce', edit_account_data.nonce_edit_personal_data);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('first_name', values.first_name);
    data.append('last_name', values.last_name);
    data.append('city', cityName);
    axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(edit_account_data.ajax_url, data).then(function (response) {
      if (response.data.success_status) {
        setFirstName(values.first_name);
        setLastName(values.last_name);
        setUserCity(values.city);
        setDataUpdated(true);
        resetForm({
          values: {
            first_name: values.first_name,
            last_name: values.last_name,
            city: values.city
          }
        });
      }
    })["catch"](function (error) {
      console.error(error);
      setSubmitting(false);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skeleton_FormChangePersonalData__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "border p-4 p-xl-8 mb-6 rounded-4 bg-white",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "h5",
          children: "Izmena li\u010Dnih podataka"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__.Formik, {
          initialValues: {
            first_name: firstName,
            last_name: lastName,
            city: userCity || {
              label: '',
              value: ''
            }
          },
          validationSchema: validationSchema,
          onSubmit: onSubmit,
          enableReinitialize: true,
          children: function children(formik) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_8__.Form, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "col-xl-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    control: "input",
                    type: "text",
                    label: "Ime",
                    name: "first_name"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "col-xl-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormikControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    control: "input",
                    type: "text",
                    label: "Prezime",
                    name: "last_name"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FieldSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "city",
                label: "Mesto/Grad",
                placeholder: "Izaberi grad",
                labelClass: "fs-5",
                options: cityOptions
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "submit",
                  className: "btn btn-primary me-4"
                  // disabled={!formik.isValid}
                  ,
                  disabled: !formik.dirty || !formik.isValid,
                  children: "Sa\u010Duvaj izmene"
                }), formik.isSubmitting && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "icon-spinner"
                })]
              }), dataUpdated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "alert alert-success mt-6",
                children: "Va\u0161e izmene su sa\u010Duvane."
              })]
            });
          }
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormikUpdateUserData);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/Input.js":
/*!*************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/Input.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextError */ "./assets/src/scripts/react/components/formik/TextError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "name", "labelClass", "errors"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



function Input(props) {
  var label = props.label,
    name = props.name,
    labelClass = props.labelClass,
    errors = props.errors,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "form-control mb-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: name,
      className: "text-black fw-bold mb-1 ".concat(labelClass || ''),
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread({
      id: name,
      name: name
    }, rest)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
      name: name,
      component: _TextError__WEBPACK_IMPORTED_MODULE_0__["default"]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/TextError.js":
/*!*****************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/TextError.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");

function TextError(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "text-danger fw-bold",
    children: props.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextError);

/***/ }),

/***/ "./assets/src/scripts/react/components/formik/Textarea.js":
/*!****************************************************************!*\
  !*** ./assets/src/scripts/react/components/formik/Textarea.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./.yarn/__virtual__/formik-virtual-35d3f03f1c/0/cache/formik-npm-2.4.6-6674fd4617-65d6845d91.zip/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextError */ "./assets/src/scripts/react/components/formik/TextError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "name", "labelClass", "errors"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



function Textarea(props) {
  var label = props.label,
    name = props.name,
    labelClass = props.labelClass,
    errors = props.errors,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "form-control mb-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: name,
      className: "text-black fw-bold mb-1 ".concat(labelClass || ''),
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread({
      id: name,
      name: name,
      as: "textarea",
      rows: "15",
      cols: "40"
    }, rest)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
      name: name,
      component: _TextError__WEBPACK_IMPORTED_MODULE_0__["default"]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ "./assets/src/scripts/react/components/skeleton/FormChangePersonalData.js":
/*!********************************************************************************!*\
  !*** ./assets/src/scripts/react/components/skeleton/FormChangePersonalData.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./.yarn/__virtual__/react-loading-skeleton-virtual-e500b29a1a/0/cache/react-loading-skeleton-npm-3.5.0-ec0f6b1af3-e6a1385d07.zip/node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./.yarn/__virtual__/react-loading-skeleton-virtual-e500b29a1a/0/cache/react-loading-skeleton-npm-3.5.0-ec0f6b1af3-e6a1385d07.zip/node_modules/react-loading-skeleton/dist/skeleton.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");




function FormChangePersonalData() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mb-6",
    style: {
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: '#fff'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      width: "50%",
      height: "24px",
      className: "mb-5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "row mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-xl-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "30%",
          height: "14px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "100%",
          height: "51px"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-xl-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "30%",
          height: "14px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "100%",
          height: "51px"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        width: "30%",
        height: "14px"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        width: "100%",
        height: "36px",
        className: "mb-6"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      width: "30%",
      height: "48px",
      style: {
        borderRadius: '5px'
      }
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormChangePersonalData);

/***/ }),

/***/ "./assets/src/scripts/react/edit-account.js":
/*!**************************************************!*\
  !*** ./assets/src/scripts/react/edit-account.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./.yarn/__virtual__/react-dom-virtual-d088ea75da/0/cache/react-dom-npm-19.0.0-b7981c573e-aa64a2f199.zip/node_modules/react-dom/client.js");
/* harmony import */ var _components_formik_FormikUpdateUserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formik/FormikUpdateUserData */ "./assets/src/scripts/react/components/formik/FormikUpdateUserData.js");
/* harmony import */ var _components_formik_FormikUpdateEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/formik/FormikUpdateEmail */ "./assets/src/scripts/react/components/formik/FormikUpdateEmail.js");
/* harmony import */ var _components_formik_FormikUpdatePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formik/FormikUpdatePassword */ "./assets/src/scripts/react/components/formik/FormikUpdatePassword.js");
/* harmony import */ var _components_formik_FormikDeleteAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formik/FormikDeleteAccount */ "./assets/src/scripts/react/components/formik/FormikDeleteAccount.js");
/* harmony import */ var _components_formik_FormikUpdateProfileImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/formik/FormikUpdateProfileImage */ "./assets/src/scripts/react/components/formik/FormikUpdateProfileImage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./.yarn/cache/react-npm-19.0.0-e33c9aa1c0-2490969c50.zip/node_modules/react/jsx-runtime.js");







var el_account_settings = document.getElementById('account-settings');
var user_id = el_account_settings.getAttribute('data-user_id');
var el_update_personal_data = document.getElementById('form-update-personal-data');
var user_city = el_update_personal_data.getAttribute('data-user_city');
var update_personal_data_root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el_update_personal_data);
update_personal_data_root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_formik_FormikUpdateUserData__WEBPACK_IMPORTED_MODULE_1__["default"], {
  user_id: user_id,
  user_city: user_city
}));
var el_update_email = document.getElementById('form-update-email');
var update_email_root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el_update_email);
update_email_root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_formik_FormikUpdateEmail__WEBPACK_IMPORTED_MODULE_2__["default"], {
  user_id: user_id
}));
var el_update_password = document.getElementById('form-update-password');
var update_password_root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el_update_password);
update_password_root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_formik_FormikUpdatePassword__WEBPACK_IMPORTED_MODULE_3__["default"], {
  user_id: user_id
}));
var el_delete_account = document.getElementById('form-delete-account');
var delete_account_root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el_delete_account);
delete_account_root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_formik_FormikDeleteAccount__WEBPACK_IMPORTED_MODULE_4__["default"], {
  user_id: user_id
}));
var el_update_image = document.getElementById('form-update-image');
var profile_image = el_update_image.getAttribute('data-profile_image') ? el_update_image.getAttribute('data-profile_image') : edit_account_data.theme_uri + '/assets/dist/img/placeholder-profile.svg';
var update_image_root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el_update_image);
update_image_root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_formik_FormikUpdateProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
  user_id: user_id,
  profile_image: profile_image
}));

/***/ }),

/***/ "./assets/src/scripts/cities.json":
/*!****************************************!*\
  !*** ./assets/src/scripts/cities.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"city":"Beograd","_id":11000},{"city":"Beograd Voždovac","_id":11010},{"city":"Beograd Čukarica","_id":11030},{"city":"Beograd Zvezdara","_id":11050},{"city":"Beograd Palilula","_id":11060},{"city":"Novi Beograd","_id":11070},{"city":"Beograd Zemun","_id":11080},{"city":"Beograd Rakovica","_id":11090},{"city":"Kaluđerica","_id":11130},{"city":"Rušanj","_id":11194},{"city":"Borča","_id":11211},{"city":"Ovča","_id":11212},{"city":"Padinska Skela","_id":11213},{"city":"Beli Potok","_id":11223},{"city":"Vrčin","_id":11224},{"city":"Zuce","_id":11225},{"city":"Pinosava","_id":11226},{"city":"Ripanj","_id":11232},{"city":"Ralja","_id":11233},{"city":"Mali Požarevac","_id":11235},{"city":"Ostružnica","_id":11251},{"city":"Sremčica","_id":11253},{"city":"Umka","_id":11260},{"city":"Mala Moštanica","_id":11261},{"city":"Velika Mostanica","_id":11262},{"city":"Surčin","_id":11271},{"city":"Dobanovci","_id":11272},{"city":"Boljevci","_id":11275},{"city":"Jakovo","_id":11276},{"city":"Ugrinovci","_id":11277},{"city":"Bečmen","_id":11279},{"city":"Progar","_id":11280},{"city":"Petrovcic","_id":11282},{"city":"Smederevo","_id":11300},{"city":"Grocka","_id":11306},{"city":"Boleč","_id":11307},{"city":"Begaljica","_id":11308},{"city":"Leštane","_id":11309},{"city":"Lipe","_id":11310},{"city":"Radinac","_id":11311},{"city":"Mihajlovac","_id":11312},{"city":"Mala Krsna","_id":11313},{"city":"Osipaonica","_id":11314},{"city":"Saraorci","_id":11315},{"city":"Golobok","_id":11316},{"city":"Lozovik","_id":11317},{"city":"Miloševac","_id":11318},{"city":"Krnjevo","_id":11319},{"city":"Velika Plana","_id":11320},{"city":"Lugavcina","_id":11321},{"city":"Skobalj","_id":11322},{"city":"Veliko Orašje","_id":11323},{"city":"Staro Selo","_id":11324},{"city":"Markovac","_id":11325},{"city":"Donja Livadica","_id":11326},{"city":"Rakinac","_id":11327},{"city":"Vodanj","_id":11328},{"city":"Vranovo","_id":11329},{"city":"Vinča","_id":11351},{"city":"Mladenovac","_id":11400},{"city":"Vlaška","_id":11406},{"city":"Selevac","_id":11407},{"city":"Velika Krsna","_id":11408},{"city":"Kovačevac","_id":11409},{"city":"Ratari","_id":11411},{"city":"Jagnjilo","_id":11412},{"city":"Pružatovac","_id":11413},{"city":"Velika Ivanča","_id":11414},{"city":"Koraćica","_id":11415},{"city":"Smederevska Palanka","_id":11420},{"city":"Azanja","_id":11423},{"city":"Banicina","_id":11424},{"city":"Kusadak","_id":11425},{"city":"Meljak","_id":11426},{"city":"Vranić","_id":11427},{"city":"Umčari","_id":11430},{"city":"Kolari","_id":11431},{"city":"Drugovac","_id":11432},{"city":"Šepšin","_id":11433},{"city":"Sopot","_id":11450},{"city":"Rogača","_id":11453},{"city":"Sibnica","_id":11454},{"city":"Barajevo","_id":11460},{"city":"Beljina","_id":11461},{"city":"Veliki Borak","_id":11462},{"city":"Obrenovac","_id":11500},{"city":"Barič","_id":11504},{"city":"Zabrežje","_id":11505},{"city":"Draževac","_id":11506},{"city":"Stubline","_id":11507},{"city":"Grabovac","_id":11508},{"city":"Skela","_id":11509},{"city":"Lazarevac","_id":11550},{"city":"Vreoci","_id":11560},{"city":"Dudovica","_id":11561},{"city":"Junkovac","_id":11562},{"city":"Veliki Crljeni","_id":11563},{"city":"Stepojevac","_id":11564},{"city":"Barosevac","_id":11565},{"city":"Rudovci","_id":11566},{"city":"Mirosaljci","_id":11567},{"city":"Požarevac","_id":12000},{"city":"Brezane","_id":12205},{"city":"Bradarac","_id":12206},{"city":"Dubravica","_id":12207},{"city":"Kostolac","_id":12208},{"city":"Kličevac","_id":12209},{"city":"Veliko Gradište","_id":12220},{"city":"Majilovac","_id":12221},{"city":"Braničevo","_id":12222},{"city":"Golubac","_id":12223},{"city":"Dobra","_id":12224},{"city":"Bratinac","_id":12225},{"city":"Topolovnik","_id":12226},{"city":"Vinci","_id":12229},{"city":"Brnjica","_id":12230},{"city":"Kučevo","_id":12240},{"city":"Neresnica","_id":12242},{"city":"Srednjevo","_id":12253},{"city":"Rabrovo","_id":12254},{"city":"Duboka","_id":12255},{"city":"Voluja","_id":12256},{"city":"Klenje","_id":12258},{"city":"Petrovac Na Mlavi","_id":12300},{"city":"Ranovac","_id":12304},{"city":"Melnica","_id":12305},{"city":"Veliko Laole","_id":12306},{"city":"Burovac","_id":12307},{"city":"Šetonje","_id":12309},{"city":"Malo Crniće","_id":12311},{"city":"Smoljinac","_id":12312},{"city":"Bozevac","_id":12313},{"city":"Veliko Selo","_id":12314},{"city":"Rašanac","_id":12315},{"city":"Krepoljin","_id":12316},{"city":"Osanica","_id":12317},{"city":"Vukovac","_id":12318},{"city":"Žagubica","_id":12320},{"city":"Laznica","_id":12321},{"city":"Suvi Do","_id":12322},{"city":"Aleksandrovac","_id":12370},{"city":"Vlaški Do","_id":12371},{"city":"Poljana","_id":12372},{"city":"Simićevo","_id":12373},{"city":"Žabari","_id":12374},{"city":"Porodin","_id":12375},{"city":"Valjevo","_id":14000},{"city":"Brankovina","_id":14201},{"city":"Rajković","_id":14202},{"city":"Dračić","_id":14203},{"city":"Divčibare","_id":14204},{"city":"Lelić","_id":14205},{"city":"Poćuta","_id":14206},{"city":"Pećka","_id":14207},{"city":"Ub","_id":14210},{"city":"Radljevo","_id":14211},{"city":"Brgule","_id":14212},{"city":"Pambukovica","_id":14213},{"city":"Banjani","_id":14214},{"city":"Popučke","_id":14221},{"city":"Divci","_id":14222},{"city":"Slovac","_id":14223},{"city":"Lajkovac","_id":14224},{"city":"Bogovadja","_id":14225},{"city":"Jabučje","_id":14226},{"city":"Ljig","_id":14240},{"city":"Mionica","_id":14242},{"city":"Gornja Toplica","_id":14243},{"city":"Brezde","_id":14244},{"city":"Slavkovica","_id":14245},{"city":"Belanovica","_id":14246},{"city":"Pricevic","_id":14251},{"city":"Kamenica","_id":14252},{"city":"Osečina","_id":14253},{"city":"Komirić","_id":14254},{"city":"Stave","_id":14255},{"city":"Šabac","_id":15000},{"city":"Mačvanski Pričinović","_id":15211},{"city":"Drenovac","_id":15212},{"city":"Orid","_id":15213},{"city":"Debeljača","_id":15214},{"city":"Provo","_id":15215},{"city":"Koceljeva","_id":15220},{"city":"Svileuva","_id":15221},{"city":"Kamenica","_id":15222},{"city":"Cerovac","_id":15224},{"city":"Vladimirci","_id":15225},{"city":"Draginje","_id":15226},{"city":"Donje Crniljevo","_id":15227},{"city":"Varna","_id":15232},{"city":"Metlić","_id":15233},{"city":"Tekeriš","_id":15234},{"city":"Dobrić","_id":15235},{"city":"Loznica","_id":15300},{"city":"Korenita","_id":15302},{"city":"Tršić","_id":15303},{"city":"Petlovača","_id":15304},{"city":"Lipolist","_id":15305},{"city":"Prnjavor Mačvanski","_id":15306},{"city":"Lešnica","_id":15307},{"city":"Jadranska Lešnica","_id":15308},{"city":"Brezjak","_id":15309},{"city":"Ribari","_id":15310},{"city":"Draginac","_id":15311},{"city":"Zavlaka","_id":15312},{"city":"Bela Crkva","_id":15313},{"city":"Krupanj","_id":15314},{"city":"Zajaca","_id":15315},{"city":"Banja Koviljača","_id":15316},{"city":"Donja Borina","_id":15317},{"city":"Mali Zvornik","_id":15318},{"city":"Uzovnica","_id":15319},{"city":"Ljubovija","_id":15320},{"city":"Radalj","_id":15321},{"city":"Velika Reka","_id":15322},{"city":"Donja Orovica","_id":15323},{"city":"Drlace","_id":15324},{"city":"Bogatić","_id":15350},{"city":"Zminjak","_id":15352},{"city":"Majur","_id":15353},{"city":"Štitar","_id":15354},{"city":"Crna Bara","_id":15355},{"city":"Glušci","_id":15356},{"city":"Klenje","_id":15357},{"city":"Badovinci","_id":15358},{"city":"Dublje","_id":15359},{"city":"Banovo Polje","_id":15362},{"city":"Leskovac","_id":16000},{"city":"Manojlovce","_id":16201},{"city":"Vučje","_id":16203},{"city":"Miroševce","_id":16204},{"city":"Bojnik","_id":16205},{"city":"Kosančić","_id":16206},{"city":"Vlasotince","_id":16210},{"city":"Svođe","_id":16212},{"city":"Sastav Reka","_id":16213},{"city":"Crna Trava","_id":16215},{"city":"Grdelica","_id":16220},{"city":"Velika Grabovnica","_id":16221},{"city":"Predejane","_id":16222},{"city":"Ruplje","_id":16223},{"city":"Lebane","_id":16230},{"city":"Turekovac","_id":16231},{"city":"Bosnjace","_id":16232},{"city":"Orane","_id":16233},{"city":"Medvedja","_id":16240},{"city":"Gornji Brestovac","_id":16244},{"city":"Sijarinska Banja","_id":16246},{"city":"Tulare","_id":16247},{"city":"Lece","_id":16248},{"city":"Pecanjevce","_id":16251},{"city":"Razgojna","_id":16252},{"city":"Brestovac","_id":16253},{"city":"Vranje","_id":17500},{"city":"Vlase","_id":17507},{"city":"Sveti Ilija","_id":17508},{"city":"Vladičin Han","_id":17510},{"city":"Priboj Vranjski","_id":17511},{"city":"Stubal","_id":17512},{"city":"Lepenica","_id":17513},{"city":"Džep","_id":17514},{"city":"Bujanovac","_id":17520},{"city":"Ristovac","_id":17521},{"city":"Biljaca","_id":17522},{"city":"Preševo","_id":17523},{"city":"Klenike","_id":17524},{"city":"Trgovište","_id":17525},{"city":"Donji Stajevac","_id":17526},{"city":"Muhovac","_id":17529},{"city":"Surdulica","_id":17530},{"city":"Jelašnica","_id":17531},{"city":"Vlasina Okruglica","_id":17532},{"city":"Vlasina Rid","_id":17533},{"city":"Vlasina Stojkovićevo","_id":17534},{"city":"Klisura","_id":17535},{"city":"Bozica","_id":17537},{"city":"Gornja Lisina","_id":17538},{"city":"Bosilegrad","_id":17540},{"city":"Vranjska Banja","_id":17542},{"city":"Kriva Feja","_id":17543},{"city":"Donja Ljubata","_id":17544},{"city":"Korbevac","_id":17545},{"city":"Bistar","_id":17546},{"city":"Donje Tlamino","_id":17547},{"city":"Reljan","_id":17556},{"city":"Oraovica","_id":17557},{"city":"Bujanovac","_id":17567},{"city":"Niš","_id":18000},{"city":"Lalinac","_id":18201},{"city":"Gornja Toponica","_id":18202},{"city":"Gornji Matejevac","_id":18204},{"city":"Niška Banja","_id":18205},{"city":"Jelašnica","_id":18206},{"city":"Malča","_id":18207},{"city":"Guševac","_id":18208},{"city":"Medoševac","_id":18209},{"city":"Žitkovac","_id":18210},{"city":"Trupale","_id":18211},{"city":"Tešica","_id":18212},{"city":"Gredetin","_id":18213},{"city":"Kulina","_id":18214},{"city":"Veliko Bonjince","_id":18215},{"city":"Korman","_id":18216},{"city":"Ljuberadja","_id":18217},{"city":"Grejac","_id":18219},{"city":"Aleksinac","_id":18220},{"city":"Draževac(kod Aleksinca)","_id":18223},{"city":"Rutevac","_id":18224},{"city":"Katun","_id":18225},{"city":"Aleksinacki Rudnik","_id":18226},{"city":"Subotinac","_id":18227},{"city":"Luzane","_id":18228},{"city":"Mozgovo","_id":18229},{"city":"Soko Banja","_id":18230},{"city":"Čitluk","_id":18232},{"city":"Jošanica","_id":18234},{"city":"Šarbanovac","_id":18235},{"city":"Dugo Polje","_id":18237},{"city":"Gadžin Han","_id":18240},{"city":"Gornji Barbes","_id":18241},{"city":"Donji Dušnik","_id":18242},{"city":"Zaplanjska Toponica","_id":18244},{"city":"Lički Hanovi","_id":18245},{"city":"Ravna Dubrava","_id":18246},{"city":"Novo Selo","_id":18250},{"city":"Mramor","_id":18251},{"city":"Merošina","_id":18252},{"city":"Jugbogdanovac","_id":18253},{"city":"Donje Medurovo","_id":18254},{"city":"Pukovac","_id":18255},{"city":"Balajinac","_id":18257},{"city":"Jovanovac","_id":18258},{"city":"Popovac","_id":18260},{"city":"Pirot","_id":18300},{"city":"Crnokliste","_id":18304},{"city":"Visoka Rzana","_id":18306},{"city":"Krupač","_id":18307},{"city":"Bela Palanka","_id":18310},{"city":"Sićevo","_id":18311},{"city":"Ostrovica","_id":18312},{"city":"Crvena Reka","_id":18313},{"city":"Dolac","_id":18314},{"city":"Babin Kal","_id":18315},{"city":"Dimitrovgrad","_id":18320},{"city":"Gradina","_id":18321},{"city":"Sukovo","_id":18322},{"city":"Smilovci","_id":18323},{"city":"Kamenica","_id":18324},{"city":"Poganovo","_id":18326},{"city":"Babusnica","_id":18330},{"city":"Strelac","_id":18332},{"city":"Zvonce","_id":18333},{"city":"Temska","_id":18355},{"city":"Svrljig","_id":18360},{"city":"Palilula","_id":18363},{"city":"Prekonoga","_id":18365},{"city":"Niševac","_id":18366},{"city":"Burdimo","_id":18368},{"city":"Prokuplje","_id":18400},{"city":"Velika Plana","_id":18403},{"city":"Donja Rečica","_id":18404},{"city":"Džigolj","_id":18405},{"city":"Dubovo","_id":18406},{"city":"Žitni Potok","_id":18407},{"city":"Dobri Do","_id":18408},{"city":"Kruševica","_id":18409},{"city":"Doljevac","_id":18410},{"city":"Belotinac","_id":18411},{"city":"Žitoradja","_id":18412},{"city":"Pejkovac","_id":18413},{"city":"Donje Crnatovo","_id":18414},{"city":"Malošište","_id":18415},{"city":"Cecina","_id":18417},{"city":"Blace","_id":18420},{"city":"Donja Trnava","_id":18421},{"city":"Mala Plana","_id":18423},{"city":"Beloljin","_id":18424},{"city":"Gornja Draguša","_id":18425},{"city":"Barbatovac","_id":18426},{"city":"Kuršumlija","_id":18430},{"city":"Barlovo","_id":18432},{"city":"Prolom","_id":18433},{"city":"Kuršumlijska Banja","_id":18435},{"city":"Merćez","_id":18436},{"city":"Lukovo","_id":18437},{"city":"Zuc","_id":18438},{"city":"Rača","_id":18440},{"city":"Merdare","_id":18445},{"city":"Zaječar","_id":19000},{"city":"Metovnica","_id":19204},{"city":"Gradskovo","_id":19205},{"city":"Veliki Izvor","_id":19206},{"city":"Planinica","_id":19207},{"city":"Lubnica","_id":19208},{"city":"Mali Jasenovac","_id":19209},{"city":"Bor","_id":19210},{"city":"Donja Bela Reka","_id":19213},{"city":"Rgotina","_id":19214},{"city":"Zlot","_id":19215},{"city":"Brestovačka Banja","_id":19216},{"city":"Krivelj","_id":19219},{"city":"Donji Milanovac","_id":19220},{"city":"Klokočevac","_id":19222},{"city":"Koprivnica","_id":19223},{"city":"Salaš","_id":19224},{"city":"Sikole","_id":19225},{"city":"Zvezdan","_id":19227},{"city":"Gamzigradska Banja","_id":19228},{"city":"Borski Brestovac","_id":19229},{"city":"Borsko Bucje","_id":19231},{"city":"Luka","_id":19234},{"city":"Velika Jasikova","_id":19235},{"city":"Halovo","_id":19236},{"city":"Majdanpek","_id":19250},{"city":"Rudna Glava","_id":19257},{"city":"Negotin","_id":19300},{"city":"Štubik","_id":19303},{"city":"Jabukovac","_id":19304},{"city":"Urovica","_id":19305},{"city":"Trnjane","_id":19306},{"city":"Nikolićevo","_id":19311},{"city":"Vražogrnac","_id":19312},{"city":"Brusnik","_id":19313},{"city":"Rajac","_id":19314},{"city":"Bracevac","_id":19315},{"city":"Kobišnica","_id":19316},{"city":"Mokranja","_id":19317},{"city":"Rogljevo","_id":19318},{"city":"Kladovo","_id":19320},{"city":"Podvrška","_id":19321},{"city":"Mihajlovac","_id":19322},{"city":"Brza Palanka","_id":19323},{"city":"Slatina","_id":19324},{"city":"Tekija","_id":19325},{"city":"Sip","_id":19326},{"city":"Velesnica","_id":19328},{"city":"Korbovo","_id":19329},{"city":"Prahovo","_id":19330},{"city":"Radujevac","_id":19334},{"city":"Dušanovac","_id":19335},{"city":"Minićevo","_id":19340},{"city":"Grljan","_id":19341},{"city":"Grlište","_id":19342},{"city":"Lenovac","_id":19343},{"city":"Vratarnica","_id":19344},{"city":"Donje Zuniće","_id":19345},{"city":"Mali Izvor","_id":19347},{"city":"Knjaževac","_id":19350},{"city":"Donja Kamenica","_id":19352},{"city":"Kalna","_id":19353},{"city":"Podvis","_id":19362},{"city":"Beli Potok","_id":19366},{"city":"Vasilj","_id":19367},{"city":"Bucje","_id":19369},{"city":"Boljevac","_id":19370},{"city":"Lukovo","_id":19371},{"city":"Bogovina","_id":19372},{"city":"Šarbanovac","_id":19373},{"city":"Krivi Vir","_id":19375},{"city":"Sumrakovac","_id":19376},{"city":"Savinac","_id":19377},{"city":"Osnić","_id":19378},{"city":"Šarbanovac Timok","_id":19379},{"city":"Novi Sad","_id":21000},{"city":"Petrovaradin","_id":21131},{"city":"Rumenka","_id":21201},{"city":"Veternik","_id":21203},{"city":"Sremski Karlovci","_id":21205},{"city":"Stari Ledinci","_id":21206},{"city":"Ledinci","_id":21207},{"city":"Sremska Kamenica","_id":21208},{"city":"Bukovac","_id":21209},{"city":"Kisač","_id":21211},{"city":"Stepanovićevo","_id":21212},{"city":"Zmajevo","_id":21213},{"city":"Sirig","_id":21214},{"city":"Turija","_id":21215},{"city":"Nadalj","_id":21216},{"city":"Bačko Gradište","_id":21217},{"city":"Bečej","_id":21220},{"city":"Radičević","_id":21225},{"city":"Bačko Petrovo Selo","_id":21226},{"city":"Mileševo","_id":21227},{"city":"Žabalj","_id":21230},{"city":"Čenej","_id":21233},{"city":"Bački Jarak","_id":21234},{"city":"Temerin","_id":21235},{"city":"Gospođinci","_id":21237},{"city":"Čurug","_id":21238},{"city":"Đurdjevo","_id":21239},{"city":"Titel","_id":21240},{"city":"Kać","_id":21241},{"city":"Budisava","_id":21242},{"city":"Kovilj","_id":21243},{"city":"Šajkaš","_id":21244},{"city":"Mošorin","_id":21245},{"city":"Vilovo","_id":21246},{"city":"Gardinovci","_id":21247},{"city":"Lok","_id":21248},{"city":"Rakovac","_id":21299},{"city":"Beočin","_id":21300},{"city":"Čerević","_id":21311},{"city":"Banoštor","_id":21312},{"city":"Susek","_id":21313},{"city":"Neštin","_id":21314},{"city":"Lug","_id":21315},{"city":"Bačka Palanka","_id":21400},{"city":"Futog","_id":21410},{"city":"Begeč","_id":21411},{"city":"Gložan","_id":21412},{"city":"Čelarevo","_id":21413},{"city":"Bač","_id":21420},{"city":"Karađorđevo","_id":21421},{"city":"Mladenovo","_id":21422},{"city":"Obrovac","_id":21423},{"city":"Tovariševo","_id":21424},{"city":"Selenča","_id":21425},{"city":"Vajska","_id":21426},{"city":"Bodjani","_id":21427},{"city":"Plavna","_id":21428},{"city":"Bačko Novo Selo","_id":21429},{"city":"Nova Gajdobra","_id":21431},{"city":"Gajdobra","_id":21432},{"city":"Silbaš","_id":21433},{"city":"Parage","_id":21434},{"city":"Vrbas","_id":21460},{"city":"Bačko Dobro Polje","_id":21465},{"city":"Kucura","_id":21466},{"city":"Savino Selo","_id":21467},{"city":"Despotovo","_id":21468},{"city":"Pivnice","_id":21469},{"city":"Bački Petrovac","_id":21470},{"city":"Ravno Selo","_id":21471},{"city":"Kulpin","_id":21472},{"city":"Maglić","_id":21473},{"city":"Srbobran","_id":21480},{"city":"Sremska Mitrovica","_id":22000},{"city":"Zasavica","_id":22201},{"city":"Mačvanska Mitrovica","_id":22202},{"city":"Noćaj","_id":22203},{"city":"Salaš Noćajski","_id":22204},{"city":"Ravnje","_id":22205},{"city":"Radenković","_id":22206},{"city":"Ležimir","_id":22207},{"city":"Mandjelos","_id":22208},{"city":"Veliki Radinci","_id":22211},{"city":"Bešenovo","_id":22212},{"city":"Grgurevci","_id":22213},{"city":"Bosut","_id":22217},{"city":"Laćarak","_id":22221},{"city":"Martinci","_id":22222},{"city":"Kuzmin","_id":22223},{"city":"Kukujevci","_id":22224},{"city":"Bacinci","_id":22225},{"city":"Erdevik","_id":22230},{"city":"Čalma","_id":22231},{"city":"Divoš","_id":22232},{"city":"Šid","_id":22240},{"city":"Vasica","_id":22241},{"city":"Berkasovo","_id":22242},{"city":"Sot","_id":22243},{"city":"Adasevci","_id":22244},{"city":"Morović","_id":22245},{"city":"Višnjićevo","_id":22246},{"city":"Sremska Rača","_id":22247},{"city":"Jamena","_id":22248},{"city":"Ilinci","_id":22250},{"city":"Batrovci","_id":22251},{"city":"Bingula","_id":22253},{"city":"Bikić Do","_id":22254},{"city":"Ljuba","_id":22255},{"city":"Molovin","_id":22256},{"city":"Privina Glava","_id":22257},{"city":"Gibarac","_id":22258},{"city":"Stara Pazova","_id":22300},{"city":"Banovci Dunav","_id":22303},{"city":"Novi Banovci","_id":22304},{"city":"Stari Banovci","_id":22305},{"city":"Belegiš","_id":22306},{"city":"Surduk","_id":22307},{"city":"Golubinci","_id":22308},{"city":"Šimanovci","_id":22310},{"city":"Vojka","_id":22313},{"city":"Krnješevci","_id":22314},{"city":"Inđija","_id":22320},{"city":"Ljukovo","_id":22321},{"city":"Novi Karlovci","_id":22322},{"city":"Novi Slankamen","_id":22323},{"city":"Beška","_id":22324},{"city":"Krčedin","_id":22325},{"city":"Čortanovci","_id":22326},{"city":"Maradik","_id":22327},{"city":"Krušedol","_id":22328},{"city":"Stari Slankamen","_id":22329},{"city":"Nova Pazova","_id":22330},{"city":"Ruma","_id":22400},{"city":"Putinci","_id":22404},{"city":"Stejanovci","_id":22405},{"city":"Irig","_id":22406},{"city":"Vrdnik","_id":22408},{"city":"Jazak","_id":22409},{"city":"Pećinci","_id":22410},{"city":"Kraljevci","_id":22411},{"city":"Dobrinci","_id":22412},{"city":"Sremski Mihaljevci","_id":22413},{"city":"Subotište","_id":22414},{"city":"Ogar","_id":22416},{"city":"Obrez","_id":22417},{"city":"Asanja","_id":22418},{"city":"Kupinovo","_id":22419},{"city":"Platičevo","_id":22420},{"city":"Budjanovci","_id":22421},{"city":"Nikinci","_id":22422},{"city":"Grabovci","_id":22423},{"city":"Klenak","_id":22424},{"city":"Šašinci","_id":22425},{"city":"Hrtkovci","_id":22427},{"city":"Popinci","_id":22428},{"city":"Voganj","_id":22429},{"city":"Vitojevci","_id":22431},{"city":"Sibač","_id":22440},{"city":"Dec","_id":22441},{"city":"Prhovo","_id":22442},{"city":"Karlovčić","_id":22443},{"city":"Zrenjanin","_id":23000},{"city":"Mihajlovo","_id":23202},{"city":"Ečka","_id":23203},{"city":"Stajićevo","_id":23204},{"city":"Belo Blato","_id":23205},{"city":"Muzlja","_id":23206},{"city":"Aradac","_id":23207},{"city":"Elemir","_id":23208},{"city":"Taraš","_id":23209},{"city":"Žitište","_id":23210},{"city":"Klek","_id":23211},{"city":"Ravni Topolovac","_id":23212},{"city":"Banatski Dvor","_id":23213},{"city":"Torda","_id":23214},{"city":"Cestereg","_id":23215},{"city":"Banatsko Karađorđevo","_id":23216},{"city":"Aleksandrovo","_id":23217},{"city":"Nova Crnja","_id":23218},{"city":"Vojvoda Stepa","_id":23219},{"city":"Srpska Crnja","_id":23220},{"city":"Radojevo","_id":23221},{"city":"Toba","_id":23222},{"city":"Lukino Selo","_id":23224},{"city":"Jaša Tomić","_id":23230},{"city":"Krajišnik","_id":23231},{"city":"Begejci","_id":23232},{"city":"Srpski Itebej","_id":23233},{"city":"Medja","_id":23234},{"city":"Hetin","_id":23235},{"city":"Novi Itebej","_id":23236},{"city":"Banatsko Višnjićevo","_id":23237},{"city":"Sečanj","_id":23240},{"city":"Lazarevo","_id":23241},{"city":"Banatski Despotovac","_id":23242},{"city":"Botos","_id":23243},{"city":"Sutjeska","_id":23244},{"city":"Neuzina","_id":23245},{"city":"Jarkovac","_id":23250},{"city":"Banatska Dubica","_id":23251},{"city":"Boka","_id":23252},{"city":"Konak","_id":23253},{"city":"Surjan","_id":23254},{"city":"Zlatica","_id":23255},{"city":"Perlez","_id":23260},{"city":"Lukićevo","_id":23261},{"city":"Tomaševac","_id":23262},{"city":"Orlovat","_id":23263},{"city":"Farkaždin","_id":23264},{"city":"Knićanin","_id":23265},{"city":"Ćenta","_id":23266},{"city":"Melenci","_id":23270},{"city":"Kumane","_id":23271},{"city":"Novi Bečej","_id":23272},{"city":"Novo Miloševo","_id":23273},{"city":"Bocar","_id":23274},{"city":"Kikinda","_id":23300},{"city":"Mokrin","_id":23305},{"city":"Nakovo","_id":23311},{"city":"Banatsko Veliko Selo","_id":23312},{"city":"Novi Kozarci","_id":23313},{"city":"Rusko Selo","_id":23314},{"city":"Banatska Topola","_id":23315},{"city":"Basaid","_id":23316},{"city":"Čoka","_id":23320},{"city":"Iđos","_id":23323},{"city":"Sajan","_id":23324},{"city":"Padej","_id":23325},{"city":"Ostojićevo","_id":23326},{"city":"Jazovo","_id":23327},{"city":"Crna Bara","_id":23328},{"city":"Vrbica","_id":23329},{"city":"Novi Kneževac","_id":23330},{"city":"Sanad","_id":23331},{"city":"Banatsko Arandjelovo","_id":23332},{"city":"Majdan","_id":23333},{"city":"Srpski Krstur","_id":23334},{"city":"Đala","_id":23335},{"city":"Subotica","_id":24000},{"city":"Kelebija","_id":24104},{"city":"Kelebija-granični prelaz","_id":24205},{"city":"Bikovo","_id":24206},{"city":"Orom","_id":24207},{"city":"Bajmok","_id":24210},{"city":"Mišićevo","_id":24211},{"city":"Đurđin","_id":24213},{"city":"Tavankut","_id":24214},{"city":"Ljutovo","_id":24215},{"city":"Mala Bosna","_id":24217},{"city":"Čantavir","_id":24220},{"city":"Višnjevac","_id":24222},{"city":"Novi Zednik","_id":24223},{"city":"Stari Žednik","_id":24224},{"city":"Bačka Topola","_id":24300},{"city":"Karadjordjevo","_id":24308},{"city":"Mali Beograd","_id":24309},{"city":"Njegoševo","_id":24311},{"city":"Gunaroš","_id":24312},{"city":"Pobeda","_id":24313},{"city":"Mali Idjoš","_id":24321},{"city":"Lovćenac","_id":24322},{"city":"Feketić","_id":24323},{"city":"Panonija","_id":24330},{"city":"Bajša","_id":24331},{"city":"Stara Moravica","_id":24340},{"city":"Krivaja","_id":24341},{"city":"Pačir","_id":24342},{"city":"Bački Sokolac","_id":24343},{"city":"Oresković","_id":24344},{"city":"Novo Orahovo","_id":24351},{"city":"Tornjoš","_id":24352},{"city":"Senta","_id":24400},{"city":"Gornji Breg","_id":24406},{"city":"Kevi","_id":24407},{"city":"Bogaras","_id":24408},{"city":"Horgoš","_id":24410},{"city":"Horgoš Granični Prelaz","_id":24411},{"city":"Palić","_id":24413},{"city":"Hajdukovo","_id":24414},{"city":"Bački Vinogradi","_id":24415},{"city":"Male Pijace","_id":24416},{"city":"Martonoš","_id":24417},{"city":"Kanjiža","_id":24420},{"city":"Adorjan","_id":24425},{"city":"Tresnjevac","_id":24426},{"city":"Totovo Selo","_id":24427},{"city":"Ada","_id":24430},{"city":"Mol","_id":24435},{"city":"Utrine","_id":24437},{"city":"Sombor","_id":25000},{"city":"Conoplja","_id":25210},{"city":"Svetozar Miletić","_id":25211},{"city":"Aleksa Santic","_id":25212},{"city":"Crvenka","_id":25220},{"city":"Kljajićevo","_id":25221},{"city":"Telečka","_id":25222},{"city":"Sivac","_id":25223},{"city":"Nova Crvenka","_id":25224},{"city":"Krusčić","_id":25225},{"city":"Kula","_id":25230},{"city":"Lipar","_id":25232},{"city":"Ruski Krstur","_id":25233},{"city":"Lalić","_id":25234},{"city":"Stapar","_id":25240},{"city":"Bački Brestovac","_id":25242},{"city":"Doroslovo","_id":25243},{"city":"Srpski Miletić","_id":25244},{"city":"Bogojevo","_id":25245},{"city":"Odzaci","_id":25250},{"city":"Bački Gracac","_id":25252},{"city":"Ratkovo","_id":25253},{"city":"Deronje","_id":25254},{"city":"Karavukovo","_id":25255},{"city":"Apatin","_id":25260},{"city":"Kupušina","_id":25262},{"city":"Prigrevica","_id":25263},{"city":"Sonta","_id":25264},{"city":"Svilojevo","_id":25265},{"city":"Bezdan","_id":25270},{"city":"Bački Monostor","_id":25272},{"city":"Kolut","_id":25274},{"city":"Bački Breg","_id":25275},{"city":"Ridjica","_id":25280},{"city":"Gakovo","_id":25282},{"city":"Rastina","_id":25283},{"city":"Stanišić","_id":25284},{"city":"Pančevo","_id":26000},{"city":"Jabuka","_id":26201},{"city":"Glogonj","_id":26202},{"city":"Sefkerin","_id":26203},{"city":"Opovo","_id":26204},{"city":"Baranda","_id":26205},{"city":"Sakule","_id":26206},{"city":"Idvor","_id":26207},{"city":"Kovačica","_id":26210},{"city":"Kačarevo","_id":26212},{"city":"Crepaja","_id":26213},{"city":"Padina","_id":26215},{"city":"Uzdin","_id":26216},{"city":"Kovin","_id":26220},{"city":"Bavanište","_id":26222},{"city":"Gaj","_id":26223},{"city":"Dubovac","_id":26224},{"city":"Deliblato","_id":26225},{"city":"Mramorak","_id":26226},{"city":"Dolovo","_id":26227},{"city":"Skorenovac","_id":26228},{"city":"Pločica","_id":26229},{"city":"Omoljica","_id":26230},{"city":"Starčevo","_id":26232},{"city":"Ivanovo","_id":26233},{"city":"Banatski Brestovac","_id":26234},{"city":"Vršac","_id":26300},{"city":"Alibunar","_id":26310},{"city":"Banatsko Novo Selo","_id":26314},{"city":"Vladimirovac","_id":26315},{"city":"Devojački Bunar","_id":26316},{"city":"Banatski Karlovac","_id":26320},{"city":"Nikolinci","_id":26322},{"city":"Crvena Crkva","_id":26323},{"city":"Banatska Palanka","_id":26324},{"city":"Banatska Subotica","_id":26327},{"city":"Dupljaja","_id":26328},{"city":"Kajtasovo","_id":26329},{"city":"Uljma","_id":26330},{"city":"Ritisevo","_id":26331},{"city":"Vlajkovac","_id":26332},{"city":"Pavliš","_id":26333},{"city":"Veliko Središte","_id":26334},{"city":"Gudurica","_id":26335},{"city":"Kuštilj","_id":26336},{"city":"Vatin","_id":26337},{"city":"Vojvodinci","_id":26338},{"city":"Bela Crkva","_id":26340},{"city":"Izbište","_id":26343},{"city":"Straža","_id":26345},{"city":"Jasenovo","_id":26346},{"city":"Grebenac","_id":26347},{"city":"Vračev Gaj","_id":26348},{"city":"Kusić","_id":26349},{"city":"Samoš","_id":26350},{"city":"Seleuš","_id":26351},{"city":"Ilandža","_id":26352},{"city":"Novi Kozjak","_id":26353},{"city":"Dobrica","_id":26354},{"city":"Plandište","_id":26360},{"city":"Lokve","_id":26361},{"city":"Janošik","_id":26362},{"city":"Jermenovci","_id":26363},{"city":"Margita","_id":26364},{"city":"Veliki Gaj","_id":26365},{"city":"Velika Greda","_id":26366},{"city":"Barice","_id":26367},{"city":"Kupinik","_id":26368},{"city":"Hajdučica","_id":26370},{"city":"Stari Lec","_id":26371},{"city":"Miletićevo","_id":26373},{"city":"Kruščica","_id":26380},{"city":"Užice","_id":31000},{"city":"Lunovo Selo","_id":31203},{"city":"Karan","_id":31204},{"city":"Sevojno","_id":31205},{"city":"Ravni","_id":31206},{"city":"Sirogojno","_id":31207},{"city":"Rožanstvo","_id":31208},{"city":"Ljubiš","_id":31209},{"city":"Požega","_id":31210},{"city":"Ježevica","_id":31213},{"city":"Gornja Dobrinja","_id":31214},{"city":"Jelen Do","_id":31215},{"city":"Arilje","_id":31230},{"city":"Kruščica","_id":31233},{"city":"Brekovo","_id":31234},{"city":"Divljaka","_id":31236},{"city":"Roge","_id":31237},{"city":"Bioska","_id":31241},{"city":"Kremna","_id":31242},{"city":"Mokra Gora","_id":31243},{"city":"Šljivovica","_id":31244},{"city":"Bajina Bašta","_id":31250},{"city":"Mitrovac","_id":31251},{"city":"Zlodol","_id":31253},{"city":"Kostojevići","_id":31254},{"city":"Rogačica","_id":31255},{"city":"Perućac","_id":31256},{"city":"Kaluđerske Bare","_id":31257},{"city":"Bačevci","_id":31258},{"city":"Kosjerić","_id":31260},{"city":"Seča Reka","_id":31262},{"city":"Varda","_id":31263},{"city":"Ražana","_id":31265},{"city":"Prijepolje","_id":31300},{"city":"Brodarevo","_id":31305},{"city":"Jabuka","_id":31306},{"city":"Aljinovici","_id":31307},{"city":"Čajetina","_id":31310},{"city":"Bela Zemlja","_id":31311},{"city":"Mačkat","_id":31312},{"city":"Gostilje","_id":31313},{"city":"Jablanica","_id":31314},{"city":"Zlatibor","_id":31315},{"city":"Draglica","_id":31317},{"city":"Kokin Brod","_id":31318},{"city":"Jasenovo","_id":31319},{"city":"Nova Varoš","_id":31320},{"city":"Bozetici","_id":31322},{"city":"Bistrica","_id":31325},{"city":"Priboj","_id":31330},{"city":"Sastavci","_id":31335},{"city":"Banja Kod Priboja","_id":31337},{"city":"Čačak","_id":32000},{"city":"Trbušani","_id":32205},{"city":"Kamenica","_id":32206},{"city":"Mrčajevci","_id":32210},{"city":"Mojsinje","_id":32211},{"city":"Preljina","_id":32212},{"city":"Bresnica","_id":32213},{"city":"Gornja Trepca","_id":32215},{"city":"Trnava","_id":32221},{"city":"Ježevica","_id":32222},{"city":"Zablaće","_id":32223},{"city":"Slatina","_id":32224},{"city":"Goričani","_id":32225},{"city":"Guča","_id":32230},{"city":"Goračići","_id":32232},{"city":"Kaona","_id":32234},{"city":"Kotraža","_id":32235},{"city":"Lučani","_id":32240},{"city":"Ovčar Banja","_id":32242},{"city":"Markovica","_id":32243},{"city":"Ivanjica","_id":32250},{"city":"Bukovica","_id":32251},{"city":"Prilicki Kiseljak","_id":32252},{"city":"Brezova","_id":32253},{"city":"Vionica","_id":32254},{"city":"Medjurečje","_id":32255},{"city":"Bratljevo","_id":32256},{"city":"Kovilje","_id":32257},{"city":"Kušići","_id":32258},{"city":"Bele Vode","_id":32259},{"city":"Gornji Milanovac","_id":32300},{"city":"Brđani","_id":32303},{"city":"Takovo","_id":32304},{"city":"Bersici","_id":32305},{"city":"Gornji Banjani","_id":32306},{"city":"Brezna","_id":32307},{"city":"Pranjani","_id":32308},{"city":"Šilopaj","_id":32311},{"city":"Boljkovci","_id":32312},{"city":"Rudnik","_id":32313},{"city":"Ugrinovci","_id":32314},{"city":"Vračevšnica","_id":32315},{"city":"Kragujevac","_id":34000},{"city":"Grosnica","_id":34202},{"city":"Ilićevo","_id":34203},{"city":"Divostin","_id":34204},{"city":"Bare","_id":34205},{"city":"Gornja Sabanta","_id":34206},{"city":"Erdec","_id":34207},{"city":"Marsic","_id":34209},{"city":"Rača Kragujevačka","_id":34210},{"city":"Jovanovac","_id":34211},{"city":"Malo Krcmare","_id":34212},{"city":"Veliko Krčmare","_id":34214},{"city":"Đurdjevo","_id":34215},{"city":"Male Pčelice","_id":34216},{"city":"Bukurovac","_id":34217},{"city":"Lapovo","_id":34220},{"city":"Lapovo Selo","_id":34223},{"city":"Korman","_id":34224},{"city":"Resnik","_id":34225},{"city":"Badnjevac","_id":34226},{"city":"Batočina","_id":34227},{"city":"Brzan","_id":34228},{"city":"Zirovnica","_id":34229},{"city":"Gruza","_id":34230},{"city":"Dragobraca","_id":34231},{"city":"Guberevac","_id":34232},{"city":"Knić","_id":34240},{"city":"Bumbarevo Brdo","_id":34242},{"city":"Toponica","_id":34243},{"city":"Zabojnica","_id":34244},{"city":"Arandjelovac","_id":34300},{"city":"Bukovik","_id":34301},{"city":"Ranilovic","_id":34302},{"city":"Arandjelovac","_id":34303},{"city":"Banja","_id":34304},{"city":"Darosava","_id":34305},{"city":"Vencane","_id":34306},{"city":"Stojnik","_id":34307},{"city":"Orašac","_id":34308},{"city":"Jelovik","_id":34309},{"city":"Topola","_id":34310},{"city":"Belosavci","_id":34312},{"city":"Natalinci","_id":34313},{"city":"Donja Satornja","_id":34314},{"city":"Jarmenovci","_id":34318},{"city":"Desimirovac","_id":34321},{"city":"Čumić","_id":34322},{"city":"Stragari","_id":34323},{"city":"Lužnice","_id":34325},{"city":"Jagodina","_id":35000},{"city":"Siokovac","_id":35203},{"city":"Bagrdan","_id":35204},{"city":"Jovac","_id":35205},{"city":"Raševica","_id":35206},{"city":"Potočac","_id":35207},{"city":"Vojska","_id":35208},{"city":"Subotica Kod Svilajnca","_id":35209},{"city":"Svilajnac","_id":35210},{"city":"Sedlare","_id":35211},{"city":"Plažane","_id":35212},{"city":"Despotovac","_id":35213},{"city":"Stenjevac","_id":35215},{"city":"Bobovo","_id":35217},{"city":"Končarevo","_id":35219},{"city":"Ribare","_id":35220},{"city":"Glogovac","_id":35222},{"city":"Veliki Popović","_id":35223},{"city":"Medvedja","_id":35224},{"city":"Kušiljevo","_id":35226},{"city":"Krušar","_id":35227},{"city":"Supska","_id":35228},{"city":"Ćuprija","_id":35230},{"city":"Senje","_id":35233},{"city":"Senjski Rudnik","_id":35234},{"city":"Ravna Reka","_id":35235},{"city":"Mijatovac","_id":35236},{"city":"Resavica","_id":35237},{"city":"Bigrenica","_id":35238},{"city":"Jasenovo","_id":35241},{"city":"Kolare","_id":35242},{"city":"Plana","_id":35247},{"city":"Trešnjevica","_id":35248},{"city":"Busilovac","_id":35249},{"city":"Paraćin","_id":35250},{"city":"Popovac","_id":35254},{"city":"Donja Mutnica","_id":35255},{"city":"Sikirica","_id":35256},{"city":"Drenovac","_id":35257},{"city":"Donje Vidovo","_id":35258},{"city":"Svojnovo","_id":35259},{"city":"Rekovac","_id":35260},{"city":"Glavinci","_id":35261},{"city":"Dragoševac","_id":35262},{"city":"Belusic","_id":35263},{"city":"Prevešt","_id":35264},{"city":"Dragovo","_id":35265},{"city":"Oparić","_id":35267},{"city":"Miloševo","_id":35268},{"city":"Strižilo","_id":35269},{"city":"Majur","_id":35270},{"city":"Novo Lanište","_id":35271},{"city":"Dragocvet","_id":35272},{"city":"Bunar","_id":35273},{"city":"Kraljevo","_id":36000},{"city":"Mataruška Banja","_id":36201},{"city":"Samaila","_id":36202},{"city":"Adrani","_id":36203},{"city":"Lađevci","_id":36204},{"city":"Roćevci","_id":36205},{"city":"Vitanovac","_id":36206},{"city":"Vitkovac","_id":36207},{"city":"Sirča","_id":36208},{"city":"Vrnjačka Banja","_id":36210},{"city":"Ratina","_id":36212},{"city":"Vrba","_id":36214},{"city":"Podunavci","_id":36215},{"city":"Novo Selo","_id":36216},{"city":"Vrnjci","_id":36217},{"city":"Čukojevac","_id":36220},{"city":"Zica","_id":36221},{"city":"Rudno","_id":36222},{"city":"Novi Pazar","_id":36300},{"city":"Dezeva","_id":36305},{"city":"Lukare","_id":36306},{"city":"Delimede","_id":36307},{"city":"Sopoćani","_id":36308},{"city":"Ribarice","_id":36309},{"city":"Sjenica","_id":36310},{"city":"Štavalj","_id":36311},{"city":"Duga Poljana","_id":36312},{"city":"Ugao","_id":36313},{"city":"Tutin","_id":36320},{"city":"Crkvine","_id":36321},{"city":"Konarevo","_id":36340},{"city":"Bogutovac","_id":36341},{"city":"Ušće","_id":36342},{"city":"Studenica","_id":36343},{"city":"Baljevac Na Ibru","_id":36344},{"city":"Jošanicka Banja","_id":36345},{"city":"Brvenik","_id":36346},{"city":"Raška","_id":36350},{"city":"Rudnica","_id":36353},{"city":"Kopaonik","_id":36354},{"city":"Kruševac","_id":37000},{"city":"Parunovac","_id":37201},{"city":"Djunis","_id":37202},{"city":"Zdravinje","_id":37203},{"city":"Veliki Siljegovac","_id":37204},{"city":"Ribarska Banja","_id":37205},{"city":"Dvorane","_id":37206},{"city":"Veliko Golovode","_id":37207},{"city":"Čitluk","_id":37208},{"city":"Velika Lomnica","_id":37209},{"city":"Ćićevac","_id":37210},{"city":"Stalać","_id":37212},{"city":"Vitosevac","_id":37213},{"city":"Pojate","_id":37214},{"city":"Ražanj","_id":37215},{"city":"Brus","_id":37220},{"city":"Gornji Stepos","_id":37221},{"city":"Kupci","_id":37222},{"city":"Razbojna","_id":37223},{"city":"Lepenac","_id":37224},{"city":"Brzeće","_id":37225},{"city":"Blazevo","_id":37226},{"city":"Milentija","_id":37227},{"city":"Zlatari","_id":37228},{"city":"Grasevci","_id":37229},{"city":"Aleksandrovac","_id":37230},{"city":"Pepeljevac","_id":37231},{"city":"Laćisled","_id":37232},{"city":"Velika Vrbnica","_id":37233},{"city":"Gornji Stupanj","_id":37234},{"city":"Trnavci","_id":37235},{"city":"Rataje","_id":37236},{"city":"Ploča","_id":37237},{"city":"Ples","_id":37238},{"city":"Šljivovo","_id":37239},{"city":"Trstenik","_id":37240},{"city":"Stopanja","_id":37242},{"city":"Počekovina","_id":37243},{"city":"Medvedja","_id":37244},{"city":"Velika Drenova","_id":37245},{"city":"Milutovac","_id":37246},{"city":"Globoder","_id":37251},{"city":"Jasika","_id":37252},{"city":"Bela Voda","_id":37253},{"city":"Konjuh","_id":37254},{"city":"Kukljin","_id":37255},{"city":"Kaonik","_id":37256},{"city":"Padež","_id":37257},{"city":"Donji Krcin","_id":37258},{"city":"Ribare","_id":37259},{"city":"Varvarin","_id":37260},{"city":"Bosnjane","_id":37262},{"city":"Bačina","_id":37265},{"city":"Obrez","_id":37266},{"city":"Dasnica","_id":37271},{"city":"Osreci","_id":37281},{"city":"Kriva Reka","_id":37282},{"city":"Brezovica","_id":38157},{"city":"Gracanica","_id":38205},{"city":"Kosovo Polje","_id":38210},{"city":"Prilužje","_id":38213},{"city":"Banjska","_id":38216},{"city":"Sočanica","_id":38217},{"city":"Leposavić","_id":38218},{"city":"Lešak","_id":38219},{"city":"Kosovska Mitrovica","_id":38220},{"city":"Zvecan","_id":38227},{"city":"Zubin Potok","_id":38228},{"city":"Štrpce","_id":38236},{"city":"Drajkovce","_id":38239},{"city":"Pasjane","_id":38266},{"city":"Ranilug","_id":38267},{"city":"Brestac","_id":"B22415"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/blocks/vendor"], () => (__webpack_exec__("./assets/src/scripts/react/edit-account.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);