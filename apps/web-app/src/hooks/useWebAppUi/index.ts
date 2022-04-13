import { useMediaQuery, useTheme } from '@mqs/ui-lib';
import { useMemo, useState } from 'react';

// TODO: update to context
export default function useWebAppUi() {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const [webAppDrawerOpen, setWebAppDrawerOpen] = useState(false);

  return useMemo(
    () => ({
      isWebAppDrawerPermanent: xl,
      setWebAppDrawerOpen,
      webAppDrawerOpen: xl || webAppDrawerOpen,
    }),
    [xl, webAppDrawerOpen]
  );
}
