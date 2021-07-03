import { CustomTypeOptions } from 'react-i18next';

export const homeConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: [
    'common',
    'home',
  ] as (keyof CustomTypeOptions['resources'])[],
} as const;
