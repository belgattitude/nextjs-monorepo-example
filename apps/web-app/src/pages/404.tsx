import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'react-i18next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';
import type { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

// To allow full typechecks in keys.
const i18nNamespaces: I18nActiveNamespaces<'system'> = ['system'];

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context;

  const inlinedTranslation = await getServerSideTranslations(
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
  return <h1>{t('system:notFound.title')}</h1>;
}
