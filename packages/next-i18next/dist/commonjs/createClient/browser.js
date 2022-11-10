"use strict";

require("core-js/modules/es.object.define-property.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.promise.js");
var _i18next = _interopRequireDefault(require("i18next"));
var _default = function _default(config) {
  if (config.ns === undefined) config.ns = [];
  var instance = _i18next["default"].createInstance(config);
  var initPromise;
  if (!instance.isInitialized) {
    var _config$use;
    config === null || config === void 0 ? void 0 : (_config$use = config.use) === null || _config$use === void 0 ? void 0 : _config$use.forEach(function (x) {
      return instance.use(x);
    });
    if (typeof config.onPreInitI18next === 'function') {
      config.onPreInitI18next(instance);
    }
    initPromise = instance.init(config);
  } else {
    initPromise = Promise.resolve(_i18next["default"].t);
  }
  return {
    i18n: instance,
    initPromise: initPromise
  };
};
exports["default"] = _default;
module.exports = exports.default;
module.exports.default = exports.default;