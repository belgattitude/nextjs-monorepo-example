import { NextSeo } from 'next-seo';
import type { FC, ReactElement } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { usePageTranslation } from './hooks';
import { CtaSection, FeaturesSection, HeroSection } from './sections';

type Props = {
  children?: never;
};

export const HomePage: FC<Props> = () => {
  const { t } = usePageTranslation();

  return (
    <>
      <NextSeo
        title={t('common:pages.home.title')}
        description={t('common:pages.home.description')}
      />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </>
  );
};

export const getServerSideLayout = (page: ReactElement) => {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
