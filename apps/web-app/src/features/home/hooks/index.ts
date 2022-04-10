import { useTranslation } from 'react-i18next';
import { homeConfig } from '../home.config';

export const usePageTranslation = () => {
  return useTranslation(homeConfig.i18nNamespaces);
};
