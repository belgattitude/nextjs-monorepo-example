"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _reactI18next.I18nContext;
  }
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _reactI18next.Trans;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.Translation;
  }
});
Object.defineProperty(exports, "appWithTranslation", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation.appWithTranslation;
  }
});
Object.defineProperty(exports, "i18n", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation.globalI18n;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.withTranslation;
  }
});
var _reactI18next = require("react-i18next");
var _appWithTranslation = require("./appWithTranslation");