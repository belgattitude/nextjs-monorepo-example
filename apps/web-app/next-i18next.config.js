const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  // Otherwise it will timeout on vercel when using getServerSideTranslations
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('./public/locales'),
};
