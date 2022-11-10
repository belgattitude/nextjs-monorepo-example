function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { I18nextProvider } from 'react-i18next';
import { createConfig } from './config/createConfig';
import createClient from './createClient';
export { Trans, useTranslation, withTranslation } from 'react-i18next';
export let globalI18n = null;
export const appWithTranslation = (WrappedComponent, configOverride = null) => {
  const AppWithTranslation = props => {
    const {
      _nextI18Next
    } = props.pageProps;
    let locale = _nextI18Next?.initialLocale ?? props?.router?.locale;
    const ns = _nextI18Next?.ns;

    // Memoize the instance and only re-initialize when either:
    // 1. The route changes (non-shallowly)
    // 2. Router locale changes
    // 3. UserConfig override changes
    const i18n = useMemo(() => {
      if (!_nextI18Next && !configOverride) return null;
      const userConfig = configOverride ?? _nextI18Next?.userConfig;
      if (!userConfig) {
        throw new Error('appWithTranslation was called without a next-i18next config');
      }
      if (!userConfig?.i18n) {
        throw new Error('appWithTranslation was called without config.i18n');
      }
      if (!userConfig?.i18n?.defaultLocale) {
        throw new Error('config.i18n does not include a defaultLocale property');
      }
      const {
        initialI18nStore
      } = _nextI18Next || {};
      const resources = configOverride?.resources ? configOverride.resources : initialI18nStore;
      if (!locale) locale = userConfig.i18n.defaultLocale;
      const instance = createClient({
        ...createConfig({
          ...userConfig,
          lng: locale
        }),
        lng: locale,
        ns,
        resources
      }).i18n;
      globalI18n = instance;
      return instance;
    }, [_nextI18Next, locale, configOverride, ns]);
    return i18n !== null ? /*#__PURE__*/React.createElement(I18nextProvider, {
      i18n: i18n
    }, /*#__PURE__*/React.createElement(WrappedComponent, props)) : /*#__PURE__*/React.createElement(WrappedComponent, _extends({
      key: locale
    }, props));
  };
  return hoistNonReactStatics(AppWithTranslation, WrappedComponent);
};