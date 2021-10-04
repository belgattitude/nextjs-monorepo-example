import { BadRequest } from '@tsed/exceptions';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TestComp } from '@/components/test/test-comp';
import { TestComp2 } from '@/components/test/test-comp2';
import { TestComp3 } from '@/components/test/test-comp3';

type Props = {
  /** Add HomeRoute props here */
};

export default function I18nRoute(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <TestComp />
      <TestComp2 />
      <TestComp3 />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'].slice())),
    },
  };
};
