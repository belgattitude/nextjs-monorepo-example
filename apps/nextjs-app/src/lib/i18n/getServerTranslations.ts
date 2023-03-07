/**
 * Retrieve translations on server-side, wraps next-i18next.serverSideTranslations
 * to allow further customizations.
 */
import { type Namespace } from 'i18next';
import type { SSRConfig, UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../../next-i18next.config';

type ArrayElementOrSelf<T> = T extends Array<infer U> ? U[] : T[];
export const getServerTranslations = async (
  locale: string,
  namespacesRequired?: ArrayElementOrSelf<Namespace> | undefined,
  configOverride?: UserConfig | null,
  extraLocales?: string[] | false
): Promise<SSRConfig> => {
  const config = configOverride ?? nextI18nextConfig;

  // Slice needed here cause serverSlideTranslations does not accept Readonly type
  return serverSideTranslations(
    locale,
    namespacesRequired,
    config,
    extraLocales
  );
};
