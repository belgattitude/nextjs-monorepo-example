import { LongtailHeader } from '../components/longtail-header';

type Props = {
  children?: never;
};

export const LongtailPage: React.FC<Props> = () => {
  //   const { t } = useTranslation(homeConfig.i18nNamespaces);

  return <LongtailHeader />;
};
