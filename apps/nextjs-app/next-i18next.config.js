const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('../../packages/common-i18n/src/locales'),
};
