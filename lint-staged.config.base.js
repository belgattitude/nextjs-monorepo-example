// @ts-check

/**
 * lint-staged/prettier has an issue with special characters in filenames,
 * like the ones uses for nextjs dynamic routes (ie: [id].tsx...)
 * @link https://github.com/okonet/lint-staged/issues/676
 */
const escape = require('shell-quote').quote;

const isWin = process.platform === 'win32';

/**
 * @param {string[]} filenames
 */
const escapeFileNamesForPrettier = (filenames) =>
  filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');

/**
 * @type {Record<string, (filenames: string[]) => string[]>}
 */
const rules = {
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${escapeFileNamesForPrettier(filenames)}`];
  },
};

module.exports = rules;
