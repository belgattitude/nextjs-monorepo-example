import { sayHello } from '@mqs/core-lib';
import { AsyncMessage, Message } from '@mqs/ui-lib';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import type { FC } from 'react';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { DemoMuiBlock } from '@/features/demo/blocks/demo-mui.block';
import { Jumbotron } from '@/features/demo/blocks/jumbotron';
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
        <h3>I'm the web-app</h3>
        <Jumbotron />
        <ul>
          <li>{`Foo says: ${sayHello('World')} from @mqs/core-lib`}</li>
          <li>
            <Message message={'Bar react component from @mqs/ui-lib'} />
          </li>
          <li>
            <AsyncMessage apiUrl={'/api/hello'} />
          </li>
        </ul>
        <Image
          src={'/shared-assets/images/nextjs-logo.png'}
          alt={'logo'}
          width={400}
          height={240}
        />
        <div className={'pt-8'} />
        <DemoMuiBlock />
        <div className={'pt-8'} />
        <DemoApiBlock />
      </MainLayout>
    </>
  );
};
