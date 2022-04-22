import type common from './locales/en/common.json';
import type demo from './locales/en/demo.json';
import type home from './locales/en/home.json';
import type system from './locales/en/system.json';

export interface I18nNamespaces {
  home: typeof home;
  demo: typeof demo;
  common: typeof common;
  system: typeof system;
}
