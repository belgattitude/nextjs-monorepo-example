import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import type { FC } from 'react';

import { systemConfig } from '@/features/system/system.config';

type Props = {
  children?: never;
};

export const NotFoundPage: FC<Props> = (props) => {
  const { t } = useTranslation(systemConfig.i18nNamespaces);
  return (
    <>
      <Head>
        <title>{t('system:notFound.title')}</title>
      </Head>
      <div className="flex items-center justify-center w-screen h-screen bg-white">
        <div>
          <h1 className="text-5xl text-black md:text-4xl lg:text-5xl">
            {t('system:notFound.title')}
          </h1>
          <p className="text-center mt-5 no-underline hover:underline text-xl">
            <a href={'/'}>{t('system:links.backToHome')}</a>
          </p>
        </div>
      </div>
    </>
  );
};
