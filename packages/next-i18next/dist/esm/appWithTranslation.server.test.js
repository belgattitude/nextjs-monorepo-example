import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var __jsx = React.createElement;
/**
 * @jest-environment node
 */

import React from 'react';
import fs from 'fs';
import { I18nextProvider } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { appWithTranslation } from './appWithTranslation';
jest.mock('fs', function () {
  return {
    existsSync: jest.fn(),
    readdirSync: jest.fn()
  };
});
var DummyI18nextProvider = function DummyI18nextProvider(_ref) {
  var children = _ref.children;
  return __jsx(React.Fragment, null, children);
};
jest.mock('react-i18next', function () {
  return {
    I18nextProvider: jest.fn(),
    __esmodule: true
  };
});
var MyApp = function MyApp(_ref2) {
  var Component = _ref2.Component,
    pageProps = _ref2.pageProps;
  Component;
  pageProps;
  return __jsx("div", null, "Hello world");
};
var DummyApp = appWithTranslation(MyApp);
var props = {
  pageProps: {
    _nextI18Next: {
      initialLocale: 'en',
      userConfig: {
        i18n: {
          defaultLocale: 'en',
          locales: ['en', 'fr']
        }
      }
    }
  },
  router: {
    locale: 'en',
    route: '/'
  }
};
var renderComponent = function renderComponent() {
  return renderToString(__jsx(DummyApp, props));
};
describe('appWithTranslation', function () {
  beforeEach(function () {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    I18nextProvider.mockImplementation(DummyI18nextProvider);
  });
  afterEach(jest.resetAllMocks);
  it('returns an I18nextProvider', function () {
    renderComponent();
    expect(I18nextProvider).toHaveBeenCalledTimes(1);
    var _mock$calls = _slicedToArray(I18nextProvider.mock.calls, 1),
      args = _mock$calls[0];
    expect(I18nextProvider).toHaveBeenCalledTimes(1);
    expect(args).toHaveLength(2);
    expect(args[0].children).toBeTruthy();
    expect(args[0].i18n.addResource).toBeTruthy();
    expect(args[0].i18n.language).toBe('en');
    expect(args[0].i18n.isInitialized).toBe(true);
    expect(fs.existsSync).toHaveBeenCalledTimes(3);
    expect(fs.readdirSync).toHaveBeenCalledTimes(1);
  });
});