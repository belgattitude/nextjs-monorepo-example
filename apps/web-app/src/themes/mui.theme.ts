import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { fontFamily } from './mui-tailwind-theme.config';
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
