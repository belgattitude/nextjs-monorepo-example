import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServerSideLayout, homeConfig, HomePage } from '@/features/home';

type Props = {
  /** Add HomeRoute props here */
};

function HomeRoute(_props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage />;
}

HomeRoute.getServerSideLayout = getServerSideLayout;

export default HomeRoute;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
