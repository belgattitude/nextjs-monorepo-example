import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from '@/components/banner/Banner';
import { MainLayout } from '@/components/layout/MainLayout';
import { CtaBlock, FeaturesBlock, HeroBlock } from '../blocks';
import { homeConfig } from '../home.config';

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description="See https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner />
        <HeroBlock />
        <FeaturesBlock />
        <CtaBlock />
      </MainLayout>
    </>
  );
};
