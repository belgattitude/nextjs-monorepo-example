import { HttpBadRequest } from '@httpx/exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServerTranslations } from '@/backend/i18n/getServerTranslations';
import { demoConfig } from '@/features/demo/demo.config';
import { DemoPage } from '@/features/demo/pages';

type Props = {
  /** Add HomeRoute props here */
};

export default function DemoRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <DemoPage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  const { i18nNamespaces } = demoConfig;
  return {
    props: {
      ...(await getServerTranslations(locale, i18nNamespaces)),
    },
  };
};
