import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';
import { HeroSection } from './sections/hero-section';
import { FeaturesSection } from './sections/features-section';
import { CTASection } from './sections/cta-section';
import { AgenciesSection } from './sections/agencies-section';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <>
      <NextSeo
        title="[web-app] nextjs-monorepo example"
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
