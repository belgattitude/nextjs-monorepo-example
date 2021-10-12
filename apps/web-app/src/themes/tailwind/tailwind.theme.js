// @ts-check
// Keep this file as '.js' as it's included in tailwind.config.js

const { browserFonts } = require('../global/browser-fonts');
//import { browserFonts } from '@/themes/global/browser-fonts';

module.exports = {
  fontFamily: {
    sans: ['InterVariable', ...browserFonts.sans],
  },
};
