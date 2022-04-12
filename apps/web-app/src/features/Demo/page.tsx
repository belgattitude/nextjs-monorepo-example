import { Container } from '@mqs/ui-lib/components';
import { NextSeo } from 'next-seo';
import type { FC, ReactElement } from 'react';
import { usePageTranslation } from '@/features/Demo/hooks';
import { DemoApiSection } from '@/features/Demo/sections';
import { MainLayout } from '@/layouts/MainLayout';

type Props = {
  children?: never;
};

export const DemoPage: FC<Props> = () => {
  const { t } = usePageTranslation();

  return (
    <>
      <NextSeo
        title={t('common:pages.demo.title')}
        description={t('common:pages.demo.description')}
      />

      <DemoApiSection />
    </>
  );
};

export const getServerSideLayout = (page: ReactElement) => {
  return (
    <>
      <MainLayout>
        <Container>{page}</Container>
      </MainLayout>
    </>
  );
};
