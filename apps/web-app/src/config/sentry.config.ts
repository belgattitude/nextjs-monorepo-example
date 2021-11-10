import type { BrowserOptions } from '@sentry/browser';
export const sentryBrowserInitConfig: BrowserOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: [process.env.APP_NAME, process.env.APP_VERSION].join(':'),
  tracesSampleRate: 1.0,
  debug: false,
  ignoreErrors: [
    /**
     * @link https://github.com/WICG/ResizeObserver/issues/38#issuecomment-422126006,
     * @link https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded/50387233#50387233
     */
    'ResizeObserver loop limit exceeded',
  ],
};
