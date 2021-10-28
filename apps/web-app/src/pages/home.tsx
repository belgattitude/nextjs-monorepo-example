import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';
import { homeConfig } from '@/features/home/home.config';
import { HomePage } from '@/features/home/pages/home.page';

type Props = {
  /** Add HomeRoute props here */
};

export default function HomeRoute(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <HomePage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await getServerSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
