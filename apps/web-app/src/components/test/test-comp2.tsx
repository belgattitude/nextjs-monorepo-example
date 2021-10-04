import { Trans } from 'next-i18next';
import { FC } from 'react';
//import { Trans } from 'react-i18next';

export const TestComp2: FC = () => {
  return (
    <div>
      <Trans ns={'home'} i18nKey={'msg.subtitle'}>
        <strong>Basically</strong> every <strong>day</strong>
      </Trans>
    </div>
  );
};
