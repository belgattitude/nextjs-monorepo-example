import type { Theme } from '@mui/material';

export type { Theme };

export { createTheme } from '@mui/material/styles';
export { useTheme } from '@mui/material';

export function uiLinearGradient(theme: Theme): string {
  const {
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
    },
  } = theme;

  return `linear-gradient(90deg, ${secondary} 0%, ${primary} 13%, ${secondary} 100%)`;
}
