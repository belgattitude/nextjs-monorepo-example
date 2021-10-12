const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const sharedTheme = require('./src/themes/tailwind/tailwind.theme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...defaultTheme.colors,
      gray: colors.coolGray,
      blue: colors.sky,
    },
    fontFamily: {
      sans: sharedTheme.fontFamily.sans,
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      /**
      spacing: {
        128: '32rem',
      },
      */
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
