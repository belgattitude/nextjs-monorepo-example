import type { CustomTypeOptions } from 'i18next';

export type I18nNamespace = keyof CustomTypeOptions['resources'];

export type I18nActiveNamespaces = I18nNamespace[];
