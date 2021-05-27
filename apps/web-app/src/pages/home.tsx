import { GetServerSideProps } from 'next';
import { HomePage } from '../features/home/home.page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';

export default function Home() {
  return <HomePage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
};
