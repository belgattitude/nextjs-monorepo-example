import type { AppProps as NextAppProps } from 'next/app';
import { AppProviders } from '../app-providers';

/**
 * Import global styles, global css or polyfills here
 * i.e.: import '@/assets/theme/style.scss'
 */
import '../styles/global.css';

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps & {
  /** Will be defined only is there was an error */
  err?: Error;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = ({ Component, pageProps, err }: AppProps) => {
  return (
    <AppProviders>
      <Component {...pageProps} err={err} />
    </AppProviders>
  );
};

/*
MyApp.getInitialProps = async appContext => {
   // calls page's `getInitialProps` and fills `appProps.pageProps`
   const appProps = await App.getInitialProps(appContext)
   return { ...appProps }
}
*/

export default MyApp;
