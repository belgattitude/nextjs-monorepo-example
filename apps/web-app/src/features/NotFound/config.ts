import type { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type NotFoundConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'notFound'>>;
};

export const notFoundConfig: NotFoundConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'notFound'],
} as const;
