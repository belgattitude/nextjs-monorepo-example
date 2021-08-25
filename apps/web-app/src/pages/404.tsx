import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'react-i18next';
import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../next-i18next.config';

const i18nNamespaces: I18nNamespaces = ['servicePages'];

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context;

  // Works (so it's not linked to nextjs apparently)
  const getFakeServerSideTranslations = async (
    _locale: string,
    _namespaces: string[]
  ) => {
    return Promise.resolve({ aProperty: 'cool' });
  };

  // Dont work
  // Error: ReactDOMServer does not yet support Suspense.
  const getRealServerSideTranslations = async (
    locale: string,
    namespaces: string[]
  ) => {
    return await serverSideTranslations(locale, namespaces, nextI18nextConfig);
  };

  const inlinedTranslation = await getRealServerSideTranslations(
    locale,
    i18nNamespaces
  );

  return {
    props: {
      locale: locale,
      ...inlinedTranslation,
    },
  };
};

export default function Custom404(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(i18nNamespaces);
  return <h1>{t('servicePages:notFound.title')}</h1>;
}
