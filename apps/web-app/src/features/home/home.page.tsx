import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { homeConfig } from './home.config';
import { CtaSection, FeaturesSection, HeroSection } from './sections';

type Props = {
  children?: never;
};

export const HomePage: FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description="See https://github.com/mqschwanda/nextjs-monorepo"
      />
      <MainLayout>
        <Banner />
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </MainLayout>
    </>
  );
};
