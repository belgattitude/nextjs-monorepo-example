import _typeof from "@babel/runtime/helpers/typeof";
import fs from 'fs';
import path from 'path';
import { createConfig } from './createConfig';
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
        fs.existsSync.mockReturnValue(true);
        fs.readdirSync.mockImplementation(function (locale) {
          return ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        fs.statSync.mockImplementation(function () {
          return {
            isDirectory: function isDirectory() {
              return false;
            }
          };
        });
      });
      it('throws when lng is not provided', function () {
        expect(createConfig).toThrow('config.lng was not passed into createConfig');
      });
      it('returns a valid config when only lng is provided', function () {
        var _config$react, _config$interpolation, _config$interpolation2;
        var config = createConfig({
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
        expect(fs.existsSync).toHaveBeenCalledTimes(3);
        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
      });
      it('gets namespaces from current language + fallback (as string) when ns is not provided', function () {
        var config = createConfig({
          fallbackLng: 'en',
          lng: 'en-US'
        });
        expect(config.ns).toEqual(['namespace-of-en-US', 'namespace-of-en']);
      });
      it('gets namespaces from current language + fallback (as array) when ns is not provided', function () {
        var config = createConfig({
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
        var config = createConfig({
          fallbackLng: fallbackLng,
          lng: 'en-US'
        });
        expect(config.ns).toEqual(['namespace-of-en-US', 'namespace-of-en', 'namespace-of-fr']);
      });
      it('deep merges backend', function () {
        var config = createConfig({
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
        expect(config.backend.loadPath).toEqual(path.join(process.cwd(), '/public/locales/{{lng}}/{{ns}}.json'));
      });
      it('deep merges detection', function () {
        var config = createConfig({
          detection: {
            hello: 'world'
          },
          lng: 'en'
        });
        expect(config.detection.hello).toBe('world');
      });
      describe('fallbackLng', function () {
        it('automatically sets if it user does not provide', function () {
          var config = createConfig({
            lng: 'en'
          });
          expect(config.fallbackLng).toBe('en');
        });
        it('does not overwrite user provided value', function () {
          var config = createConfig({
            fallbackLng: 'hello-world',
            lng: 'en'
          });
          expect(config.fallbackLng).toBe('hello-world');
        });
        it('does not overwrite user provided boolean', function () {
          var config = createConfig({
            fallbackLng: false,
            lng: 'en'
          });
          expect(config.fallbackLng).toBe(false);
        });
      });
    });
    describe('defaultNS validation', function () {
      it('when filesystem is missing defaultNS throws an error', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false);
        var config = createConfig.bind(null, {
          lng: 'en'
        });
        expect(config).toThrow('Default namespace not found at public/locales/en/common.json');
      });
      it('does not throw an error if fallback exists', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = createConfig({
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
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(fs.existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw error if fallbackLng has default key and it exists', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        createConfig({
          fallbackLng: {
            "default": ['en']
          },
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en', 'en-US']
          },
          lng: 'en-US'
        });
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(fs.existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw an error if fallback (as function) exists', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = createConfig({
          fallbackLng: function fallbackLng(code) {
            return code.split('-')[0];
          },
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en', 'en-US']
          },
          lng: 'en-US'
        });
        expect(_typeof(config.fallbackLng)).toBe('function');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(fs.existsSync).toHaveBeenCalledTimes(4);
      });
      it('does not throw an error if nonExplicitSupportedLngs is true', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false).mockReturnValueOnce(true);
        var config = createConfig({
          i18n: {
            defaultLocale: 'de',
            locales: ['de', 'en-US']
          },
          lng: 'en-US',
          nonExplicitSupportedLngs: true
        });
        expect(_typeof(config.nonExplicitSupportedLngs)).toBe('boolean');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en-US/common.json');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
        expect(fs.existsSync).toHaveBeenCalledTimes(5);
      });
      it('uses user provided prefix/suffix with localeStructure', function () {
        fs.existsSync.mockReset();
        fs.existsSync.mockReturnValueOnce(false);
        var config = createConfig.bind(null, {
          interpolation: {
            prefix: '^^',
            suffix: '$$'
          },
          lng: 'en',
          localeStructure: '^^lng$$/^^ns$$'
        });
        expect(config).toThrow('Default namespace not found at public/locales/en/common.json');
        expect(fs.existsSync).toHaveBeenCalledWith('public/locales/en/common.json');
      });
    });
    describe('hasCustomBackend', function () {
      it('returns a config without calling any fs methods', function () {
        fs.existsSync.mockReset();
        fs.readdirSync.mockReset();
        createConfig({
          lng: 'en',
          use: [{
            type: 'backend'
          }]
        });
        expect(fs.existsSync).toHaveBeenCalledTimes(0);
        expect(fs.readdirSync).toHaveBeenCalledTimes(0);
      });
    });
    describe('ci mode', function () {
      it('returns a config without calling any fs methods', function () {
        createConfig({
          lng: 'cimode'
        });
        expect(fs.existsSync).toHaveBeenCalledTimes(0);
        expect(fs.readdirSync).toHaveBeenCalledTimes(0);
      });
    });
    describe('with a function for localePath', function () {
      var localePathFn = function localePathFn(locale, namespace, missing) {
        return "".concat(missing, "/").concat(namespace, "/").concat(locale, ".json");
      };
      it('returns a config whose localePath works as expected', function () {
        fs.existsSync.mockReturnValueOnce(true);
        var config = createConfig({
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
        fs.existsSync.mockReturnValueOnce(false);
        var config = createConfig.bind(null, {
          lng: 'en',
          localePath: localePathFn
        });
        expect(config).toThrow('Default namespace not found at false/common/en.json');
      });
      it('throws an error if namespaces are not provided', function () {
        fs.existsSync.mockReturnValueOnce(true);
        expect(function () {
          return createConfig({
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
        fs.existsSync.mockReturnValue(true);
        fs.readdirSync.mockImplementation(function (locale) {
          return ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        fs.statSync.mockImplementation(function () {
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
        var config = createConfig({
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
        fs.existsSync.mockReset();
        fs.readdirSync.mockReset();
        fs.statSync.mockReset();
        fs.existsSync.mockReturnValue(true);
        var level = 0;
        fs.readdirSync.mockImplementation(function (locale) {
          return level === 0 ? ['sub-folder'] : ["namespace-of-".concat(locale.split('/').pop())];
        });
        // eslint-disable-next-line max-len
        fs.statSync.mockImplementation(function () {
          return {
            isDirectory: function isDirectory() {
              return ++level > 1 ? false : true;
            }
          };
        });
      });
      it('returns a valid config', function () {
        var _config$react2, _config$interpolation3, _config$interpolation4;
        var config = createConfig({
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
        expect(fs.existsSync).toHaveBeenCalledTimes(4);
        expect(fs.readdirSync).toHaveBeenCalledTimes(2);
        expect(fs.statSync).toHaveBeenCalledTimes(2);
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
      expect(createConfig).toThrow('config.lng was not passed into createConfig');
    });
    it('returns a valid config when only lng is provided', function () {
      var _config$react3, _config$interpolation5, _config$interpolation6;
      var config = createConfig({
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
      var config = createConfig({
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
      var config = createConfig({
        defaultNS: 'core',
        lng: 'en'
      });
      expect(config.ns).toEqual(['core']);
    });
    it('returns ns when provided as a string', function () {
      var config = createConfig({
        lng: 'en',
        ns: 'core'
      });
      expect(config.ns).toBe('core');
    });
    it('returns ns when provided as an array', function () {
      var config = createConfig({
        lng: 'en',
        ns: ['core', 'page']
      });
      expect(config.ns).toEqual(['core', 'page']);
    });
    describe('hasCustomBackend', function () {
      it('returns the correct configuration', function () {
        var config = createConfig({
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
        var config = createConfig({
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