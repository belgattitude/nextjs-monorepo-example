import { Box } from '@mqs/ui-lib';
import type { FC } from 'react';
import WebAppBarTop from '@/partials/WebAppBarTop/loadable';
import WebAppFooter from '@/partials/WebAppFooter/loadable';

export const MainLayout: FC = (props) => {
  const { children } = props;
  return (
    <Box flexDirection="column" height="100vh" display="flex">
      <WebAppBarTop />
      <main>{children}</main>
      <WebAppFooter />
    </Box>
  );
};
