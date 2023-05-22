import type { EmotionCache } from '@emotion/cache';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config.mjs';
import { AppProviders } from '../AppProviders';

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

/**
 * Generally don't enable getInitialProp if you don't need to,
 * all your pages will be served server-side (no static optimizations).
 */
/*
MyApp.getInitialProps = async appContext => {
   // calls page's `getInitialProps` and fills `appProps.pageProps`
   const appProps = await App.getInitialProps(appContext)
   return { ...appProps }
}
*/

export default appWithTranslation(MyApp, {
  ...nextI18nextConfig,
});
