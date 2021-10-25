/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';
import type common from '../../public/locales/en/common.json';
import type demo from '../../public/locales/en/demo.json';
import type home from '../../public/locales/en/home.json';
import type system from '../../public/locales/en/system.json';

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
