import { useMediaQuery, useTheme } from '@mqs/ui-lib';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { WebAppUiContext } from './context';

export type WebAppUiContextProviderProps = {
  children: ReactNode;
};
export default function WebAppUiContextProvider({
  children,
}: WebAppUiContextProviderProps) {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const [webAppDrawerOpen, setWebAppDrawerOpen] = useState(false);
  const value = useMemo(
    () => ({
      isWebAppDrawerPermanent: xl,
      setWebAppDrawerOpen,
      webAppDrawerOpen: xl || webAppDrawerOpen,
    }),
    [xl, webAppDrawerOpen]
  );

  return (
    <WebAppUiContext.Provider value={value}>
      {children}
    </WebAppUiContext.Provider>
  );
}
