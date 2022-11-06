import _typeof from "@babel/runtime/helpers/typeof";
import createClientNode from './node';
var onPreInitI18nextCalled;
var config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  onPreInitI18next: function onPreInitI18next(i18n) {
    onPreInitI18nextCalled = i18n;
  },
  use: []
};
describe('createClientNode', function () {
  var client;
  beforeEach(function () {
    onPreInitI18nextCalled = null;
  });
  it('returns a node client', function () {
    client = createClientNode(config);
    expect(_typeof(client.initPromise.then)).toBe('function');
    expect(_typeof(client.i18n.addResource)).toBe('function');
    expect(_typeof(client.i18n.translator)).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(client.i18n.options.isClone).not.toBe(true);
    expect(onPreInitI18nextCalled).toEqual(client.i18n);
  });
  describe('createClientNode a second time should return a clone of i18next', function () {
    it('returns a node client', function () {
      var secondClient = createClientNode(config);
      expect(_typeof(secondClient.initPromise.then)).toBe('function');
      expect(_typeof(secondClient.i18n.addResource)).toBe('function');
      expect(_typeof(secondClient.i18n.translator)).toBe('object');
      expect(secondClient.i18n.options.defaultLocale).toEqual(config.defaultLocale);
      expect(secondClient.i18n.options.locales).toEqual(config.locales);
      expect(secondClient.i18n.options.isClone).toBe(true);
      expect(secondClient).not.toEqual(client);
      expect(secondClient.store).toEqual(client.store);
      expect(onPreInitI18nextCalled).toBeNull();
    });
  });
});