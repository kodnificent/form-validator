(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormValidator"] = factory();
	else
		root["FormValidator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://FormValidator/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/FormValidator.js":
/*!******************************!*\
  !*** ./src/FormValidator.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormValidator; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mixins_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/validator */ \"./src/mixins/validator.js\");\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules */ \"./src/rules/index.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // Note that all protected methods, protected properties\n// and static properties should be prepended with $ to enable\n// one differentiate core methods or properties from props\n// that were merged into the class.\n\nvar FormValidator = /*#__PURE__*/function () {\n  /**\n   * Create a new form validator instance.\n   *\n   * @param {string} [selector]\n   * @param {Object} [options]\n   * @param {Object} options.messages\n   * @param {Object} options.placeholders\n   * @param {Object|string} options.rules\n   * @param {string} options.fieldSelector\n   * @param {string} options.feedbackSelector\n   * @param {Function} options.beforeValidate\n   * @param {Function} options.onInvalid\n   * @param {Function} options.validated\n   */\n  function FormValidator() {\n    var _this = this;\n\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FormValidator);\n\n    // we merge option props into the class\n    var mergedOptions = _objectSpread(_objectSpread({}, FormValidator.validatorOptions()), options);\n\n    Object.keys(mergedOptions).forEach(function (key) {\n      var _this$key;\n\n      _this[key] = (_this$key = _this[key]) !== null && _this$key !== void 0 ? _this$key : mergedOptions[key];\n    });\n    this.$selector = selector !== null && selector !== void 0 ? selector : _mixins_validator__WEBPACK_IMPORTED_MODULE_5__[\"default\"].selector;\n    this.$form = document.querySelector(this.$selector);\n\n    if (!this.$form) {\n      // @todo throw error\n      return;\n    }\n\n    this.$attachPlaceholders();\n    this.$setFields();\n    this.$attachSubmitEvent();\n  }\n  /**\n   * Attach form placeholders to the static placeholders.\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FormValidator, [{\n    key: \"$attachPlaceholders\",\n    value: function $attachPlaceholders() {\n      if (this.placeholders) {\n        FormValidator.withPlaceholders(this.placeholders);\n      }\n    }\n    /**\n     * Assign rules and feedbackSelector to form fields.\n     */\n\n  }, {\n    key: \"$setFields\",\n    value: function $setFields() {\n      var _this2 = this;\n\n      var fields = {}; // first we assign rules and field element to each field\n\n      if (this.rules && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this.rules) === 'object') {\n        // we give precedence to rules property when setting fields\n        Object.keys(this.rules).forEach(function (fieldName) {\n          var rules = _this2.rules[fieldName];\n\n          var selector = _this2.fieldSelector.replace(':attribute', fieldName);\n\n          var data = {\n            attribute: fieldName,\n            rules: typeof rules === 'string' ? rules.split('|') : rules,\n            el: _this2.$form.querySelector(selector)\n          };\n          fields[fieldName] = data;\n        });\n      } else {\n        // alternatively, we search through the html fields for rules.\n        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.$form.querySelectorAll('[data-rules]')).forEach(function (el) {\n          var name = el.getAttribute('name'); // @todo through error if name is null or undefined\n\n          var data = {\n            attribute: name,\n            rules: el.getAttribute('data-rules').split('|'),\n            el: el\n          };\n          fields[name] = data;\n        });\n      }\n\n      Object.keys(fields).forEach(function (name) {\n        // next we assign the feedback selector value\n        // and query the feedback el to each field.\n        var field = fields[name];\n        field.feedbackSelector = _this2.feedbackSelector.replace(':attribute', name);\n        field.feedbackEl = _this2.$form.querySelector(field.feedbackSelector);\n      });\n      this.$fields = fields;\n    }\n    /**\n     * Attach submit event listener to the form that requires validation.\n     */\n\n  }, {\n    key: \"$attachSubmitEvent\",\n    value: function $attachSubmitEvent() {\n      var _this$$attachedSubmit;\n\n      this.$attachedSubmitEvent = (_this$$attachedSubmit = this.$attachedSubmitEvent) !== null && _this$$attachedSubmit !== void 0 ? _this$$attachedSubmit : false; // we check if the submit event hasn't been attached attached\n      // to avoid attaching an event twice and also, the form exists.\n\n      if (this.$attachedSubmitEvent || !this.$form) return;\n      this.$form.addEventListener('submit', this.$handleSubmit);\n      this.$attachedSubmitEvent = true;\n    }\n    /**\n     * Handle the form submit event.\n     *\n     * @param {Event} event\n     */\n\n  }, {\n    key: \"$handleSubmit\",\n    value: function $handleSubmit(event) {\n      this.beforeValidate.call(this, event);\n      var result = FormValidator.validate();\n\n      if (result.invalid) {\n        return this.onInvalid.call(this, event, result.errors);\n      }\n\n      return this.validated.call(this, result.data);\n    }\n    /**\n     * Get validator options value.\n     */\n\n  }], [{\n    key: \"validatorOptions\",\n    value: function validatorOptions() {\n      var validatorOptions = typeof _mixins_validator__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options === 'function' ? _mixins_validator__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options.call(_mixins_validator__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) : _mixins_validator__WEBPACK_IMPORTED_MODULE_5__[\"default\"].options;\n      return validatorOptions;\n    }\n    /**\n     * Validate form fields against its rules.\n     *\n     * @param {Object} data\n     * @param {Object} fields\n     * @param {string} fields.attribute\n     * @param {array} fields.rules\n     */\n\n  }, {\n    key: \"validate\",\n    value: function validate(data, fields) {\n      var result = {\n        invalid: false,\n        errors: {},\n        data: data\n      };\n      Object.keys(fields).forEach(function (name) {\n        var field = fields[name];\n        var messages = [];\n        field.rules.some(function (ruleName) {\n          var _validator$message, _FormValidator$ruleMe;\n\n          // the bail rule means we should stop validating after first validation.\n          if (ruleName === 'bail') return false; // note that if the rule does not exist, we still assign an error to the field.\n\n          var validator = FormValidator.findRule(ruleName);\n          if (validator === null || validator === void 0 ? void 0 : validator.passes(data[field.attribute])) return false;\n          var validatorMessage = (_validator$message = validator === null || validator === void 0 ? void 0 : validator.message()) !== null && _validator$message !== void 0 ? _validator$message : 'Invalid rule';\n          var message = (_FormValidator$ruleMe = FormValidator.ruleMessage(ruleName)) !== null && _FormValidator$ruleMe !== void 0 ? _FormValidator$ruleMe : validatorMessage;\n          message = message.replace(':attribute', field.attribute);\n          messages.push(message); // we stop validating after first validation.\n\n          return field.rules[0] === 'bail' && field.rules[1] === ruleName;\n        });\n        if (messages.length > 0) result.errors[field.attribute] = messages;\n      });\n      result.invalid = Object.keys(result.errors).length > 0;\n      return result;\n    }\n    /**\n     * Swap attribute placeholders with a more user friendly label\n     * such as \"First name\" in place of \"first_name\".\n     *\n     * @param {Object} placeholders\n     */\n\n  }, {\n    key: \"withPlaceholders\",\n    value: function withPlaceholders(placeholders) {\n      if (!this.$placeholders) {\n        this.$placeholders = placeholders;\n      }\n\n      this.$placeholders = _objectSpread(_objectSpread({}, this.$placeholders), placeholders);\n    }\n    /**\n     * Get the placeholder value of an attribute.\n     *\n     * @param {string} attributeName\n     */\n\n  }, {\n    key: \"placeholder\",\n    value: function placeholder(attributeName) {\n      var _this$$placeholders$a, _this$$placeholders;\n\n      var placeholder = (_this$$placeholders$a = (_this$$placeholders = this.$placeholders) === null || _this$$placeholders === void 0 ? void 0 : _this$$placeholders[attributeName]) !== null && _this$$placeholders$a !== void 0 ? _this$$placeholders$a : attributeName;\n      return placeholder;\n    }\n    /**\n     * Swap rule messages with a custom message.\n     *\n     * @param {Object} messages\n     */\n\n  }, {\n    key: \"withRuleMessages\",\n    value: function withRuleMessages(messages) {\n      if (!this.$ruleMessages) {\n        this.$ruleMessages = messages;\n      }\n\n      this.$ruleMessages = _objectSpread(_objectSpread({}, this.$ruleMessages), messages);\n      return this;\n    }\n    /**\n     * Get the custom rule message for a validation rule.\n     *\n     * @param {string} ruleName\n     */\n\n  }, {\n    key: \"ruleMessage\",\n    value: function ruleMessage(ruleName) {\n      var _this$$ruleMessages;\n\n      var message = (_this$$ruleMessages = this.$ruleMessages) === null || _this$$ruleMessages === void 0 ? void 0 : _this$$ruleMessages[ruleName];\n      return message;\n    }\n    /**\n     * Add custom validation rules.\n     *\n     * @param  {...any} rules\n     */\n\n  }, {\n    key: \"withRules\",\n    value: function withRules() {\n      var _this$$customRules;\n\n      var customRules = (_this$$customRules = this.$customRules) !== null && _this$$customRules !== void 0 ? _this$$customRules : [];\n\n      for (var _len = arguments.length, rules = new Array(_len), _key = 0; _key < _len; _key++) {\n        rules[_key] = arguments[_key];\n      }\n\n      this.$customRules = customRules.concat(rules);\n      return this;\n    }\n    /**\n     * Find a rule by name.\n     *\n     * @param {string} ruleName\n     */\n\n  }, {\n    key: \"findRule\",\n    value: function findRule(ruleName) {\n      return this.rules().filter(function (rule) {\n        return rule.name() === ruleName;\n      })[0];\n    }\n  }, {\n    key: \"rules\",\n    value: function rules() {\n      var _this$$customRules2;\n\n      var customRules = (_this$$customRules2 = this.$customRules) !== null && _this$$customRules2 !== void 0 ? _this$$customRules2 : [];\n      var rules = _rules__WEBPACK_IMPORTED_MODULE_6__[\"default\"].concat(customRules);\n      return rules;\n    }\n  }]);\n\n  return FormValidator;\n}();\n\n\n\n//# sourceURL=webpack://FormValidator/./src/FormValidator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FormValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidator */ \"./src/FormValidator.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_FormValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://FormValidator/./src/index.js?");

/***/ }),

