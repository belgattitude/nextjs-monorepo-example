const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  strictMode: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('../../packages/common-i18n/src/locales')
      : undefined,
};
