import { CustomTypeOptions } from 'react-i18next';
import { ReadonlyDeep } from 'type-fest';

export type FeaturesConfig = ReadonlyDeep<
  {
    /** Namespaces that should be loaded for this page */
    i18nNamespaces?: (keyof CustomTypeOptions['resources'])[];
  } & Record<string, unknown>
>;
