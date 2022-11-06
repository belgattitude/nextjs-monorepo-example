"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _node = _interopRequireDefault(require("./node"));
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
    client = (0, _node["default"])(config);
    expect((0, _typeof2["default"])(client.initPromise.then)).toBe('function');
    expect((0, _typeof2["default"])(client.i18n.addResource)).toBe('function');
    expect((0, _typeof2["default"])(client.i18n.translator)).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(client.i18n.options.isClone).not.toBe(true);
    expect(onPreInitI18nextCalled).toEqual(client.i18n);
  });
  describe('createClientNode a second time should return a clone of i18next', function () {
    it('returns a node client', function () {
      var secondClient = (0, _node["default"])(config);
      expect((0, _typeof2["default"])(secondClient.initPromise.then)).toBe('function');
      expect((0, _typeof2["default"])(secondClient.i18n.addResource)).toBe('function');
      expect((0, _typeof2["default"])(secondClient.i18n.translator)).toBe('object');
      expect(secondClient.i18n.options.defaultLocale).toEqual(config.defaultLocale);
      expect(secondClient.i18n.options.locales).toEqual(config.locales);
      expect(secondClient.i18n.options.isClone).toBe(true);
      expect(secondClient).not.toEqual(client);
      expect(secondClient.store).toEqual(client.store);
      expect(onPreInitI18nextCalled).toBeNull();
    });
  });
});