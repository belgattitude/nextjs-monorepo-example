import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { FC, ReactNode } from 'react';
import type { Theme } from '../../base';

export type UIProviderProps = {
  cache: EmotionCache;
  children: ReactNode;
  theme: Theme;
};

/**
 *
 * Root provider for entire `@mqs/ui-lib` package
 *
 * Emotion:
 * - [Cache Provider](https://emotion.sh/docs/cache-provider)
 *
 * Material UI:
 * - [Theme Provider](https://mui.com/material-ui/customization/theming/#theme-provider)
 *
 */
export const UIProvider: FC<UIProviderProps> = ({ cache, children, theme }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
