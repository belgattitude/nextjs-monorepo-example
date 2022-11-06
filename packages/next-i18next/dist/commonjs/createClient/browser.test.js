"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _browser = _interopRequireDefault(require("./browser"));
var onPreInitI18nextCalled;
var config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  onPreInitI18next: function onPreInitI18next(i18n) {
    onPreInitI18nextCalled = i18n;
  },
  use: []
};
describe('createClientBrowser', function () {
  beforeEach(function () {
    onPreInitI18nextCalled = null;
  });
  it('returns a browser client', function () {
    var client = (0, _browser["default"])(config);
    expect((0, _typeof2["default"])(client.initPromise.then)).toBe('function');
    expect((0, _typeof2["default"])(client.i18n.addResource)).toBe('function');
    expect((0, _typeof2["default"])(client.i18n.translator)).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(onPreInitI18nextCalled).toEqual(client.i18n);
  });
});