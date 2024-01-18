/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'de'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}',
      include: ['src/'],
    },
  ],
};
