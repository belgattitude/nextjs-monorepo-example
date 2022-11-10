import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type { AppProps as NextJsAppProps } from 'next/app';
import { SSRConfig, UserConfig } from './types';
import { i18n as I18NextClient } from 'i18next';
export { Trans, useTranslation, withTranslation } from 'react-i18next';
export declare let globalI18n: I18NextClient | null;
export declare const appWithTranslation: <Props extends NextJsAppProps<any>>(WrappedComponent: React.ComponentType<Props>, configOverride?: UserConfig | null) => ((props: Props & {
    pageProps: Props["pageProps"] & SSRConfig;
}) => JSX.Element) & hoistNonReactStatics.NonReactStatics<React.ComponentType<Props>, {}>;
