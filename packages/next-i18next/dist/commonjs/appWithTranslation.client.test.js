"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _fs = _interopRequireDefault(require("fs"));
var _react2 = require("@testing-library/react");
var _reactI18next = require("react-i18next");
var _createClient = _interopRequireDefault(require("./createClient"));
var _appWithTranslation = require("./appWithTranslation");
var __jsx = _react["default"].createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
jest.mock('./createClient', function () {
  return jest.fn();
});
var DummyApp = (0, _appWithTranslation.appWithTranslation)(function () {
  return __jsx("div", null, "Hello world");
}, {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  }
});
var createProps = function createProps() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  var router = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    pageProps: {
      _nextI18Next: {
        initialLocale: locale,
        userConfig: {
          i18n: {
            defaultLocale: 'en',
            locales: ['en', 'de']
          }
        }
      }
    },
    router: _objectSpread({
      locale: locale,
      route: '/'
    }, router)
  };
};
var defaultRenderProps = createProps();
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRenderProps;
  return (0, _react2.render)(__jsx(DummyApp, props));
};
describe('appWithTranslation', function () {
  beforeEach(function () {
    _fs["default"].existsSync.mockReturnValue(true);
    _fs["default"].readdirSync.mockReturnValue([]);
    _reactI18next.I18nextProvider.mockImplementation(DummyI18nextProvider);
    var actualCreateClient = jest.requireActual('./createClient');
    _createClient["default"].mockImplementation(actualCreateClient);
  });
  afterEach(jest.resetAllMocks);
  it('returns children', function () {
    renderComponent();
    expect(_react2.screen.getByText('Hello world')).toBeTruthy();
  });
  it('respects configOverride', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    }, {
      configOverride: 'custom-value',
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
      }
    });
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en'
        }
      }
    });
    (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    var _mock$calls = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls[0];
    expect(_react2.screen.getByText('Hello world')).toBeTruthy();
    expect(args[0].i18n.options.configOverride).toBe('custom-value');
  });
  it('allows passing configOverride.resources', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    }, {
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
      },
      resources: {
        xyz: {
          custom: 'resources'
        }
      }
    });
    (0, _react2.render)(__jsx(DummyAppConfigOverride, createProps()));
    var _mock$calls2 = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls2[0];
    expect(args[0].i18n.options.resources).toMatchObject({
      xyz: {
        custom: 'resources'
      }
    });
  });
  it('throws an error if userConfig and configOverride are both missing', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    });
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: null
        }
      }
    });
    expect(function () {
      return (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    }).toThrow('appWithTranslation was called without a next-i18next config');
  });
  it('throws an error if userConfig and configOverride are both missing an i18n property', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    }, {});
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: {}
        }
      }
    });
    expect(function () {
      return (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    }).toThrow('appWithTranslation was called without config.i18n');
  });
  it('throws an error if userConfig and configOverride are both missing a defaultLocale property', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    }, {
      i18n: {}
    });
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: {
            i18n: {}
          }
        }
      }
    });
    expect(function () {
      return (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    }).toThrow('config.i18n does not include a defaultLocale property');
  });
  it('should use the initialLocale property if the router locale is undefined', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    });
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: {
            i18n: {
              defaultLocale: 'fr'
            }
          }
        }
      }
    });
    customProps.router = _objectSpread(_objectSpread({}, customProps.router), {}, {
      locale: undefined
    });
    (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    var _mock$calls3 = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls3[0];
    expect(args[0].i18n.language).toBe('en');
  });
  it('should use the userConfig defaltLocale property if the router locale is undefined and initialLocale is undefined', function () {
    var DummyAppConfigOverride = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "Hello world");
    });
    var customProps = _objectSpread(_objectSpread({}, createProps()), {}, {
      pageProps: {
        _nextI18Next: {
          initialLocale: undefined,
          userConfig: {
            i18n: {
              defaultLocale: 'fr'
            }
          }
        }
      }
    });
    customProps.router = _objectSpread(_objectSpread({}, customProps.router), {}, {
      locale: undefined
    });
    (0, _react2.render)(__jsx(DummyAppConfigOverride, customProps));
    var _mock$calls4 = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls4[0];
    expect(args[0].i18n.language).toBe('fr');
  });
  it('returns an I18nextProvider', function () {
    renderComponent();
    expect(_reactI18next.I18nextProvider).toHaveBeenCalledTimes(1);
    var _mock$calls5 = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls5[0];
    expect(_reactI18next.I18nextProvider).toHaveBeenCalledTimes(1);
    expect(args).toHaveLength(2);
    expect(args[0].children).toBeTruthy();
    expect(args[0].i18n.addResource).toBeTruthy();
    expect(args[0].i18n.language).toBe('en');
    expect(args[0].i18n.isInitialized).toBe(true);
    expect(_fs["default"].existsSync).toHaveBeenCalledTimes(0);
    expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(0);
  });
  it('should use locale from router', function () {
    renderComponent(createProps('de'));
    var _mock$calls6 = (0, _slicedToArray2["default"])(_reactI18next.I18nextProvider.mock.calls, 1),
      args = _mock$calls6[0];
    expect(args[0].i18n.language).toBe('de');
  });
  it('does not re-call createClient on re-renders unless locale or props have changed', function () {
    var _renderComponent = renderComponent(),
      rerender = _renderComponent.rerender;
    expect(_createClient["default"]).toHaveBeenCalledTimes(1);
    rerender(__jsx(DummyApp, defaultRenderProps));
    expect(_createClient["default"]).toHaveBeenCalledTimes(1);
    var newProps = createProps();
    rerender(__jsx(DummyApp, newProps));
    expect(_createClient["default"]).toHaveBeenCalledTimes(2);
    newProps.pageProps._nextI18Next.initialLocale = 'de';
    newProps.router.locale = 'de';
    rerender(__jsx(DummyApp, newProps));
    expect(_createClient["default"]).toHaveBeenCalledTimes(3);
  });
  it('assures locale key is set to the right value', function () {
    var lng = 'de';
    var props = createProps('de');
    var DummyAppWithVar = (0, _appWithTranslation.appWithTranslation)(function () {
      return __jsx("div", null, "language is: ", lng);
    }, {
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
      }
    });
    var _render = (0, _react2.render)(__jsx(DummyAppWithVar, props)),
      rerender = _render.rerender;
    props.router.locale = 'en';
    props.pageProps._nextI18Next.initialLocale = 'en';
    lng = 'en';
    rerender(__jsx(DummyAppWithVar, props));
    expect(_react2.screen.getByText("language is: ".concat(lng))).toBeTruthy();
    props.router.locale = 'de';
    props.pageProps._nextI18Next.initialLocale = 'de';
    lng = 'de';
    rerender(__jsx(DummyAppWithVar, createProps('de')));
    expect(_react2.screen.getByText("language is: ".concat(lng))).toBeTruthy();
  });
});