/**
 * Retrieve translations on server-side, wraps next-i18next.serverSideTranslations
 * to allow further customizations.
 */
import type { SSRConfig, UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  type I18nActiveNamespaces,
  type I18nNamespace,
} from '@/lib/i18n/I18nNamespace.types';
import nextI18nextConfig from '../../../next-i18next.config.mjs';

export const getServerTranslations = async (
  locale: string,
  namespacesRequired?: I18nActiveNamespaces | I18nNamespace | undefined,
  configOverride?: UserConfig | null,
  extraLocales?: string[] | false
): Promise<SSRConfig> => {
  const config = configOverride ?? nextI18nextConfig;

  return serverSideTranslations(
    locale,
    namespacesRequired,
    config,
    extraLocales
  );
};
