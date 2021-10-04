import { useTranslation } from 'next-i18next';
import { FC } from 'react';
//import { useTranslation } from 'react-i18next';

export const TestComp: FC = () => {
  const { t } = useTranslation(['home']);
  return (
    <div>
      <h1>{t('home:msg.title')}</h1>
    </div>
  );
};
