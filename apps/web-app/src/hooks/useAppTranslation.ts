import { useTranslation } from 'react-i18next';

export default function useAppTranslation() {
  return useTranslation(['common', 'system']);
}
