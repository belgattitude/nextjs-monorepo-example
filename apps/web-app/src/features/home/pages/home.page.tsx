import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';
import { HeroBlock } from '../blocks/hero-block';
import { FeaturesBlock } from '../blocks/features-block';
import { CtaBlock } from '../blocks/cta-block';
import { useTranslation } from 'next-i18next';
import { homeConfig } from '../home.config';
import { AgenciesSection } from '../blocks/agencies-section';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
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
        <AgenciesSection />
        <FeaturesBlock />
        <CtaBlock />
      </MainLayout>
    </>
  );
};
