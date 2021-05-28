import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';
import { HeroSection } from './sections/hero-section';
import { FeaturesSection } from './sections/features-section';
import { CTASection } from './sections/cta-section';
import { useTranslation } from 'next-i18next';
import { AgenciesSection } from './sections/agencies-section';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <NextSeo
        title={t('page.title')}
        description="See https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner />
        <HeroSection />
        <FeaturesSection />
        <AgenciesSection />
        <CTASection />
      </MainLayout>
    </>
  );
};
