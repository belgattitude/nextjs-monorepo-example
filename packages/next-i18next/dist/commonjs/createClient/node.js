"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.promise.js");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _i18next = _interopRequireDefault(require("i18next"));
var _i18nextFsBackend = _interopRequireDefault(require("i18next-fs-backend"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var globalInstance;
var _default = function _default(config) {
  if (config.ns === undefined) config.ns = [];
  var instance;
  if (!globalInstance) {
    globalInstance = _i18next["default"].createInstance(config);
    instance = globalInstance;
  } else {
    instance = globalInstance.cloneInstance(_objectSpread(_objectSpread({}, config), {}, {
      initImmediate: false
    }));
  }
  var initPromise;
  if (!instance.isInitialized) {
    var _config$use, _config$use2;
    var hasCustomBackend = config === null || config === void 0 ? void 0 : (_config$use = config.use) === null || _config$use === void 0 ? void 0 : _config$use.some(function (b) {
      return b.type === 'backend';
    });
    if (!hasCustomBackend) {
      instance.use(_i18nextFsBackend["default"]);
    }
    config === null || config === void 0 ? void 0 : (_config$use2 = config.use) === null || _config$use2 === void 0 ? void 0 : _config$use2.forEach(function (x) {
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