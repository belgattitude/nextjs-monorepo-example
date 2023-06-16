import { HttpBadRequest } from '@httpx/exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServerTranslations } from '@/backend/i18n/getServerTranslations';
import { authConfig } from '@/features/auth/auth.config';
import { LoginPage } from '@/features/auth/pages/LoginPage';

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
      ...(await getServerTranslations(locale, i18nNamespaces)),
    },
  };
};
