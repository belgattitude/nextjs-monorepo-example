import { LongtailHeader } from '../components/longtail-header';
import { MainLayout } from '@/components/layout/main-layout';
import { CollectionPageJsonLd, NextSeo } from 'next-seo';
import { fetchLongtailSummary } from '@/features/home/api/fetch-longtail-summary';
import { Banner } from '@/components/banner';
import { OctopusTrust } from '@/components/octopus-trust/octopus-trust';

type Props = {
  children?: never;
};

export const LongtailPage: React.FC<Props> = () => {
  //   const { t } = useTranslation(homeConfig.i18nNamespaces);
  const summaryData = fetchLongtailSummary({
    locationSlug: 'Brussels',
  }).data;
  return <>
      <NextSeo
        title={`Best agencies in ${summaryData.city}`}
        description={`Best agencies in ${summaryData.city}`}></NextSeo>
      <MainLayout>
      <Banner element={<OctopusTrust/>}/>
      </MainLayout>
  </>
};
