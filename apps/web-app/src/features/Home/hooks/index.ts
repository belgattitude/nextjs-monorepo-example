import { useTranslation } from 'react-i18next';
import { homeConfig } from '@/features/Home/config';

export const usePageTranslation = () => {
  return useTranslation(homeConfig.i18nNamespaces);
};
