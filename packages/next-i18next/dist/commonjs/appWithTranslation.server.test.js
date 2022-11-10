"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _fs = _interopRequireDefault(require("fs"));
var _reactI18next = require("react-i18next");
var _server = require("react-dom/server");
var _appWithTranslation = require("./appWithTranslation");
var __jsx = _react["default"].createElement;
jest.mock('fs', function () {
  return {
    existsSync: jest.fn(),
    readdirSync: jest.fn()
  };
});
var DummyI18nextProvider = function DummyI18nextProvider(_ref) {
  var children = _ref.children;
  return __jsx(_react["default"].Fragment, null, children);
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
var DummyApp = (0, _appWithTranslation.appWithTranslation)(MyApp);
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
  return (0, _server.renderToString)(__jsx(DummyApp, props));
};
describe('appWithTranslation', function () {
  beforeEach(function () {
    _fs["default"].existsSync.mockReturnValue(true);
    _fs["default"].readdirSync.mockReturnValue([]);
    _reactI18next.I18nextProvider.mockImplementation(DummyI18nextProvider);
  });
  afterEach(jest.resetAllMocks);
  it('returns an I18nextProvider', function () {
    renderComponent();
    expect(_reactI18next.I18nextProvider).toHaveBeenCalledTimes(1);
    var _mock$calls = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls[0];
    expect(_reactI18next.I18nextProvider).toHaveBeenCalledTimes(1);
    expect(args).toHaveLength(2);
    expect(args[0].children).toBeTruthy();
    expect(args[0].i18n.addResource).toBeTruthy();
    expect(args[0].i18n.language).toBe('en');
    expect(args[0].i18n.isInitialized).toBe(true);
    expect(_fs["default"].existsSync).toHaveBeenCalledTimes(3);
    expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(1);
  });
});