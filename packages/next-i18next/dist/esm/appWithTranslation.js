import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var __jsx = React.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useMemo } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { I18nextProvider } from 'react-i18next';
import { createConfig } from './config/createConfig';
import createClient from './createClient';
export { Trans, useTranslation, withTranslation } from 'react-i18next';
export var globalI18n = null;
export var appWithTranslation = function appWithTranslation(WrappedComponent) {
  var configOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var AppWithTranslation = function AppWithTranslation(props) {
    var _nextI18Next$initialL, _props$router;
    var _nextI18Next = props.pageProps._nextI18Next;
    var locale = (_nextI18Next$initialL = _nextI18Next === null || _nextI18Next === void 0 ? void 0 : _nextI18Next.initialLocale) !== null && _nextI18Next$initialL !== void 0 ? _nextI18Next$initialL : props === null || props === void 0 ? void 0 : (_props$router = props.router) === null || _props$router === void 0 ? void 0 : _props$router.locale;
    var ns = _nextI18Next === null || _nextI18Next === void 0 ? void 0 : _nextI18Next.ns;

    // Memoize the instance and only re-initialize when either:
    // 1. The route changes (non-shallowly)
    // 2. Router locale changes
    // 3. UserConfig override changes
    var i18n = useMemo(function () {
      var _userConfig$i18n;
      if (!_nextI18Next && !configOverride) return null;
      var userConfig = configOverride !== null && configOverride !== void 0 ? configOverride : _nextI18Next === null || _nextI18Next === void 0 ? void 0 : _nextI18Next.userConfig;
      if (!userConfig) {
        throw new Error('appWithTranslation was called without a next-i18next config');
      }
      if (!(userConfig !== null && userConfig !== void 0 && userConfig.i18n)) {
        throw new Error('appWithTranslation was called without config.i18n');
      }
      if (!(userConfig !== null && userConfig !== void 0 && (_userConfig$i18n = userConfig.i18n) !== null && _userConfig$i18n !== void 0 && _userConfig$i18n.defaultLocale)) {
        throw new Error('config.i18n does not include a defaultLocale property');
      }
      var _ref = _nextI18Next || {},
        initialI18nStore = _ref.initialI18nStore;
      var resources = configOverride !== null && configOverride !== void 0 && configOverride.resources ? configOverride.resources : initialI18nStore;
      if (!locale) locale = userConfig.i18n.defaultLocale;
      var instance = createClient(_objectSpread(_objectSpread({}, createConfig(_objectSpread(_objectSpread({}, userConfig), {}, {
        lng: locale
      }))), {}, {
        lng: locale,
        ns: ns,
        resources: resources
      })).i18n;
      globalI18n = instance;
      return instance;
    }, [_nextI18Next, locale, configOverride, ns]);
    return i18n !== null ? __jsx(I18nextProvider, {
      i18n: i18n
    }, __jsx(WrappedComponent, props)) : __jsx(WrappedComponent, _extends({
      key: locale
    }, props));
  };
  return hoistNonReactStatics(AppWithTranslation, WrappedComponent);
};