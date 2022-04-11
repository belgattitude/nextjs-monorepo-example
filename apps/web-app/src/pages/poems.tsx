import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { demoConfig, DemoPage, getServerSideLayout } from '@/features/demo';

type Props = {
  /** Add HomeRoute props here */
};

function DemoRoute(_props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <DemoPage />;
}

DemoRoute.getServerSideLayout = getServerSideLayout;

export default DemoRoute;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = demoConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
