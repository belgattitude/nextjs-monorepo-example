import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
var __jsx = React.createElement;
import _regeneratorRuntime from "@babel/runtime/regenerator";
/**
 * @jest-environment node
 */

import React from 'react';
import fs from 'fs';
import { serverSideTranslations } from './serverSideTranslations';
import { globalI18n } from './appWithTranslation';
import { renderToString } from 'react-dom/server';
import { appWithTranslation } from './appWithTranslation';
jest.mock('fs', function () {
  return {
    existsSync: jest.fn(),
    readdirSync: jest.fn(),
    statSync: jest.fn()
  };
});
var DummyApp = appWithTranslation(function () {
  return __jsx("div", null, "Hello world");
});
var props = {
  pageProps: {
    _nextI18Next: {
      initialLocale: 'en-US',
      userConfig: {
        i18n: {
          defaultLocale: 'en',
          locales: ['en', 'fr']
        }
      }
    }
  },
  router: {
    locale: 'en'
  }
};
var renderDummyComponent = function renderDummyComponent() {
  return renderToString(__jsx(DummyApp, props));
};
describe('serverSideTranslations', function () {
  beforeAll(function () {
    Object.assign(process, {
      browser: false
    });
    delete global.window;
  });
  beforeEach(function () {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    fs.statSync.mockImplementation(function () {
      return {
        isDirectory: function isDirectory() {
          return false;
        }
      };
    });
  });
  afterEach(jest.resetAllMocks);
  it('throws if initialLocale is not passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return expect(serverSideTranslations(undefined)).rejects.toThrow('Initial locale argument was not passed into serverSideTranslations');
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('When namespacesRequired is not provided', function () {
    beforeEach(function () {
      fs.readdirSync.mockImplementation(function (path) {
        return ['common', "namespace-of-".concat(path.split('/').pop())];
      });
    });
    it('returns all namespaces', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var _props$_nextI18Next, _props$_nextI18Next2;
      var props;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return serverSideTranslations('en-US', undefined, {
                i18n: {
                  defaultLocale: 'en-US',
                  locales: ['en-US', 'fr-CA']
                }
              });
            case 2:
              props = _context2.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(4);
              expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.readdirSync).toHaveBeenCalledTimes(2);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect((_props$_nextI18Next = props._nextI18Next) === null || _props$_nextI18Next === void 0 ? void 0 : _props$_nextI18Next.initialI18nStore).toEqual({
                'en-US': {
                  common: {},
                  'namespace-of-en-US': {}
                }
              });
              expect((_props$_nextI18Next2 = props._nextI18Next) === null || _props$_nextI18Next2 === void 0 ? void 0 : _props$_nextI18Next2.ns).toEqual(['common', 'namespace-of-en-US']);
            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('returns all namespaces with fallbackLng (as string)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var _props$_nextI18Next3, _props$_nextI18Next4;
      var props;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return serverSideTranslations('en-US', undefined, {
                i18n: {
                  defaultLocale: 'fr-BE',
                  fallbackLng: 'fr',
                  locales: ['nl-BE', 'fr-BE', 'en-US']
                }
              });
            case 2:
              props = _context3.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(6);
              expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
              expect(fs.readdirSync).toHaveBeenCalledTimes(4);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
              expect((_props$_nextI18Next3 = props._nextI18Next) === null || _props$_nextI18Next3 === void 0 ? void 0 : _props$_nextI18Next3.initialI18nStore).toEqual({
                'en-US': {
                  common: {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                },
                fr: {
                  common: {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                }
              });
              expect((_props$_nextI18Next4 = props._nextI18Next) === null || _props$_nextI18Next4 === void 0 ? void 0 : _props$_nextI18Next4.ns).toStrictEqual(['common', 'namespace-of-en-US', 'namespace-of-fr']);
            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('returns all namespaces with fallbackLng (as array)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      var _props$_nextI18Next5, _props$_nextI18Next6;
      var props;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return serverSideTranslations('en-US', undefined, {
                i18n: {
                  defaultLocale: 'en-US',
                  fallbackLng: ['en', 'fr'],
                  locales: ['en-US', 'fr-CA']
                }
              });
            case 2:
              props = _context4.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(8);
              expect(fs.readdirSync).toHaveBeenCalledTimes(6);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
              expect((_props$_nextI18Next5 = props._nextI18Next) === null || _props$_nextI18Next5 === void 0 ? void 0 : _props$_nextI18Next5.initialI18nStore).toEqual({
                en: {
                  common: {},
                  'namespace-of-en': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                },
                'en-US': {
                  common: {},
                  'namespace-of-en': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                },
                fr: {
                  common: {},
                  'namespace-of-en': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                }
              });
              expect((_props$_nextI18Next6 = props._nextI18Next) === null || _props$_nextI18Next6 === void 0 ? void 0 : _props$_nextI18Next6.ns).toEqual(['common', 'namespace-of-en-US', 'namespace-of-en', 'namespace-of-fr']);
            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    it('returns all namespaces with fallbackLng (as object)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
      var _props$_nextI18Next7, _props$_nextI18Next8;
      var props;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return serverSideTranslations('en-US', undefined, {
                i18n: {
                  defaultLocale: 'nl-BE',
                  fallbackLng: {
                    "default": ['fr'],
                    'nl-BE': ['en']
                  },
                  locales: ['nl-BE', 'fr-BE', 'en-US']
                }
              });
            case 2:
              props = _context5.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(6);
              expect(fs.readdirSync).toHaveBeenCalledTimes(4);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
              expect((_props$_nextI18Next7 = props._nextI18Next) === null || _props$_nextI18Next7 === void 0 ? void 0 : _props$_nextI18Next7.initialI18nStore).toEqual({
                'en-US': {
                  common: {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                },
                fr: {
                  common: {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr': {}
                }
              });
              expect((_props$_nextI18Next8 = props._nextI18Next) === null || _props$_nextI18Next8 === void 0 ? void 0 : _props$_nextI18Next8.ns).toEqual(['common', 'namespace-of-en-US', 'namespace-of-fr']);
            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    it('loads extra locales when extraLocales is provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
      var _props$_nextI18Next9, _props$_nextI18Next10;
      var props;
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return serverSideTranslations('de-CH', undefined, {
                i18n: {
                  defaultLocale: 'en-US',
                  locales: ['en-US', 'fr-BE', 'nl-BE', 'de-CH']
                }
              }, ['en-US', 'fr-BE', 'fr-BE']);
            case 2:
              props = _context6.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(7);
              expect(fs.readdirSync).toHaveBeenCalledTimes(5);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/de-CH'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr-BE'));
              expect((_props$_nextI18Next9 = props._nextI18Next) === null || _props$_nextI18Next9 === void 0 ? void 0 : _props$_nextI18Next9.initialI18nStore).toEqual({
                'de-CH': {
                  common: {},
                  'namespace-of-de-CH': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr-BE': {}
                },
                'en-US': {
                  common: {},
                  'namespace-of-de-CH': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr-BE': {}
                },
                'fr-BE': {
                  common: {},
                  'namespace-of-de-CH': {},
                  'namespace-of-en-US': {},
                  'namespace-of-fr-BE': {}
                }
              });
              expect((_props$_nextI18Next10 = props._nextI18Next) === null || _props$_nextI18Next10 === void 0 ? void 0 : _props$_nextI18Next10.ns).toEqual(['common', 'namespace-of-de-CH', 'namespace-of-en-US', 'namespace-of-fr-BE']);
            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    it('does not load extra locales when extraLocales is false', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
      var _props$_nextI18Next11, _props$_nextI18Next12;
      var props;
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return serverSideTranslations('de-CH', undefined, {
                i18n: {
                  defaultLocale: 'en-US',
                  locales: ['en-US', 'fr-BE', 'nl-BE', 'de-CH']
                }
              }, false);
            case 2:
              props = _context7.sent;
              expect(fs.existsSync).toHaveBeenCalledTimes(6);
              expect(fs.readdirSync).toHaveBeenCalledTimes(4);
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/de'));
              expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en'));
              expect((_props$_nextI18Next11 = props._nextI18Next) === null || _props$_nextI18Next11 === void 0 ? void 0 : _props$_nextI18Next11.initialI18nStore).toEqual({
                'de-CH': {
                  common: {},
                  'namespace-of-de-CH': {},
                  'namespace-of-en-US': {}
                },
                'en-US': {
                  common: {},
                  'namespace-of-de-CH': {},
                  'namespace-of-en-US': {}
                }
              });
              expect((_props$_nextI18Next12 = props._nextI18Next) === null || _props$_nextI18Next12 === void 0 ? void 0 : _props$_nextI18Next12.ns).toEqual(['common', 'namespace-of-de-CH', 'namespace-of-en-US']);
            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
  });
  it('does load fallback locales with fallbackLng (as array)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
    var _props$_nextI18Next13, _props$_nextI18Next14;
    var props;
    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return serverSideTranslations('en-US', ['common'], {
              fallbackLng: ['de'],
              i18n: {
                defaultLocale: 'de',
                locales: ['de', 'en-US', 'de-AT']
              }
            }, false);
          case 2:
            props = _context8.sent;
            expect((_props$_nextI18Next13 = props._nextI18Next) === null || _props$_nextI18Next13 === void 0 ? void 0 : _props$_nextI18Next13.initialI18nStore).toEqual({
              de: {
                common: {}
              },
              'en-US': {
                common: {}
              }
            });
            expect((_props$_nextI18Next14 = props._nextI18Next) === null || _props$_nextI18Next14 === void 0 ? void 0 : _props$_nextI18Next14.ns).toEqual(['common']);
          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('does load fallback locales with fallbackLng (as object)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
    var _props$_nextI18Next15, _props$_nextI18Next16;
    var props;
    return _regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return serverSideTranslations('en-US', ['common'], {
              fallbackLng: {
                'de-AT': ['de'],
                "default": ['en']
              },
              i18n: {
                defaultLocale: 'de',
                locales: ['de', 'en-US', 'de-AT']
              }
            }, false);
          case 2:
            props = _context9.sent;
            expect((_props$_nextI18Next15 = props._nextI18Next) === null || _props$_nextI18Next15 === void 0 ? void 0 : _props$_nextI18Next15.initialI18nStore).toEqual({
              en: {
                common: {}
              },
              'en-US': {
                common: {}
              }
            });
            expect((_props$_nextI18Next16 = props._nextI18Next) === null || _props$_nextI18Next16 === void 0 ? void 0 : _props$_nextI18Next16.ns).toEqual(['common']);
          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('does load fallback locales with fallbackLng (as function)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
    var _props$_nextI18Next17, _props$_nextI18Next18;
    var props;
    return _regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return serverSideTranslations('en-US', ['common'], {
              fallbackLng: function fallbackLng(code) {
                return code.split('-')[0];
              },
              i18n: {
                defaultLocale: 'de',
                locales: ['de', 'en-US']
              }
            }, false);
          case 2:
            props = _context10.sent;
            expect((_props$_nextI18Next17 = props._nextI18Next) === null || _props$_nextI18Next17 === void 0 ? void 0 : _props$_nextI18Next17.initialI18nStore).toEqual({
              en: {
                common: {}
              },
              'en-US': {
                common: {}
              }
            });
            expect((_props$_nextI18Next18 = props._nextI18Next) === null || _props$_nextI18Next18 === void 0 ? void 0 : _props$_nextI18Next18.ns).toEqual(['common']);
          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  describe('When nonExplicitSupportedLngs is true', function () {
    it('does load fallback locales', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
      var _props$_nextI18Next19;
      var props;
      return _regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return serverSideTranslations('en-US', ['common'], {
                i18n: {
                  defaultLocale: 'de',
                  locales: ['de', 'en-US']
                },
                nonExplicitSupportedLngs: true
              }, false);
            case 2:
              props = _context11.sent;
              expect((_props$_nextI18Next19 = props._nextI18Next) === null || _props$_nextI18Next19 === void 0 ? void 0 : _props$_nextI18Next19.initialI18nStore).toEqual({
                de: {
                  common: {}
                },
                en: {
                  common: {}
                },
                'en-US': {
                  common: {}
                }
              });
            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
    it('does load fallback locales with fallbackLng (as array)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12() {
      var _props$_nextI18Next20;
      var props;
      return _regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return serverSideTranslations('en-US', ['common'], {
                fallbackLng: ['fr'],
                i18n: {
                  defaultLocale: 'de',
                  locales: ['de', 'en-US', 'fr']
                },
                nonExplicitSupportedLngs: true
              }, false);
            case 2:
              props = _context12.sent;
              expect((_props$_nextI18Next20 = props._nextI18Next) === null || _props$_nextI18Next20 === void 0 ? void 0 : _props$_nextI18Next20.initialI18nStore).toEqual({
                en: {
                  common: {}
                },
                'en-US': {
                  common: {}
                },
                fr: {
                  common: {}
                }
              });
            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    })));
    it('does load fallback locales with fallbackLng (as object)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
      var _props$_nextI18Next21;
      var props;
      return _regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return serverSideTranslations('en-US', ['common'], {
                fallbackLng: {
                  "default": ['fr'],
                  'en-US': ['de']
                },
                i18n: {
                  defaultLocale: 'de',
                  locales: ['de', 'en-US', 'de-DE']
                },
                nonExplicitSupportedLngs: true
              }, false);
            case 2:
              props = _context13.sent;
              expect((_props$_nextI18Next21 = props._nextI18Next) === null || _props$_nextI18Next21 === void 0 ? void 0 : _props$_nextI18Next21.initialI18nStore).toEqual({
                de: {
                  common: {}
                },
                en: {
                  common: {}
                },
                'en-US': {
                  common: {}
                },
                fr: {
                  common: {}
                }
              });
            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
    it('does thrown an error with fallbackLng (as function)', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14() {
      var config;
      return _regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              config = {
                fallbackLng: function fallbackLng(code) {
                  return code === 'de-AT' ? 'de' : 'en';
                },
                i18n: {
                  defaultLocale: 'de',
                  locales: ['de', 'en-US', 'de-DE']
                },
                nonExplicitSupportedLngs: true
              };
              _context14.next = 3;
              return expect(serverSideTranslations('de-DE', ['common'], config)).rejects.toThrow('If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng');
            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    })));
  });
  it('returns props', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15() {
    var props;
    return _regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return serverSideTranslations('en-US', [], {
              i18n: {
                defaultLocale: 'en-US',
                locales: ['en-US', 'fr-CA']
              }
            });
          case 2:
            props = _context15.sent;
            expect(props).toEqual({
              _nextI18Next: {
                initialI18nStore: {
                  'en-US': {}
                },
                initialLocale: 'en-US',
                ns: [],
                userConfig: {
                  i18n: {
                    defaultLocale: 'en-US',
                    locales: ['en-US', 'fr-CA']
                  }
                }
              }
            });
          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  })));
  it('calls reloadResources when reloadOnPrerender option is true', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16() {
    return _regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            renderDummyComponent();
            if (globalI18n) {
              globalI18n.reloadResources = jest.fn();
            }
            _context16.next = 4;
            return serverSideTranslations('en-US', [], {
              i18n: {
                defaultLocale: 'en-US',
                locales: ['en-US', 'fr-CA']
              },
              reloadOnPrerender: true
            });
          case 4:
            expect(globalI18n === null || globalI18n === void 0 ? void 0 : globalI18n.reloadResources).toHaveBeenCalledTimes(1);
          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  })));
  it('does not call reloadResources when reloadOnPrerender option is false', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee17() {
    return _regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            renderDummyComponent();
            if (globalI18n) {
              globalI18n.reloadResources = jest.fn();
            }
            _context17.next = 4;
            return serverSideTranslations('en-US', [], {
              i18n: {
                defaultLocale: 'en-US',
                locales: ['en-US', 'fr-CA']
              },
              reloadOnPrerender: false
            });
          case 4:
            expect(globalI18n === null || globalI18n === void 0 ? void 0 : globalI18n.reloadResources).toHaveBeenCalledTimes(0);
          case 5:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  })));
  it('throws if a function is used for localePath and namespaces are not provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee18() {
    var localePathFn, config;
    return _regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            localePathFn = function localePathFn(locale, namespace, missing) {
              return "".concat(missing, "/").concat(namespace, "/").concat(locale, ".json");
            };
            config = {
              i18n: {
                defaultLocale: 'en',
                locales: ['en']
              },
              localePath: localePathFn,
              ns: ['common']
            };
            _context18.next = 4;
            return expect(serverSideTranslations('en-US', undefined, config)).rejects.toMatchObject({
              message: 'Must provide namespacesRequired to serverSideTranslations when using a function as localePath'
            });
          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  })));
});