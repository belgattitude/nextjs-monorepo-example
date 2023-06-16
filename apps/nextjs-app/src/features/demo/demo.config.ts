import { getSortedI18nNamespaces } from '@/lib/i18n/getSortedI18nNamespaces';

const i18nNamespaces = getSortedI18nNamespaces(['common', 'demo']);

export type DemoConfig = {
  i18nNamespaces: typeof i18nNamespaces;
};

export const demoConfig: DemoConfig = {
  i18nNamespaces,
};
