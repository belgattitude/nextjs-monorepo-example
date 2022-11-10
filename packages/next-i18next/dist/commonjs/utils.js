"use strict";

require("core-js/modules/es.object.define-property.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = exports.getFallbackForLng = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/web.dom-collections.iterator.js");
var getFallbackForLng = function getFallbackForLng(lng, fallbackLng) {
  if (typeof fallbackLng === 'string') {
    return [fallbackLng];
  }
  if (Array.isArray(fallbackLng)) {
    return fallbackLng;
  }
  if ((0, _typeof2["default"])(fallbackLng) === 'object') {
    var fallbackList = fallbackLng[lng];
    var fallbackDefault = fallbackLng["default"];
    return [].concat((0, _toConsumableArray2["default"])(fallbackList !== null && fallbackList !== void 0 ? fallbackList : []), (0, _toConsumableArray2["default"])(fallbackDefault !== null && fallbackDefault !== void 0 ? fallbackDefault : []));
  }
  if (typeof fallbackLng === 'function') {
    return getFallbackForLng(lng, fallbackLng(lng));
  }
  return [];
};
exports.getFallbackForLng = getFallbackForLng;
var unique = function unique(list) {
  return Array.from(new Set(list));
};
exports.unique = unique;