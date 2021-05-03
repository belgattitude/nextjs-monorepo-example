module.exports = {
  env: {
    development: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {},
            'transform-runtime': {},
            'styled-jsx': {},
            'class-properties': {},
          },
        ],
        //['@emotion/babel-preset-css-prop'],
      ],
      //plugins: [],
    },
    production: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {},
            'transform-runtime': {},
            'styled-jsx': {},
            'class-properties': {},
          },
        ],
        //['@emotion/babel-preset-css-prop'],
      ],
      //plugins: [],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {},
            'transform-runtime': {},
            'styled-jsx': {},
            'class-properties': {},
          },
        ],
        //['@emotion/babel-preset-css-prop'],
      ],
      //plugins: [],
    },
  },
};
