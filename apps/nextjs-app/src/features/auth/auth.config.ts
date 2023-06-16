import { getSortedI18nNamespaces } from '@/lib/i18n/getSortedI18nNamespaces';

const i18nNamespaces = getSortedI18nNamespaces([
  'auth',
  'common',
  'navigation',
]);

export type AuthConfig = {
  i18nNamespaces: typeof i18nNamespaces;
};

export const authConfig: AuthConfig = {
  i18nNamespaces,
};
