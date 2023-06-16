// Customized postcss
// @link https://nextjs.org/docs/advanced-features/customizing-postcss-config
// @link https://tailwindcss.com/docs/using-with-preprocessors

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    tailwindcss: {},
    ...(isProd
      ? {
          'postcss-preset-env': {
            // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#stability-and-portability
            stage: 3,
            autoprefixer: { grid: true },
          },
        }
      : {}),
  },
};
