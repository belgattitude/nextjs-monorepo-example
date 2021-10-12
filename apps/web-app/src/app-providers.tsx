import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FC } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { muiTheme } from '@/themes/mui/mui.theme';
import { createEmotionCache } from '@/core/nextjs/create-emotion-cache';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type Props = {
  emotionCache?: EmotionCache;
};

export const AppProviders: FC<Props> = (props) => {
  const { emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={muiTheme}>
        {/* Mui CssBaseline disabled in this example as tailwind provides its own */}
        {/* <CssBaseline /> */}
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};
