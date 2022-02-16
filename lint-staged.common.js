// @ts-check

const path = require('path');
const escape = require('shell-quote').quote;

const isWin = process.platform === 'win32';

/**
 * Concatenate and escape a list of filenames that can be passed as args to prettier cli
 *
 * Prettier has an issue with special characters in filenames,
 * such as the ones uses for nextjs dynamic routes (ie: [id].tsx...)
 *
 * @link https://github.com/okonet/lint-staged/issues/676
 *
 * @param {string[]} filenames
 * @returns {string} Return concatenated and escaped filenames
 */
const concatFilesForPrettier = (filenames) =>
  filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');

const concatFilesForStylelint = concatFilesForPrettier;

/**
 * Lint-staged command for running eslint in packages or apps.
 * @param {{cwd: string, files: string[], fix: boolean, cache: boolean, rules?: string[], maxWarnings?: number}} params
 */
const getEslintFixCmd = ({ cwd, files, rules, fix, cache, maxWarnings }) => {
  const args = [
    cache ? '--cache' : '',
    fix ? '--fix' : '',
    maxWarnings !== undefined ? `--max-warnings=${maxWarnings}` : '',
    rules !== undefined
      ? '--rule ' + rules.map((r) => `"${r}"`).join('--rule ')
      : '',
    files
      // makes output cleaner by removing absolute paths from filenames
      .map((f) => path.relative(cwd, f))
      .map((f) => `"./${f}"`)
      .join(' '),
  ].join(' ');
  return `eslint ${args}`;
};

module.exports = {
  concatFilesForPrettier,
  concatFilesForStylelint,
  getEslintFixCmd,
};
