/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';
import type { LocalesTypes } from '@your-org/common-i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: LocalesTypes['common'];
      home: LocalesTypes['home'];
      demo: LocalesTypes['demo'];
      system: LocalesTypes['system'];
    };
  }
}
