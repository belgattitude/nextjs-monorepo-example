import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Banner } from '@/components/Banner';
import { MainLayout } from '@/components/layout/MainLayout';
import { CtaBlock, FeaturesBlock, HeroBlock } from '../blocks';
import { homeConfig } from '../home.config';

type Props = {
  children?: never;
};

export const HomePage: FC<Props> = () => {
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
