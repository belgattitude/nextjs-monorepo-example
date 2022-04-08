import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import type { Theme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import type { FC, ReactNode } from 'react';

type Props = {
  cache: EmotionCache;
  children: ReactNode;
  theme: Theme;
};

export const UIProvider: FC<Props> = ({ cache, children, theme }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* Mui CssBaseline disabled in this example as tailwind provides its own */}
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
