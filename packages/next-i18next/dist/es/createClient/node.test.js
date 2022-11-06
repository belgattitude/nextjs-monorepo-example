import createClientNode from './node';
let onPreInitI18nextCalled;
const config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  onPreInitI18next: i18n => {
    onPreInitI18nextCalled = i18n;
  },
  use: []
};
describe('createClientNode', () => {
  let client;
  beforeEach(() => {
    onPreInitI18nextCalled = null;
  });
  it('returns a node client', () => {
    client = createClientNode(config);
    expect(typeof client.initPromise.then).toBe('function');
    expect(typeof client.i18n.addResource).toBe('function');
    expect(typeof client.i18n.translator).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(client.i18n.options.isClone).not.toBe(true);
    expect(onPreInitI18nextCalled).toEqual(client.i18n);
  });
  describe('createClientNode a second time should return a clone of i18next', () => {
    it('returns a node client', () => {
      const secondClient = createClientNode(config);
      expect(typeof secondClient.initPromise.then).toBe('function');
      expect(typeof secondClient.i18n.addResource).toBe('function');
      expect(typeof secondClient.i18n.translator).toBe('object');
      expect(secondClient.i18n.options.defaultLocale).toEqual(config.defaultLocale);
      expect(secondClient.i18n.options.locales).toEqual(config.locales);
      expect(secondClient.i18n.options.isClone).toBe(true);
      expect(secondClient).not.toEqual(client);
      expect(secondClient.store).toEqual(client.store);
      expect(onPreInitI18nextCalled).toBeNull();
    });
  });
});