// @ts-check

/**
 * lint-staged/prettier has an issue with special characters in filenames,
 * like the ones uses for nextjs dynamic routes (ie: [id].tsx...)
 * @link https://github.com/okonet/lint-staged/issues/676
 */
const escape = require('shell-quote').quote;
const { ESLint } = require('eslint');

const cli = new ESLint();
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
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    return [
      // react-hooks/exhaustive-deps must be kept off, a change made here can
      // potentially break your code
      `eslint --rule 'react-hooks/exhaustive-deps: off' --max-warnings=25 --cache --fix ${filenames
        .filter((file) => !cli.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(' ')}`,
    ];
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${escapeFileNamesForPrettier(filenames)}`];
  },
};

module.exports = rules;
