import { I18nContext, useTranslation, Trans, withTranslation, WithTranslation as ReactI18nextWithTranslation, DefaultNamespace, Translation } from 'react-i18next';
import { InitOptions, i18n as I18NextClient, TFunction as I18NextTFunction } from 'i18next';
import { appWithTranslation, i18n } from './';
declare type NextJsI18NConfig = {
    defaultLocale: string;
    locales: string[];
};
export declare type UserConfig = {
    i18n: NextJsI18NConfig;
    localeExtension?: string;
    localePath?: string | ((locale: string, namespace: string, missing: boolean) => string);
    localeStructure?: string;
    onPreInitI18next?: (i18n: I18n) => void;
    reloadOnPrerender?: boolean;
    serializeConfig?: boolean;
    use?: any[];
} & InitOptions;
export declare type InternalConfig = Omit<UserConfig, 'i18n'> & NextJsI18NConfig & {
    errorStackTraceLimit: number;
    preload: string[];
    supportedLngs: string[];
};
export declare type UseTranslation = typeof useTranslation;
export declare type AppWithTranslation = typeof appWithTranslation;
export declare type TFunction = I18NextTFunction;
export declare type I18n = I18NextClient;
export declare type WithTranslationHocType = typeof withTranslation;
export declare type WithTranslation = ReactI18nextWithTranslation;
export declare type InitPromise = Promise<TFunction>;
export declare type CreateClientReturn = {
    i18n: I18n;
    initPromise: InitPromise;
};
export declare type SSRConfig = {
    _nextI18Next?: {
        initialI18nStore: any;
        initialLocale: string;
        ns: string[];
        userConfig: UserConfig | null;
    };
};
export { i18n, I18nContext, appWithTranslation, useTranslation, Trans, Translation, withTranslation, DefaultNamespace, };
