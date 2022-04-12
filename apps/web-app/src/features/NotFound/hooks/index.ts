import { useTranslation } from 'react-i18next';
import { notFoundConfig } from '@/features/NotFound/config';

export const usePageTranslation = () => {
  return useTranslation(notFoundConfig.i18nNamespaces);
};
