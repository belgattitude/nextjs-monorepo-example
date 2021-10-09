const { systemFonts } = require('./fonts/system-fonts');

module.exports = {
  fontFamily: {
    sans: ['InterVariable', ...systemFonts.sans],
  },
};
