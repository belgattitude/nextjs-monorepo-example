// @ts-check
const { concatFilesForPrettier } = require('./lint-staged.common.js');
/**
 * This is the base lint-staged rules config. It will be overridden by any
 * valid lint-staged.config.js file in the monorepo apps and packages.
 * @see https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo
 *
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{json,md,mdx,css,html,yml,yaml,scss,ts,js,tsx,jsx,mjs}': (
    filenames
  ) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
