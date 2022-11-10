/**
 * @jest-environment jsdom
 */

import createClientBrowser from './browser';
let onPreInitI18nextCalled;
const config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  onPreInitI18next: i18n => {
    onPreInitI18nextCalled = i18n;
  },
  use: []
};
describe('createClientBrowser', () => {
  beforeEach(() => {
    onPreInitI18nextCalled = null;
  });
  it('returns a browser client', () => {
    const client = createClientBrowser(config);
    expect(typeof client.initPromise.then).toBe('function');
    expect(typeof client.i18n.addResource).toBe('function');
    expect(typeof client.i18n.translator).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(onPreInitI18nextCalled).toEqual(client.i18n);
  });
});