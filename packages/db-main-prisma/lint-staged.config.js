// @ts-check

const {
  concatFilesForPrettier,
  getEslintFixCmd,
} = require('../../lint-staged.common.js');

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    return getEslintFixCmd({
      cwd: __dirname,
      fix: true,
      cache: true,
      maxWarnings: 25,
      files: filenames,
    });
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
