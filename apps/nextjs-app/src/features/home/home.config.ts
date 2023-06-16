import { getSortedI18nNamespaces } from '@/lib/i18n/getSortedI18nNamespaces';

const i18nNamespaces = getSortedI18nNamespaces(['common', 'home']);

export type HomeConfig = {
  i18nNamespaces: typeof i18nNamespaces;
};

export const homeConfig: HomeConfig = {
  i18nNamespaces,
};
