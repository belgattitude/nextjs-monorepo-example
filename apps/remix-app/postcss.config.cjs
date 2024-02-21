// Customized postcss
// @link https://nextjs.org/docs/advanced-features/customizing-postcss-config
// @link https://tailwindcss.com/docs/using-with-preprocessors

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
