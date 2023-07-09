import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { authConfig } from '@/features/auth/auth.config';
import { LoginForm } from '@/features/auth/components/LoginForm';

export const LoginPage: FC = (props) => {
  const { t } = useTranslation(authConfig.i18nNamespaces);
  const redirectToPage = '/admin';
  return (
    <>
      <NextSeo title={t('auth:page.title')} />
      <div className="flex h-screen items-center justify-center">
        <LoginForm redirectToPage={redirectToPage} />
      </div>
    </>
  );
};
