import type { EmotionCache } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import { AppProviders } from '../app-providers';

const fallbackServerSideLayout = (page: ReactElement) => page;

/**
 * Import global styles, global css or polyfills here
 * i.e.: import '@/assets/theme/style.scss'
 */

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps & {
  Component: NextAppProps['Component'] & {
    getServerSideLayout?: (page: ReactElement) => ReactNode;
  };
  /** Will be defined only is there was an error */
  err?: Error;
  emotionCache?: EmotionCache;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = (appProps: AppProps) => {
  const { Component, pageProps, emotionCache, err } = appProps;

  const serverSideLayout = useMemo(
    () => Component?.getServerSideLayout ?? fallbackServerSideLayout,
    [Component?.getServerSideLayout]
  );
  const content = useMemo(
    () =>
      serverSideLayout(
        /* Workaround for https://github.com/vercel/next.js/issues/8592 */
        <Component {...pageProps} err={err} />
      ),
    [serverSideLayout, pageProps, Component, err]
  );

  return (
    <AppProviders emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {content}
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

export default appWithTranslation(MyApp);
