"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = void 0;
var DEFAULT_LOCALE = 'en';
var LOCALES = ['en'];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = './public/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_EXTENSION = 'json';
var defaultConfig = {
  defaultNS: DEFAULT_NAMESPACE,
  errorStackTraceLimit: 0,
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES
  },
  get initImmediate() {
    return process.browser && typeof window !== 'undefined';
  },
  interpolation: {
    escapeValue: false
  },
  load: 'currentOnly',
  localeExtension: LOCALE_EXTENSION,
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  react: {
    useSuspense: false
  },
  reloadOnPrerender: false,
  serializeConfig: true,
  use: []
};
exports.defaultConfig = defaultConfig;