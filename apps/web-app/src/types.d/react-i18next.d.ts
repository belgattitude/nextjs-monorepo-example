/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';
import type { ReportNamespaces } from 'react-i18next';
import common from '../../public/locales/en/common.json';
import demo from '../../public/locales/en/demo.json';
import home from '../../public/locales/en/home.json';
import system from '../../public/locales/en/system.json';

// For an obscure reason i18n type augmentation present in react-i18next/ts4.1/index.d.ts
// (and/or react-i18next/index.d.ts) aren't considered when using I18nextProvider
// @see https://github.com/i18next/react-i18next/issues/1379
/*
declare module 'i18next' {
  interface i18n {
    reportNamespaces: ReportNamespaces;
  }
}
*/

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      home: typeof home;
      demo: typeof demo;
      system: typeof system;
    };
  }
}
