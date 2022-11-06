import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import fs from 'fs';
import path from 'path';
import { createConfig } from './config/createConfig';
import createClient from './createClient';
import { globalI18n } from './appWithTranslation';
import { getFallbackForLng, unique } from './utils';
var DEFAULT_CONFIG_PATH = './next-i18next.config.js';
export var serverSideTranslations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(initialLocale) {
    var namespacesRequired,
      configOverride,
      extraLocales,
      userConfig,
      configFile,
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
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
            configFile = path.resolve(DEFAULT_CONFIG_PATH);
            if (!(!userConfig && fs.existsSync(configFile))) {
              _context.next = 11;
              break;
            }
            _context.next = 10;
            return import(configFile);
          case 10:
            userConfig = _context.sent;
          case 11:
            if (!(userConfig === null)) {
              _context.next = 13;
              break;
            }
            throw new Error('next-i18next was unable to find a user config');
          case 13:
            config = createConfig(_objectSpread(_objectSpread({}, userConfig), {}, {
              lng: initialLocale
            }));
            localeExtension = config.localeExtension, localePath = config.localePath, fallbackLng = config.fallbackLng, reloadOnPrerender = config.reloadOnPrerender;
            if (!reloadOnPrerender) {
              _context.next = 18;
              break;
            }
            _context.next = 18;
            return globalI18n === null || globalI18n === void 0 ? void 0 : globalI18n.reloadResources();
          case 18:
            _createClient = createClient(_objectSpread(_objectSpread({}, config), {}, {
              lng: initialLocale
            })), i18n = _createClient.i18n, initPromise = _createClient.initPromise;
            _context.next = 21;
            return initPromise;
          case 21:
            initialI18nStore = _defineProperty({}, initialLocale, {});
            getFallbackForLng(initialLocale, fallbackLng !== null && fallbackLng !== void 0 ? fallbackLng : false).concat(extraLocales || []).forEach(function (lng) {
              initialI18nStore[lng] = {};
            });
            if (Array.isArray(namespacesRequired)) {
              _context.next = 29;
              break;
            }
            if (!(typeof localePath === 'function')) {
              _context.next = 26;
              break;
            }
            throw new Error('Must provide namespacesRequired to serverSideTranslations when using a function as localePath');
          case 26:
            getLocaleNamespaces = function getLocaleNamespaces(path) {
              return fs.existsSync(path) ? fs.readdirSync(path).map(function (file) {
                return file.replace(".".concat(localeExtension), '');
              }) : [];
            };
            namespacesByLocale = Object.keys(initialI18nStore).map(function (locale) {
              return getLocaleNamespaces(path.resolve(process.cwd(), "".concat(localePath, "/").concat(locale)));
            }).flat();
            namespacesRequired = unique(namespacesByLocale);
          case 29:
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
          case 31:
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