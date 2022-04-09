import { sayHello } from '@mqs/core-lib';
import { Typography } from '@mqs/ui-lib';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { DemoApiBlock } from '../blocks/demo-api.block';
import { demoConfig } from '../demo.config';

type Props = {
  children?: never;
};

export const DemoPage: FC<Props> = () => {
  const { t } = useTranslation(demoConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/mqschwanda/nextjs-monorepo"
      />
      <MainLayout>
        <Banner />
        <ul>
          <li>
            <Typography>{`Foo says: ${sayHello(
              'World'
            )} from @mqs/core-lib`}</Typography>
          </li>
        </ul>
        <DemoApiBlock />
      </MainLayout>
    </>
  );
};
