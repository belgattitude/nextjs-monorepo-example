import type { CustomTypeOptions, Namespace } from 'i18next';

export type I18nNamespace = keyof CustomTypeOptions['resources'];

type ArrayElementOrSelf<T> = T extends Array<infer U> ? U[] : T[];

export type I18nActiveNamespaces = ArrayElementOrSelf<Namespace>;
