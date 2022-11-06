/**
 * @jest-environment node
 */

import React from 'react';
import fs from 'fs';
import { I18nextProvider } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { appWithTranslation } from './appWithTranslation';
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readdirSync: jest.fn()
}));
const DummyI18nextProvider = ({
  children
}) => /*#__PURE__*/React.createElement(React.Fragment, null, children);
jest.mock('react-i18next', () => ({
  I18nextProvider: jest.fn(),
  __esmodule: true
}));
const MyApp = ({
  Component,
  pageProps
}) => {
  Component;
  pageProps;
  return /*#__PURE__*/React.createElement("div", null, "Hello world");
};
const DummyApp = appWithTranslation(MyApp);
const props = {
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
const renderComponent = () => renderToString( /*#__PURE__*/React.createElement(DummyApp, props));
describe('appWithTranslation', () => {
  beforeEach(() => {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    I18nextProvider.mockImplementation(DummyI18nextProvider);
  });
  afterEach(jest.resetAllMocks);
  it('returns an I18nextProvider', () => {
    renderComponent();
    expect(I18nextProvider).toHaveBeenCalledTimes(1);
    const [args] = I18nextProvider.mock.calls;
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