import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { FC, PropsWithChildren } from 'react';

import { createEmotionCache } from '@/lib/emotion';
import { muiTheme } from '@/themes/mui/mui.theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type Props = PropsWithChildren<{
  /**
   * next-auth session
   */
  session?: Session | null;
  /**
   * Optional emotion/cache to use
   */
  emotionCache?: EmotionCache;
}>;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const AppProviders: FC<Props> = (props) => {
  const { children, session, emotionCache = clientSideEmotionCache } = props;
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <CacheProvider value={emotionCache}>
        <MuiThemeProvider theme={muiTheme}>
          {/* Mui CssBaseline disabled in this example as tailwind provides its own */}
          {/* <CssBaseline /> */}
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MuiThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};
