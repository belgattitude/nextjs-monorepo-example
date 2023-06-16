import { getSortedI18nNamespaces } from '@/lib/i18n/getSortedI18nNamespaces';

const i18nNamespaces = getSortedI18nNamespaces([
  'admin',
  'common',
  'navigation',
]);

export type AdminConfig = {
  i18nNamespaces: typeof i18nNamespaces;
};
export const adminConfig: AdminConfig = {
  i18nNamespaces,
};
