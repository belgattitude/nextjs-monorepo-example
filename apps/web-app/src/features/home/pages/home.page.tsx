import { useTranslation } from 'next-i18next';
import { CollectionPageJsonLd, NextSeo } from 'next-seo';
import { AgenciesBlock } from '../blocks/agencies-block';
import { CtaBlock } from '../blocks/cta-block';
import { FeaturesBlock } from '../blocks/features-block';
import { HeroBlock } from '../blocks/hero-block';
import { homeConfig } from '../home.config';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { fetchLongtailSummary } from '@/features/home/api/fetch-longtail-summary';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  const summaryData = fetchLongtailSummary({
    locationSlug: 'Brussels',
  }).data;

  return (
    <>
      <NextSeo
        title={`Best agencies in ${summaryData.city}`}
        description={`Best agencies in ${summaryData.city}`}></NextSeo>
      <MainLayout>
        <Banner />
        <HeroBlock summaryData={summaryData} />
        <AgenciesBlock />
        {/*<FeaturesBlock />*/}
        <CtaBlock />
      </MainLayout>
    </>
  );
};
