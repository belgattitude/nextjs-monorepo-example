import i18n from 'i18next';
import i18nextFSBackend from 'i18next-fs-backend';
let globalInstance;
export default (config => {
  if (config.ns === undefined) config.ns = [];
  let instance;
  if (!globalInstance) {
    globalInstance = i18n.createInstance(config);
    instance = globalInstance;
  } else {
    instance = globalInstance.cloneInstance({
      ...config,
      initImmediate: false
    });
  }
  let initPromise;
  if (!instance.isInitialized) {
    const hasCustomBackend = config?.use?.some(b => b.type === 'backend');
    if (!hasCustomBackend) {
      instance.use(i18nextFSBackend);
    }
    config?.use?.forEach(x => instance.use(x));
    if (typeof config.onPreInitI18next === 'function') {
      config.onPreInitI18next(instance);
    }
    initPromise = instance.init(config);
  } else {
    initPromise = Promise.resolve(i18n.t);
  }
  return {
    i18n: instance,
    initPromise
  };
});