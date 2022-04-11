import { Box } from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import WebAppBarTop from '@/partials/WebAppBarTop/loadable';
import WebAppFooter from '@/partials/WebAppFooter/loadable';

export const MainLayout: FC = (props) => {
  const { children } = props;
  const { t } = useTranslation(['common']);
  const pages = useMemo(
    () => [
      {
        href: '/home',
        label: t('common:pages.home.name'),
      },
      {
        href: '/poems',
        label: t('common:pages.poems.name'),
      },
    ],
    [t]
  );

  return (
    <Box flexDirection="column" height="100vh" display="flex">
      <WebAppBarTop pages={pages} />
      <Box component="main" paddingY={3}>
        {children}
      </Box>
      <WebAppFooter />
    </Box>
  );
};
