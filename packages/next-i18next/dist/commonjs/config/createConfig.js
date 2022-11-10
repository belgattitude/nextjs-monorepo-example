"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig = void 0;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.object.entries.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.for-each.js");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defaultConfig = require("./defaultConfig");
var _utils = require("../utils");
var _excluded = ["i18n"],
  _excluded2 = ["i18n"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var deepMergeObjects = ['backend', 'detection'];
var createConfig = function createConfig(userConfig) {
  var _userConfig$use;
  if (typeof (userConfig === null || userConfig === void 0 ? void 0 : userConfig.lng) !== 'string') {
    throw new Error('config.lng was not passed into createConfig');
  }

  //
  // Initial merge of default and user-provided config
  //
  var userI18n = userConfig.i18n,
    userConfigStripped = (0, _objectWithoutProperties2["default"])(userConfig, _excluded);
  var defaultI18n = _defaultConfig.defaultConfig.i18n,
    defaultConfigStripped = (0, _objectWithoutProperties2["default"])(_defaultConfig.defaultConfig, _excluded2);
  var combinedConfig = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultConfigStripped), userConfigStripped), defaultI18n), userI18n);
  var defaultNS = combinedConfig.defaultNS,
    lng = combinedConfig.lng,
    localeExtension = combinedConfig.localeExtension,
    localePath = combinedConfig.localePath,
    localeStructure = combinedConfig.localeStructure,
    nonExplicitSupportedLngs = combinedConfig.nonExplicitSupportedLngs;
  var locales = combinedConfig.locales.filter(function (l) {
    return l !== 'default';
  });

  /**
   * Skips translation file resolution while in cimode
   * https://github.com/i18next/next-i18next/pull/851#discussion_r503113620
  */
  if (lng === 'cimode') {
    return combinedConfig;
  }
  if (typeof combinedConfig.fallbackLng === 'undefined') {
    combinedConfig.fallbackLng = combinedConfig.defaultLocale;
    if (combinedConfig.fallbackLng === 'default') {
      var _locales = (0, _slicedToArray2["default"])(locales, 1);
      combinedConfig.fallbackLng = _locales[0];
    }
  }
  var fallbackLng = combinedConfig.fallbackLng;
  if (nonExplicitSupportedLngs) {
    var createFallbackObject = function createFallbackObject(acc, l) {
      var _l$split = l.split('-'),
        _l$split2 = (0, _slicedToArray2["default"])(_l$split, 1),
        locale = _l$split2[0];
      acc[l] = [locale];
      return acc;
    };
    if (typeof fallbackLng === 'string') {
      combinedConfig.fallbackLng = combinedConfig.locales.filter(function (l) {
        return l.includes('-');
      }).reduce(createFallbackObject, {
        "default": [fallbackLng]
      });
    } else if (Array.isArray(fallbackLng)) {
      combinedConfig.fallbackLng = combinedConfig.locales.filter(function (l) {
        return l.includes('-');
      }).reduce(createFallbackObject, {
        "default": fallbackLng
      });
    } else if ((0, _typeof2["default"])(fallbackLng) === 'object') {
      combinedConfig.fallbackLng = Object.entries(combinedConfig.fallbackLng).reduce(function (acc, _ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          l = _ref2[0],
          f = _ref2[1];
        acc[l] = l.includes('-') ? (0, _utils.unique)([l.split('-')[0]].concat((0, _toConsumableArray2["default"])(f))) : f;
        return acc;
      }, fallbackLng);
    } else if (typeof fallbackLng === 'function') {
      throw new Error('If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng');
    }
  }
  var hasCustomBackend = userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$use = userConfig.use) === null || _userConfig$use === void 0 ? void 0 : _userConfig$use.some(function (b) {
    return b.type === 'backend';
  });
  if (!process.browser && typeof window === 'undefined') {
    combinedConfig.preload = locales;
    if (!hasCustomBackend) {
      var fs = require('fs');
      var path = require('path');

      //
      // Validate defaultNS
      // https://github.com/i18next/next-i18next/issues/358
      //
      if (typeof defaultNS === 'string' && typeof lng !== 'undefined') {
        if (typeof localePath === 'string') {
          var _userConfig$interpola, _userConfig$interpola2, _userConfig$interpola3, _userConfig$interpola4;
          var prefix = (_userConfig$interpola = userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$interpola2 = userConfig.interpolation) === null || _userConfig$interpola2 === void 0 ? void 0 : _userConfig$interpola2.prefix) !== null && _userConfig$interpola !== void 0 ? _userConfig$interpola : '{{';
          var suffix = (_userConfig$interpola3 = userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$interpola4 = userConfig.interpolation) === null || _userConfig$interpola4 === void 0 ? void 0 : _userConfig$interpola4.suffix) !== null && _userConfig$interpola3 !== void 0 ? _userConfig$interpola3 : '}}';
          var defaultLocaleStructure = localeStructure.replace("".concat(prefix, "lng").concat(suffix), lng).replace("".concat(prefix, "ns").concat(suffix), defaultNS);
          var defaultFile = "/".concat(defaultLocaleStructure, ".").concat(localeExtension);
          var defaultNSPath = path.join(localePath, defaultFile);
          var defaultNSExists = fs.existsSync(defaultNSPath);
          var fallback = (0, _utils.getFallbackForLng)(lng, combinedConfig.fallbackLng);
          var defaultFallbackNSExists = fallback.some(function (f) {
            var fallbackFile = defaultFile.replace(lng, f);
            var defaultNSPath = path.join(localePath, fallbackFile);
            return fs.existsSync(defaultNSPath);
          });
          if (!defaultNSExists && !defaultFallbackNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error("Default namespace not found at ".concat(defaultNSPath));
          }
        } else if (typeof localePath === 'function') {
          var _defaultNSPath = localePath(lng, defaultNS, false);
          var _defaultNSExists = fs.existsSync(_defaultNSPath);
          var _fallback = (0, _utils.getFallbackForLng)(lng, combinedConfig.fallbackLng);
          var _defaultFallbackNSExists = _fallback.some(function (f) {
            var defaultNSPath = localePath(f, defaultNS, false);
            return fs.existsSync(defaultNSPath);
          });
          if (!_defaultNSExists && !_defaultFallbackNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error("Default namespace not found at ".concat(_defaultNSPath));
          }
        }
      }

      //
      // Set server side backend
      //
      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: path.resolve(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)),
          loadPath: path.resolve(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension))
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: function addPath(locale, namespace) {
            return localePath(locale, namespace, true);
          },
          loadPath: function loadPath(locale, namespace) {
            return localePath(locale, namespace, false);
          }
        };
      } else {
        throw new Error("Unsupported localePath type: ".concat((0, _typeof2["default"])(localePath)));
      }

      //
      // Set server side preload (namespaces)
      //
      if (!combinedConfig.ns && typeof lng !== 'undefined') {
        if (typeof localePath === 'function') {
          throw new Error('Must provide all namespaces in ns option if using a function as localePath');
        }
        var getNamespaces = function getNamespaces(locales) {
          var getLocaleNamespaces = function getLocaleNamespaces(p) {
            var ret = [];
            if (!fs.existsSync(p)) return ret;
            fs.readdirSync(p).map(function (file) {
              var joinedP = path.join(p, file);
              if (fs.statSync(joinedP).isDirectory()) {
                var subRet = getLocaleNamespaces(joinedP).map(function (n) {
                  return "".concat(file, "/").concat(n);
                });
                ret = ret.concat(subRet);
                return;
              }
              ret.push(file.replace(".".concat(localeExtension), ''));
            });
            return ret;
          };
          var namespacesByLocale = locales.map(function (locale) {
            return getLocaleNamespaces(path.resolve(process.cwd(), "".concat(localePath, "/").concat(locale)));
          });
          var allNamespaces = [];
          var _iterator = _createForOfIteratorHelper(namespacesByLocale),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var localNamespaces = _step.value;
              allNamespaces.push.apply(allNamespaces, (0, _toConsumableArray2["default"])(localNamespaces));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return (0, _utils.unique)(allNamespaces);
        };
        combinedConfig.ns = getNamespaces((0, _utils.unique)([lng].concat((0, _toConsumableArray2["default"])((0, _utils.getFallbackForLng)(lng, combinedConfig.fallbackLng)))));
      }
    }
  } else {
    //
    // Set client side backend, if there is no custom backend
    //
    if (!hasCustomBackend) {
      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: "".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension),
          loadPath: "".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension)
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: function addPath(locale, namespace) {
            return localePath(locale, namespace, true);
          },
          loadPath: function loadPath(locale, namespace) {
            return localePath(locale, namespace, false);
          }
        };
      }
    }
    if (typeof combinedConfig.ns !== 'string' && !Array.isArray(combinedConfig.ns)) {
      combinedConfig.ns = [defaultNS];
    }
  }

  //
  // Deep merge with overwrite - goes last
  //
  deepMergeObjects.forEach(function (obj) {
    if (userConfig[obj]) {
      combinedConfig[obj] = _objectSpread(_objectSpread({}, combinedConfig[obj]), userConfig[obj]);
    }
  });
  return combinedConfig;
};
exports.createConfig = createConfig;