import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import tailwindTheme from '../../tailwind.config';

// Create a mui v5 theme instance.
export const muiTheme = createTheme({
  typography: {
    fontFamily: tailwindTheme.theme.fontFamily.sans.join(','),
  },
  palette: {
    error: {
      main: red.A400,
    },
  },
});
