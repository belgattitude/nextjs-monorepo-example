import { CustomTypeOptions } from 'react-i18next';

export const demoConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: [
    'common',
    'demo',
  ] as (keyof CustomTypeOptions['resources'])[],
} as const;
