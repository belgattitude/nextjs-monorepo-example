import { HttpBadRequest } from '@belgattitude/http-exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { authConfig } from '@/features/auth/auth.config';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { getServerSideTranslations } from '@/lib/i18n';

type Props = {
  /** Add props here */
};

export default function LoginRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <LoginPage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  const { i18nNamespaces } = authConfig;
  return {
    props: {
      ...(await getServerSideTranslations(locale, i18nNamespaces)),
    },
  };
};
