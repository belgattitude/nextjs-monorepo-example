import { createTheme, red } from '@mqs/ui-lib';
import { fontFamily } from '@/themes/tailwind/tailwind.theme';

// Create a mui v5 theme instance.
export const muiTheme = createTheme({
  typography: {
    fontFamily: fontFamily.sans.join(','),
  },
  palette: {
    error: {
      main: red.A400,
    },
  },
});
