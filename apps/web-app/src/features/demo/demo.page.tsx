import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { usePageTranslation } from '../home/hooks';
import { DemoApiSection } from './sections';

type Props = {
  children?: never;
};

export const DemoPage: FC<Props> = () => {
  const { t } = usePageTranslation();

  return (
    <>
      <NextSeo
        title={t('common:pages.poems.title')}
        description={t('common:pages.poems.title')}
      />
      <MainLayout>
        <DemoApiSection />
      </MainLayout>
    </>
  );
};
