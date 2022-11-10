import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _typeof from "@babel/runtime/helpers/typeof";
export var getFallbackForLng = function getFallbackForLng(lng, fallbackLng) {
  if (typeof fallbackLng === 'string') {
    return [fallbackLng];
  }
  if (Array.isArray(fallbackLng)) {
    return fallbackLng;
  }
  if (_typeof(fallbackLng) === 'object') {
    var fallbackList = fallbackLng[lng];
    var fallbackDefault = fallbackLng["default"];
    return [].concat(_toConsumableArray(fallbackList !== null && fallbackList !== void 0 ? fallbackList : []), _toConsumableArray(fallbackDefault !== null && fallbackDefault !== void 0 ? fallbackDefault : []));
  }
  if (typeof fallbackLng === 'function') {
    return getFallbackForLng(lng, fallbackLng(lng));
  }
  return [];
};
export var unique = function unique(list) {
  return Array.from(new Set(list));
};