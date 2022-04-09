import { Box } from '@mqs/ui-lib';
import type { FC } from 'react';
import { MainFooter } from '@/components/layout/main-footer';

export const MainLayout: FC = (props) => {
  const { children } = props;
  return (
    <Box flexDirection="column" height="100vh" display="flex">
      <main>{children}</main>
      <MainFooter />
    </Box>
  );
};
