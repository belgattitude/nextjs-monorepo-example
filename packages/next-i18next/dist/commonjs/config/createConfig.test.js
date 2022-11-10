"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.array.concat.js");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _createConfig = require("./createConfig");
jest.mock('fs', function () {
  return {
    existsSync: jest.fn(),
    readdirSync: jest.fn(),
    statSync: jest.fn()
  };
});
describe('createConfig', function () {
  /**
   * @jest-environment node
   */
  describe('server side', function () {
    beforeAll(function () {
      Object.assign(process, {
        browser: false
      });
      delete global.window;
    });
    describe('when filesystem is as expected', function () {
      beforeAll(function () {
        _fs["default"].existsSync.mockReturnValue(true);
        _fs["default"].readdirSync.mockImplementation(function (locale) {
          return ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        _fs["default"].statSync.mockImplementation(function () {
          return {
            isDirectory: function isDirectory() {
              return false;
            }
          };
        });
      });
      it('throws when lng is not provided', function () {
        expect(_createConfig.createConfig).toThrow('config.lng was not passed into createConfig');
      });
      it('returns a valid config when only lng is provided', function () {
        var _config$react, _config$interpolation, _config$interpolation2;
        var config = (0, _createConfig.createConfig)({
          lng: 'en'
        });
        expect(config.backend.addPath).toMatch('/public/locales/{{lng}}/{{ns}}.missing.json');
        expect(config.backend.loadPath).toMatch('/public/locales/{{lng}}/{{ns}}.json');
        expect(config.defaultLocale).toBe('en');
        expect(config.defaultNS).toBe('common');
        expect(config.errorStackTraceLimit).toBe(0);
        expect(config.lng).toBe('en');
        expect(config.load).toBe('currentOnly');
        expect(config.localeExtension).toBe('json');
        expect(config.localePath).toBe('./public/locales');
        expect(config.localeStructure).toBe('{{lng}}/{{ns}}');
        expect(config.locales).toEqual(['en']);
        expect(config.ns).toEqual(['namespace-of-en']);
        expect(config.preload).toEqual(['en']);
        expect(config.use).toEqual([]);
        expect((_config$react = config.react) === null || _config$react === void 0 ? void 0 : _config$react.useSuspense).toBe(false);
        expect((_config$interpolation = config.interpolation) === null || _config$interpolation === void 0 ? void 0 : _config$interpolation.escapeValue).toBe(false);
        expect((_config$interpolation2 = config.interpolation) === null || _config$interpolation2 === void 0 ? void 0 : _config$interpolation2.format).toBeUndefined();
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(3);
        expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(1);
      });
      it('gets namespaces from current language + fallback (as string) when ns is not provided', function () {
        var config = (0, _createConfig.createConfig)({
          fallbackLng: 'en',
          lng: 'en-US'
        });
        expect(config.ns).toEqual(['namespace-of-en-US', 'namespace-of-en']);
      });
      it('gets namespaces from current language + fallback (as array) when ns is not provided', function () {
        var config = (0, _createConfig.createConfig)({
          fallbackLng: ['en', 'fr'],
          lng: 'en-US'
        });
        expect(config.ns).toEqual(['namespace-of-en-US', 'namespace-of-en', 'namespace-of-fr']);
      });
      it('gets namespaces from current language + fallback (as object) when ns is not provided', function () {
        var fallbackLng = {
          "default": ['fr'],
          'en-US': ['en']
        };
        var config = (0, _createConfig.createConfig)({
          fallbackLng: fallbackLng,
          lng: 'en-US'
        });
        expect(config.ns).toEqual(['namespace-of-en-US', 'namespace-of-en', 'namespace-of-fr']);
      });
      it('deep merges backend', function () {
        var config = (0, _createConfig.createConfig)({
          backend: {
            hello: 'world'
          },
          i18n: {
            defaultLocale: 'en',
            locales: ['en']
          },
          lng: 'en'
        });
        expect(config.backend.hello).toBe('world');
        expect(config.backend.loadPath).toEqual(_path["default"].join(process.cwd(), '/public/locales/{{lng}}/{{ns}}.json'));
      });
      it('deep merges detection', function () {
        var config = (0, _createConfig.createConfig)({
          detection: {
            hello: 'world'
          },
          lng: 'en'
        });
        expect(config.detection.hello).toBe('world');
      });
      describe('fallbackLng', function () {
        it('automatically sets if it user does not provide', function () {
          var config = (0, _createConfig.createConfig)({
            lng: 'en'
          });
          expect(config.fallbackLng).toBe('en');
        });
        it('does not overwrite user provided value', function () {
          var config = (0, _createConfig.createConfig)({
            fallbackLng: 'hello-world',
            lng: 'en'
          });
          expect(config.fallbackLng).toBe('hello-world');
        });
        it('does not overwrite user provided boolean', function () {
          var config = (0, _createConfig.createConfig)({
            fallbackLng: false,
            lng: 'en'
          });
          expect(config.fallbackLng).toBe(false);
        });
      });
    });
    describe('defaultNS validation', function () {
      it('when filesystem is missing defaultNS throws an error', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false);
        var config = _createConfig.createConfig.bind(null, {
          lng: 'en'
        });
        expect(config).toThrow('Default namespace not found at public/locales/en/common.json');
      });
      it('does not throw an error if fallback exists', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = (0, _createConfig.createConfig)({
          fallbackLng: {
            'en-US': ['en']
          },
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en', 'en-US']
          },
          lng: 'en-US'
        });
        expect(config.fallbackLng).toStrictEqual({
          'en-US': ['en']
        });
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw error if fallbackLng has default key and it exists', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        (0, _createConfig.createConfig)({
          fallbackLng: {
            "default": ['en']
          },
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en', 'en-US']
          },
          lng: 'en-US'
        });
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw an error if fallback (as function) exists', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = (0, _createConfig.createConfig)({
          fallbackLng: function fallbackLng(code) {
            return code.split('-')[0];
          },
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en', 'en-US']
          },
          lng: 'en-US'
        });
        expect((0, _typeof2["default"])(config.fallbackLng)).toBe('function');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw an error if nonExplicitSupportedLngs is true', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = (0, _createConfig.createConfig)({
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en-US']
          },
          lng: 'en-US',
          nonExplicitSupportedLngs: true
        });
        expect((0, _typeof2["default"])(config.nonExplicitSupportedLngs)).toBe('boolean');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(5);
      });
      it('uses user provided prefix/suffix with localeStructure', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].existsSync.mockReturnValueOnce(false);
        var config = _createConfig.createConfig.bind(null, {
          interpolation: {
            prefix: '^^',
            suffix: '$$'
          },
          lng: 'en',
          localeStructure: '^^lng$$/^^ns$$'
        });
        expect(config).toThrow('Default namespace not found at public/locales/en/common.json');
        expect(_fs["default"].existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
      });
    });
    describe('hasCustomBackend', function () {
      it('returns a config without calling any fs methods', function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].readdirSync.mockReset();
        (0, _createConfig.createConfig)({
          lng: 'en',
          use: [{
            type: 'backend'
          }]
        });
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(0);
        expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(0);
      });
    });
    describe('ci mode', function () {
      it('returns a config without calling any fs methods', function () {
        (0, _createConfig.createConfig)({
          lng: 'cimode'
        });
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(0);
        expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(0);
      });
    });
    describe('with a function for localePath', function () {
      var localePathFn = function localePathFn(locale, namespace, missing) {
        return "".concat(missing, "/").concat(namespace, "/").concat(locale, ".json");
      };
      it('returns a config whose localePath works as expected', function () {
        _fs["default"].existsSync.mockReturnValueOnce(true);
        var config = (0, _createConfig.createConfig)({
          i18n: {
            defaultLocale: 'en',
            locales: ['en']
          },
          lng: 'en',
          localePath: localePathFn,
          ns: ['common']
        });
        expect(config.backend.loadPath('en', 'common')).toBe('false/common/en.json');
        expect(config.backend.addPath('en', 'common')).toBe('true/common/en.json');
      });
      it('when filesystem is missing defaultNS throws an error', function () {
        _fs["default"].existsSync.mockReturnValueOnce(false);
        var config = _createConfig.createConfig.bind(null, {
          lng: 'en',
          localePath: localePathFn
        });
        expect(config).toThrow('Default namespace not found at false/common/en.json');
      });
      it('throws an error if namespaces are not provided', function () {
        _fs["default"].existsSync.mockReturnValueOnce(true);
        expect(function () {
          return (0, _createConfig.createConfig)({
            i18n: {
              defaultLocale: 'en',
              locales: ['en']
            },
            lng: 'en',
            localePath: localePathFn
          });
        }).toThrow('Must provide all namespaces in ns option if using a function as localePath');
      });
    });
    describe('with default as locale', function () {
      beforeAll(function () {
        _fs["default"].existsSync.mockReturnValue(true);
        _fs["default"].readdirSync.mockImplementation(function (locale) {
          return ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        _fs["default"].statSync.mockImplementation(function () {
          return {
            isDirectory: function isDirectory() {
              return false;
            }
          };
        });
      });
      // eslint-disable-next-line max-len
      // https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
      it('should ignore the default value', function () {
        var config = (0, _createConfig.createConfig)({
          i18n: {
            defaultLocale: 'default',
            locales: ['default', 'en', 'de']
          },
          lng: 'de'
        });
        expect(config.fallbackLng).toBe('en');
        expect(config.preload).toEqual(['en', 'de']);
      });
    });
    describe('when filesystem contains nested namespace structure', function () {
      beforeAll(function () {
        _fs["default"].existsSync.mockReset();
        _fs["default"].readdirSync.mockReset();
        _fs["default"].statSync.mockReset();
        _fs["default"].existsSync.mockReturnValue(true);
        var level = 0;
        _fs["default"].readdirSync.mockImplementation(function (locale) {
          return level === 0 ? ['sub-folder'] : ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        _fs["default"].statSync.mockImplementation(function () {
          return {
            isDirectory: function isDirectory() {
              return ++level > 1 ? false : true;
            }
          };
        });
      });
      it('returns a valid config', function () {
        var _config$react2, _config$interpolation3, _config$interpolation4;
        var config = (0, _createConfig.createConfig)({
          lng: 'en'
        });
        expect(config.backend.addPath).toMatch('/public/locales/{{lng}}/{{ns}}.missing.json');
        expect(config.backend.loadPath).toMatch('/public/locales/{{lng}}/{{ns}}.json');
        expect(config.defaultLocale).toBe('en');
        expect(config.defaultNS).toBe('common');
        expect(config.errorStackTraceLimit).toBe(0);
        expect(config.lng).toBe('en');
        expect(config.load).toBe('currentOnly');
        expect(config.localeExtension).toBe('json');
        expect(config.localePath).toBe('./public/locales');
        expect(config.localeStructure).toBe('{{lng}}/{{ns}}');
        expect(config.locales).toEqual(['en']);
        expect(config.ns).toEqual(['sub-folder/namespace-of-sub-folder']);
        expect(config.preload).toEqual(['en']);
        expect(config.use).toEqual([]);
        expect((_config$react2 = config.react) === null || _config$react2 === void 0 ? void 0 : _config$react2.useSuspense).toBe(false);
        expect((_config$interpolation3 = config.interpolation) === null || _config$interpolation3 === void 0 ? void 0 : _config$interpolation3.escapeValue).toBe(false);
        expect((_config$interpolation4 = config.interpolation) === null || _config$interpolation4 === void 0 ? void 0 : _config$interpolation4.format).toBeUndefined();
        expect(_fs["default"].existsSync).toHaveBeenCalledTimes(4);
        expect(_fs["default"].readdirSync).toHaveBeenCalledTimes(2);
        expect(_fs["default"].statSync).toHaveBeenCalledTimes(2);
      });
    });
  });

  /**
   * @jest-environment jsdom
   */
  describe('client side', function () {
    beforeAll(function () {
      Object.assign(process, {
        browser: true
      });
      global.window = {};
    });
    it('throws when lng is not provided', function () {
      expect(_createConfig.createConfig).toThrow('config.lng was not passed into createConfig');
    });
    it('returns a valid config when only lng is provided', function () {
      var _config$react3, _config$interpolation5, _config$interpolation6;
      var config = (0, _createConfig.createConfig)({
        lng: 'en'
      });
      expect(config.backend.addPath).toMatch('/locales/{{lng}}/{{ns}}.missing.json');
      expect(config.backend.loadPath).toMatch('/locales/{{lng}}/{{ns}}.json');
      expect(config.defaultLocale).toBe('en');
      expect(config.defaultNS).toBe('common');
      expect(config.errorStackTraceLimit).toBe(0);
      expect(config.lng).toBe('en');
      expect(config.load).toBe('currentOnly');
      expect(config.localeExtension).toBe('json');
      expect(config.localePath).toBe('./public/locales');
      expect(config.localeStructure).toBe('{{lng}}/{{ns}}');
      expect(config.locales).toEqual(['en']);
      expect(config.ns).toEqual(['common']);
      expect(config.preload).toBeUndefined();
      expect(config.use).toEqual([]);
      expect((_config$react3 = config.react) === null || _config$react3 === void 0 ? void 0 : _config$react3.useSuspense).toBe(false);
      expect((_config$interpolation5 = config.interpolation) === null || _config$interpolation5 === void 0 ? void 0 : _config$interpolation5.escapeValue).toBe(false);
      expect((_config$interpolation6 = config.interpolation) === null || _config$interpolation6 === void 0 ? void 0 : _config$interpolation6.format).toBeUndefined();
    });
    it('deep merges backend', function () {
      var config = (0, _createConfig.createConfig)({
        backend: {
          hello: 'world'
        },
        i18n: {
          defaultLocale: 'en',
          locales: ['en']
        },
        lng: 'en'
      });
      expect(config.backend.hello).toBe('world');
      expect(config.backend.loadPath).toMatch('/locales/{{lng}}/{{ns}}.json');
    });
    it('returns ns as [defaultNS]', function () {
      var config = (0, _createConfig.createConfig)({
        defaultNS: 'core',
        lng: 'en'
      });
      expect(config.ns).toEqual(['core']);
    });
    it('returns ns when provided as a string', function () {
      var config = (0, _createConfig.createConfig)({
        lng: 'en',
        ns: 'core'
      });
      expect(config.ns).toBe('core');
    });
    it('returns ns when provided as an array', function () {
      var config = (0, _createConfig.createConfig)({
        lng: 'en',
        ns: ['core', 'page']
      });
      expect(config.ns).toEqual(['core', 'page']);
    });
    describe('hasCustomBackend', function () {
      it('returns the correct configuration', function () {
        var config = (0, _createConfig.createConfig)({
          backend: {
            hello: 'world'
          },
          i18n: {
            defaultLocale: 'en',
            locales: ['en']
          },
          lng: 'en',
          use: [{
            type: 'backend'
          }]
        });
        expect(config.backend).toEqual({
          hello: 'world'
        });
      });
    });
    describe('with a function for localePath', function () {
      var localePathFn = function localePathFn(locale, namespace, missing) {
        return "".concat(missing, "/").concat(namespace, "/").concat(locale, ".json");
      };
      it('returns a config whose localePath works as expected', function () {
        var config = (0, _createConfig.createConfig)({
          i18n: {
            defaultLocale: 'en',
            locales: ['en']
          },
          lng: 'en',
          localePath: localePathFn,
          ns: ['common']
        });
        expect(config.backend.loadPath('en', 'common')).toBe('false/common/en.json');
        expect(config.backend.addPath('en', 'common')).toBe('true/common/en.json');
      });
    });
  });
});