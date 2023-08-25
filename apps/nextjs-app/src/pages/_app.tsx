import type { EmotionCache } from '@emotion/cache';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config.mjs';
import { AppProviders } from '../providers/AppProviders';

/**
 * Import global styles, global css or polyfills here
 * i.e.: import '@/assets/theme/style.scss'
 */
import '../styles/global.css';

import '@fontsource-variable/inter';

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = (appProps: MyAppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps, emotionCache } = appProps;
  return (
    <AppProviders emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </AppProviders>
  );
};

export default appWithTranslation(MyApp, {
  ...nextI18nextConfig,
});
