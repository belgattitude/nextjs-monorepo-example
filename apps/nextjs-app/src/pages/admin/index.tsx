import { HttpBadRequest } from '@httpx/exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ReactElement } from 'react';
import { adminConfig } from '@/features/admin/admin.config';
import { AdminLayout } from '@/features/admin/layouts';
import { AdminMainPage } from '@/features/admin/pages';
import { getServerTranslations } from '@/lib/i18n';

type Props = {
  /** Add props here */
};

AdminRoute.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  const { i18nNamespaces } = adminConfig;
  return {
    props: {
      ...(await getServerTranslations(locale, i18nNamespaces)),
    },
    // revalidate: 60,
  };
};

export default function AdminRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <AdminMainPage />;
}
