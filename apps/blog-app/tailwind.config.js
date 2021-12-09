const tailwindColors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const deprecatedV3Colors = [
  'coolGray',
  'lightBlue',
  'warmGray',
  'trueGray',
  'blueGray',
];

const tailwindColorsV3 = Object.fromEntries(
  Object.entries(tailwindColors).filter(
    ([name, value]) => !deprecatedV3Colors.includes(name)
  )
);

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...tailwindColorsV3,
      bermuda: '#78dcca',
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
