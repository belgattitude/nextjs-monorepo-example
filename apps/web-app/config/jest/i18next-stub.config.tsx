import i18n from 'i18next';
import React from 'react';
import { initReactI18next, I18nextProvider } from 'react-i18next';

/**
 * Using stub strategy, you can use mocks as well
 * @link {https://react.i18next.com/misc/testing}
 */
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'translations',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  // Let empty so you can test for keys rather
  // than translations
  resources: { en: { translations: {} } },
});

export const I18nextTestStubProvider: React.FC = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
