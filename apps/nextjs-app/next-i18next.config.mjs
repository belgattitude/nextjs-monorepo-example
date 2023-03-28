import path from 'path';

const debugI18n = ['true', 1].includes(
  process?.env?.NEXTJS_DEBUG_I18N ?? 'false'
);

const localePublicFolder = undefined;

export const defaultLocale = 'en';

/**
 * @type {import('next-i18next').UserConfig}
 */
export default {
  i18n: {
    defaultLocale,
    locales: ['en', 'fr'],
  },
  saveMissing: false,
  strictMode: true,
  serializeConfig: false,
  reloadOnPrerender: process?.env?.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
  debug: debugI18n,
  /*
  interpolation: {
    escapeValue: false,
  },
  */
  localePath:
    typeof window === 'undefined'
      ? path.resolve('../../packages/common-i18n/src/locales')
      : localePublicFolder,
};
