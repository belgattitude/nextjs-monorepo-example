// @ts-check
const path = require('path');

const { createRequestHandler } = require('@remix-run/vercel');

module.exports = createRequestHandler({
  build: require(path.resolve(__dirname, '_build')),
});
