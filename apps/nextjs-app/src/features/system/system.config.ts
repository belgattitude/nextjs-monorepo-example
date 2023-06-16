import { getSortedI18nNamespaces } from '@/lib/i18n/getSortedI18nNamespaces';

const i18nNamespaces = getSortedI18nNamespaces(['system']);

export type SystemConfig = {
  i18nNamespaces: typeof i18nNamespaces;
};

export const systemConfig: SystemConfig = {
  i18nNamespaces,
};
