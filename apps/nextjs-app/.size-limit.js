// Just a basic example for size limit with simple file preset
// @link https://github.com/ai/size-limit

let manifest;
try {
  manifest = require('./.next/build-manifest.json');
} catch (e) {
  throw new Error(
    'Cannot find a NextJs build folder, did you forget to build ?'
  );
}
const pages = manifest.pages;

const limitCfg = {
  defaultSize: '105kb',
  pages: {
    '/': '140kb',
    '/404': '105kb',
    '/_app': '162kb',
    '/_error': '105kb',
    '/_monitor/sentry/csr-page': '105kb',
    '/_monitor/sentry/ssr-page': '105kb',
    '/_monitor/preview/error-page': '105kb',
    '/admin': '115kb',
    '/auth/login': '130kb',
    '/home': '122kb',
  },
};
const getPageLimits = () => {
  let pageLimits = [];
  for (const [uri, paths] of Object.entries(pages)) {
    pageLimits.push({
      name: `Page '${uri}'`,
      limit: limitCfg.pages?.[uri] ?? limitCfg.defaultSize,
      path: paths.map((p) => `.next/${p}`),
    });
  }
  return pageLimits;
};

module.exports = [
  ...getPageLimits(),
  {
    name: 'CSS',
    path: ['.next/static/css/**/*.css'],
    limit: '10 kB',
  },
];
