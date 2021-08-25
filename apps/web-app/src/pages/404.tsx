import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'react-i18next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';

// The only way I found to ensure typing of keys... Otherwise
// all namespaces will be accepted
const i18nNamespaces: Array<'systemPages'> = ['systemPages'];

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
  return <h1>{t('systemPages:notFound.title')}</h1>;
}
