import type { EmotionCache } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { FC, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { muiTheme } from '@/themes/mui/mui.theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type Props = {
  emotionCache?: EmotionCache;
  children: ReactNode;
};

export const AppProviders: FC<Props> = (props) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      {/* Mui CssBaseline disabled in this example as tailwind provides its own */}
      {/* <CssBaseline /> */}
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </MuiThemeProvider>
  );
};
