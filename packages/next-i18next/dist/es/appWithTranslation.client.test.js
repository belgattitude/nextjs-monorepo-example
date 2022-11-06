import React from 'react';
import fs from 'fs';
import { screen, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import createClient from './createClient';
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
jest.mock('./createClient', () => jest.fn());
const DummyApp = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"), {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  }
});
const createProps = (locale = 'en', router = {}) => ({
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
  router: {
    locale: locale,
    route: '/',
    ...router
  }
});
const defaultRenderProps = createProps();
const renderComponent = (props = defaultRenderProps) => render( /*#__PURE__*/React.createElement(DummyApp, props));
describe('appWithTranslation', () => {
  beforeEach(() => {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    I18nextProvider.mockImplementation(DummyI18nextProvider);
    const actualCreateClient = jest.requireActual('./createClient');
    createClient.mockImplementation(actualCreateClient);
  });
  afterEach(jest.resetAllMocks);
  it('returns children', () => {
    renderComponent();
    expect(screen.getByText('Hello world')).toBeTruthy();
  });
  it('respects configOverride', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"), {
      configOverride: 'custom-value',
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
      }
    });
    const customProps = {
      ...createProps(),
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en'
        }
      }
    };
    render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps));
    const [args] = I18nextProvider.mock.calls;
    expect(screen.getByText('Hello world')).toBeTruthy();
    expect(args[0].i18n.options.configOverride).toBe('custom-value');
  });
  it('allows passing configOverride.resources', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"), {
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
    render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, createProps()));
    const [args] = I18nextProvider.mock.calls;
    expect(args[0].i18n.options.resources).toMatchObject({
      xyz: {
        custom: 'resources'
      }
    });
  });
  it('throws an error if userConfig and configOverride are both missing', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"));
    const customProps = {
      ...createProps(),
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: null
        }
      }
    };
    expect(() => render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps))).toThrow('appWithTranslation was called without a next-i18next config');
  });
  it('throws an error if userConfig and configOverride are both missing an i18n property', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"), {});
    const customProps = {
      ...createProps(),
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: {}
        }
      }
    };
    expect(() => render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps))).toThrow('appWithTranslation was called without config.i18n');
  });
  it('throws an error if userConfig and configOverride are both missing a defaultLocale property', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"), {
      i18n: {}
    });
    const customProps = {
      ...createProps(),
      pageProps: {
        _nextI18Next: {
          initialLocale: 'en',
          userConfig: {
            i18n: {}
          }
        }
      }
    };
    expect(() => render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps))).toThrow('config.i18n does not include a defaultLocale property');
  });
  it('should use the initialLocale property if the router locale is undefined', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"));
    const customProps = {
      ...createProps(),
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
    };
    customProps.router = {
      ...customProps.router,
      locale: undefined
    };
    render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps));
    const [args] = I18nextProvider.mock.calls;
    expect(args[0].i18n.language).toBe('en');
  });
  it('should use the userConfig defaltLocale property if the router locale is undefined and initialLocale is undefined', () => {
    const DummyAppConfigOverride = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "Hello world"));
    const customProps = {
      ...createProps(),
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
    };
    customProps.router = {
      ...customProps.router,
      locale: undefined
    };
    render( /*#__PURE__*/React.createElement(DummyAppConfigOverride, customProps));
    const [args] = I18nextProvider.mock.calls;
    expect(args[0].i18n.language).toBe('fr');
  });
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
    expect(fs.existsSync).toHaveBeenCalledTimes(0);
    expect(fs.readdirSync).toHaveBeenCalledTimes(0);
  });
  it('should use locale from router', () => {
    renderComponent(createProps('de'));
    const [args] = I18nextProvider.mock.calls;
    expect(args[0].i18n.language).toBe('de');
  });
  it('does not re-call createClient on re-renders unless locale or props have changed', () => {
    const {
      rerender
    } = renderComponent();
    expect(createClient).toHaveBeenCalledTimes(1);
    rerender( /*#__PURE__*/React.createElement(DummyApp, defaultRenderProps));
    expect(createClient).toHaveBeenCalledTimes(1);
    const newProps = createProps();
    rerender( /*#__PURE__*/React.createElement(DummyApp, newProps));
    expect(createClient).toHaveBeenCalledTimes(2);
    newProps.pageProps._nextI18Next.initialLocale = 'de';
    newProps.router.locale = 'de';
    rerender( /*#__PURE__*/React.createElement(DummyApp, newProps));
    expect(createClient).toHaveBeenCalledTimes(3);
  });
  it('assures locale key is set to the right value', () => {
    let lng = 'de';
    const props = createProps('de');
    const DummyAppWithVar = appWithTranslation(() => /*#__PURE__*/React.createElement("div", null, "language is: ", lng), {
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
      }
    });
    const {
      rerender
    } = render( /*#__PURE__*/React.createElement(DummyAppWithVar, props));
    props.router.locale = 'en';
    props.pageProps._nextI18Next.initialLocale = 'en';
    lng = 'en';
    rerender( /*#__PURE__*/React.createElement(DummyAppWithVar, props));
    expect(screen.getByText(`language is: ${lng}`)).toBeTruthy();
    props.router.locale = 'de';
    props.pageProps._nextI18Next.initialLocale = 'de';
    lng = 'de';
    rerender( /*#__PURE__*/React.createElement(DummyAppWithVar, createProps('de')));
    expect(screen.getByText(`language is: ${lng}`)).toBeTruthy();
  });
});