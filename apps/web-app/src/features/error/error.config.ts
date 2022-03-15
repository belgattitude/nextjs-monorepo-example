import type { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type ErrorConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'system'>>;
};

export const errorConfig: ErrorConfig = {
  i18nNamespaces: ['system'],
} as const;