/***/ "./src/mixins/validator.js":
/*!*********************************!*\
  !*** ./src/mixins/validator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Target form element selector.\n   */\n  selector: 'form',\n\n  /**\n   * Form validator options.\n   */\n  options: function options() {\n    return {\n      messages: null,\n      placeholders: null,\n      rules: null,\n      fieldSelector: '[name=:attribute]',\n      feedbackSelector: '[data-:attribute-feedback]',\n      beforeValidate: this.beforeValidate,\n      onInvalid: this.onInvalid,\n      validated: this.validated\n    };\n  },\n\n  /**\n   * Callback to call before validating a form.\n   *\n   * @param {Object} event\n   */\n  beforeValidate: function beforeValidate() {//\n  },\n\n  /**\n   * Callback to call when there is a validation error on a form.\n   *\n   * @param {Event} event\n   * @param {array} errors\n   */\n  onInvalid: function onInvalid(event, errors) {\n    event.preventDefault();\n    errors.forEach(function () {//\n    });\n  },\n\n  /**\n   * Callback to call after the form passes validation.\n   */\n  validated: function validated() {//\n  }\n});\n\n//# sourceURL=webpack://FormValidator/./src/mixins/validator.js?");

/***/ }),

/***/ "./src/rules/Required.js":
/*!*******************************!*\
  !*** ./src/rules/Required.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Required; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Required = /*#__PURE__*/function () {\n  function Required() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Required);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Required, null, [{\n    key: \"name\",\n    value: function name() {\n      'required';\n    }\n  }, {\n    key: \"passes\",\n    value: function passes(fieldValue) {\n      return fieldValue;\n    }\n  }, {\n    key: \"message\",\n    value: function message() {\n      return 'The :attribute is required';\n    }\n  }]);\n\n  return Required;\n}();\n\n\n\n//# sourceURL=webpack://FormValidator/./src/rules/Required.js?");

/***/ }),

/***/ "./src/rules/index.js":
/*!****************************!*\
  !*** ./src/rules/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Required */ \"./src/rules/Required.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Required__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack://FormValidator/./src/rules/index.js?");

/***/ })

/******/ })["default"];
});