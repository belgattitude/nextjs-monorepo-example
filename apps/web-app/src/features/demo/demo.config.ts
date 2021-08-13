import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type DemoConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
};

export const demoConfig: DemoConfig = {
  i18nNamespaces: ['common', 'demo'],
} as const;
