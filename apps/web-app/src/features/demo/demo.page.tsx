import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { demoConfig } from './demo.config';
import { DemoApiSection } from './sections';

type Props = {
  children?: never;
};

export const DemoPage: FC<Props> = () => {
  const { t } = useTranslation(demoConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/mqschwanda/nextjs-monorepo"
      />
      <MainLayout>
        <Banner />
        <DemoApiSection />
      </MainLayout>
    </>
  );
};
