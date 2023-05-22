// @ts-check
// Keep this file as '.js' as it's included in tailwind.config.js

import { browserFonts } from '../shared/browser-fonts';

export const tailwindTheme = {
  fontFamily: {
    sans: ['Inter Variable', ...browserFonts.sans],
  },
};
