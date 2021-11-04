import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';
import { demoConfig } from '@/features/demo/demo.config';
import { DemoPage } from '@/features/demo/pages/demo.page';

type Props = {
  /** Add HomeRoute props here */
};

export default function DemoRoute(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <DemoPage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = demoConfig;
  return {
    props: {
      ...(await getServerSideTranslations(locale, i18nNamespaces)),
    },
  };
};
