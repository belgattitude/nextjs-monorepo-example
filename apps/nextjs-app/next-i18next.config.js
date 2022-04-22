const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  react: {
    useSuspense: true,
  },
  localePath: path.resolve('../../packages/common-i18n/src/locales'),
};
