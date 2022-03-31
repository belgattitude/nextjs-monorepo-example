import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { CtaBlock } from '../blocks/cta-block';
import { FeaturesBlock } from '../blocks/features-block';
import { HeroBlock } from '../blocks/hero-block';
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
