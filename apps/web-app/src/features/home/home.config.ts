import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type HomeConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
};
export const homeConfig: HomeConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'home'],
} as const;
