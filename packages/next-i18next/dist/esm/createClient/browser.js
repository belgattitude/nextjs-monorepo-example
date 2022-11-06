import i18n from 'i18next';
export default (function (config) {
  if (config.ns === undefined) config.ns = [];
  var instance = i18n.createInstance(config);
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
    initPromise = Promise.resolve(i18n.t);
  }
  return {
    i18n: instance,
    initPromise: initPromise
  };
});