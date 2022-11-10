/**
 * @jest-environment node
 */

import React from 'react';
import fs from 'fs';
import { serverSideTranslations } from './serverSideTranslations';
import { globalI18n } from './appWithTranslation';
import { renderToString } from 'react-dom/server';
import { appWithTranslation } from './appWithTranslation';
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readdirSync: jest.fn(),
  statSync: jest.fn()
}));
const DummyApp = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"));
const props = {
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
const renderDummyComponent = () => renderToString( /*#__PURE__*/React.createElement(DummyApp, props));
describe('serverSideTranslations', () => {
  beforeAll(() => {
    Object.assign(process, {
      browser: false
    });
    delete global.window;
  });
  beforeEach(() => {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    fs.statSync.mockImplementation(() => ({
      isDirectory: () => false
    }));
  });
  afterEach(jest.resetAllMocks);
  it('throws if initialLocale is not passed', async () => {
    await expect(serverSideTranslations(undefined)).rejects.toThrow('Initial locale argument was not passed into serverSideTranslations');
  });
  describe('When namespacesRequired is not provided', () => {
    beforeEach(() => {
      fs.readdirSync.mockImplementation(path => ['common', `namespace-of-${path.split('/').pop()}`]);
    });
    it('returns all namespaces', async () => {
      const props = await serverSideTranslations('en-US', undefined, {
        i18n: {
          defaultLocale: 'en-US',
          locales: ['en-US', 'fr-CA']
        }
      });
      expect(fs.existsSync).toHaveBeenCalledTimes(4);
      expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.readdirSync).toHaveBeenCalledTimes(2);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
        'en-US': {
          common: {},
          'namespace-of-en-US': {}
        }
      });
      expect(props._nextI18Next?.ns).toEqual(['common', 'namespace-of-en-US']);
    });
    it('returns all namespaces with fallbackLng (as string)', async () => {
      const props = await serverSideTranslations('en-US', undefined, {
        i18n: {
          defaultLocale: 'fr-BE',
          fallbackLng: 'fr',
          locales: ['nl-BE', 'fr-BE', 'en-US']
        }
      });
      expect(fs.existsSync).toHaveBeenCalledTimes(6);
      expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.existsSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
      expect(fs.readdirSync).toHaveBeenCalledTimes(4);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
      expect(props._nextI18Next?.ns).toStrictEqual(['common', 'namespace-of-en-US', 'namespace-of-fr']);
    });
    it('returns all namespaces with fallbackLng (as array)', async () => {
      const props = await serverSideTranslations('en-US', undefined, {
        i18n: {
          defaultLocale: 'en-US',
          fallbackLng: ['en', 'fr'],
          locales: ['en-US', 'fr-CA']
        }
      });
      expect(fs.existsSync).toHaveBeenCalledTimes(8);
      expect(fs.readdirSync).toHaveBeenCalledTimes(6);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
      expect(props._nextI18Next?.ns).toEqual(['common', 'namespace-of-en-US', 'namespace-of-en', 'namespace-of-fr']);
    });
    it('returns all namespaces with fallbackLng (as object)', async () => {
      const props = await serverSideTranslations('en-US', undefined, {
        i18n: {
          defaultLocale: 'nl-BE',
          fallbackLng: {
            default: ['fr'],
            'nl-BE': ['en']
          },
          locales: ['nl-BE', 'fr-BE', 'en-US']
        }
      });
      expect(fs.existsSync).toHaveBeenCalledTimes(6);
      expect(fs.readdirSync).toHaveBeenCalledTimes(4);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
      expect(props._nextI18Next?.ns).toEqual(['common', 'namespace-of-en-US', 'namespace-of-fr']);
    });
    it('loads extra locales when extraLocales is provided', async () => {
      const props = await serverSideTranslations('de-CH', undefined, {
        i18n: {
          defaultLocale: 'en-US',
          locales: ['en-US', 'fr-BE', 'nl-BE', 'de-CH']
        }
      }, ['en-US', 'fr-BE', 'fr-BE']);
      expect(fs.existsSync).toHaveBeenCalledTimes(7);
      expect(fs.readdirSync).toHaveBeenCalledTimes(5);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/de-CH'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en-US'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/fr-BE'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
      expect(props._nextI18Next?.ns).toEqual(['common', 'namespace-of-de-CH', 'namespace-of-en-US', 'namespace-of-fr-BE']);
    });
    it('does not load extra locales when extraLocales is false', async () => {
      const props = await serverSideTranslations('de-CH', undefined, {
        i18n: {
          defaultLocale: 'en-US',
          locales: ['en-US', 'fr-BE', 'nl-BE', 'de-CH']
        }
      }, false);
      expect(fs.existsSync).toHaveBeenCalledTimes(6);
      expect(fs.readdirSync).toHaveBeenCalledTimes(4);
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/de'));
      expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringMatching('/public/locales/en'));
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
      expect(props._nextI18Next?.ns).toEqual(['common', 'namespace-of-de-CH', 'namespace-of-en-US']);
    });
  });
  it('does load fallback locales with fallbackLng (as array)', async () => {
    const props = await serverSideTranslations('en-US', ['common'], {
      fallbackLng: ['de'],
      i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en-US', 'de-AT']
      }
    }, false);
    expect(props._nextI18Next?.initialI18nStore).toEqual({
      de: {
        common: {}
      },
      'en-US': {
        common: {}
      }
    });
    expect(props._nextI18Next?.ns).toEqual(['common']);
  });
  it('does load fallback locales with fallbackLng (as object)', async () => {
    const props = await serverSideTranslations('en-US', ['common'], {
      fallbackLng: {
        'de-AT': ['de'],
        default: ['en']
      },
      i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en-US', 'de-AT']
      }
    }, false);
    expect(props._nextI18Next?.initialI18nStore).toEqual({
      en: {
        common: {}
      },
      'en-US': {
        common: {}
      }
    });
    expect(props._nextI18Next?.ns).toEqual(['common']);
  });
  it('does load fallback locales with fallbackLng (as function)', async () => {
    const props = await serverSideTranslations('en-US', ['common'], {
      fallbackLng: code => code.split('-')[0],
      i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en-US']
      }
    }, false);
    expect(props._nextI18Next?.initialI18nStore).toEqual({
      en: {
        common: {}
      },
      'en-US': {
        common: {}
      }
    });
    expect(props._nextI18Next?.ns).toEqual(['common']);
  });
  describe('When nonExplicitSupportedLngs is true', () => {
    it('does load fallback locales', async () => {
      const props = await serverSideTranslations('en-US', ['common'], {
        i18n: {
          defaultLocale: 'de',
          locales: ['de', 'en-US']
        },
        nonExplicitSupportedLngs: true
      }, false);
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
    });
    it('does load fallback locales with fallbackLng (as array)', async () => {
      const props = await serverSideTranslations('en-US', ['common'], {
        fallbackLng: ['fr'],
        i18n: {
          defaultLocale: 'de',
          locales: ['de', 'en-US', 'fr']
        },
        nonExplicitSupportedLngs: true
      }, false);
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
    });
    it('does load fallback locales with fallbackLng (as object)', async () => {
      const props = await serverSideTranslations('en-US', ['common'], {
        fallbackLng: {
          default: ['fr'],
          'en-US': ['de']
        },
        i18n: {
          defaultLocale: 'de',
          locales: ['de', 'en-US', 'de-DE']
        },
        nonExplicitSupportedLngs: true
      }, false);
      expect(props._nextI18Next?.initialI18nStore).toEqual({
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
    });
    it('does thrown an error with fallbackLng (as function)', async () => {
      const config = {
        fallbackLng: code => code === 'de-AT' ? 'de' : 'en',
        i18n: {
          defaultLocale: 'de',
          locales: ['de', 'en-US', 'de-DE']
        },
        nonExplicitSupportedLngs: true
      };
      await expect(serverSideTranslations('de-DE', ['common'], config)).rejects.toThrow('If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng');
    });
  });
  it('returns props', async () => {
    const props = await serverSideTranslations('en-US', [], {
      i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US', 'fr-CA']
      }
    });
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
  });
  it('calls reloadResources when reloadOnPrerender option is true', async () => {
    renderDummyComponent();
    if (globalI18n) {
      globalI18n.reloadResources = jest.fn();
    }
    await serverSideTranslations('en-US', [], {
      i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US', 'fr-CA']
      },
      reloadOnPrerender: true
    });
    expect(globalI18n?.reloadResources).toHaveBeenCalledTimes(1);
  });
  it('does not call reloadResources when reloadOnPrerender option is false', async () => {
    renderDummyComponent();
    if (globalI18n) {
      globalI18n.reloadResources = jest.fn();
    }
    await serverSideTranslations('en-US', [], {
      i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US', 'fr-CA']
      },
      reloadOnPrerender: false
    });
    expect(globalI18n?.reloadResources).toHaveBeenCalledTimes(0);
  });
  it('throws if a function is used for localePath and namespaces are not provided', async () => {
    const localePathFn = (locale, namespace, missing) => `${missing}/${namespace}/${locale}.json`;
    const config = {
      i18n: {
        defaultLocale: 'en',
        locales: ['en']
      },
      localePath: localePathFn,
      ns: ['common']
    };
    await expect(serverSideTranslations('en-US', undefined, config)).rejects.toMatchObject({
      message: 'Must provide namespacesRequired to serverSideTranslations when using a function as localePath'
    });
  });
});