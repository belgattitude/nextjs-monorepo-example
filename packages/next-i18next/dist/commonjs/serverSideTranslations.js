"use strict";

require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverSideTranslations = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.object.keys.js");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _createConfig = require("./config/createConfig");
var _node = _interopRequireDefault(require("./createClient/node"));
var _appWithTranslation = require("./appWithTranslation");
var _utils = require("./utils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DEFAULT_CONFIG_PATH = './next-i18next.config.js';
var serverSideTranslations = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(initialLocale) {
    var namespacesRequired,
      configOverride,
      extraLocales,
      userConfig,
      config,
      localeExtension,
      localePath,
      fallbackLng,
      reloadOnPrerender,
      _createClient,
      i18n,
      initPromise,
      initialI18nStore,
      getLocaleNamespaces,
      namespacesByLocale,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            namespacesRequired = _args.length > 1 && _args[1] !== undefined ? _args[1] : undefined;
            configOverride = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            extraLocales = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
            if (!(typeof initialLocale !== 'string')) {
              _context.next = 5;
              break;
            }
            throw new Error('Initial locale argument was not passed into serverSideTranslations');
          case 5:
            userConfig = configOverride;
            if (!(!userConfig && _fs["default"].existsSync(_path["default"].resolve(DEFAULT_CONFIG_PATH)))) {
              _context.next = 10;
              break;
            }
            _context.next = 9;
            return Promise.resolve("".concat(_path["default"].resolve(DEFAULT_CONFIG_PATH))).then(function (s) {
              return _interopRequireWildcard(require(s));
            });
          case 9:
            userConfig = _context.sent;
          case 10:
            if (!(userConfig === null)) {
              _context.next = 12;
              break;
            }
            throw new Error('next-i18next was unable to find a user config');
          case 12:
            config = (0, _createConfig.createConfig)(_objectSpread(_objectSpread({}, userConfig), {}, {
              lng: initialLocale
            }));
            localeExtension = config.localeExtension, localePath = config.localePath, fallbackLng = config.fallbackLng, reloadOnPrerender = config.reloadOnPrerender;
            if (!reloadOnPrerender) {
              _context.next = 17;
              break;
            }
            _context.next = 17;
            return _appWithTranslation.globalI18n === null || _appWithTranslation.globalI18n === void 0 ? void 0 : _appWithTranslation.globalI18n.reloadResources();
          case 17:
            _createClient = (0, _node["default"])(_objectSpread(_objectSpread({}, config), {}, {
              lng: initialLocale
            })), i18n = _createClient.i18n, initPromise = _createClient.initPromise;
            _context.next = 20;
            return initPromise;
          case 20:
            initialI18nStore = (0, _defineProperty2["default"])({}, initialLocale, {});
            (0, _utils.getFallbackForLng)(initialLocale, fallbackLng !== null && fallbackLng !== void 0 ? fallbackLng : false).concat(extraLocales || []).forEach(function (lng) {
              initialI18nStore[lng] = {};
            });
            if (Array.isArray(namespacesRequired)) {
              _context.next = 28;
              break;
            }
            if (!(typeof localePath === 'function')) {
              _context.next = 25;
              break;
            }
            throw new Error('Must provide namespacesRequired to serverSideTranslations when using a function as localePath');
          case 25:
            getLocaleNamespaces = function getLocaleNamespaces(path) {
              return _fs["default"].existsSync(path) ? _fs["default"].readdirSync(path).map(function (file) {
                return file.replace(".".concat(localeExtension), '');
              }) : [];
            };
            namespacesByLocale = Object.keys(initialI18nStore).map(function (locale) {
              return getLocaleNamespaces(_path["default"].resolve(process.cwd(), "".concat(localePath, "/").concat(locale)));
            }).flat();
            namespacesRequired = (0, _utils.unique)(namespacesByLocale);
          case 28:
            namespacesRequired.forEach(function (ns) {
              for (var locale in initialI18nStore) {
                initialI18nStore[locale][ns] = (i18n.services.resourceStore.data[locale] || {})[ns] || {};
              }
            });
            return _context.abrupt("return", {
              _nextI18Next: {
                initialI18nStore: initialI18nStore,
                initialLocale: initialLocale,
                ns: namespacesRequired,
                userConfig: config.serializeConfig ? userConfig : null
              }
            });
          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function serverSideTranslations(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.serverSideTranslations = serverSideTranslations;