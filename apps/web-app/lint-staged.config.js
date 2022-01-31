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
      // when autofixing staged-files a good tip is to disable react-hooks/exhaustive-deps, cause a
      // a change here can potentially break things without proper visibility.
      rules: ['react-hooks/exhaustive-deps: off'],
      maxWarnings: 25,
      files: filenames,
    });
    /*
    return [
      // react-hooks/exhaustive-deps must be kept off, a change made here can potentially break your code
      `${getYarnCmdInWorkingDir(
        __dirname
      )} eslint --rule 'react-hooks/exhaustive-deps: off' --max-warnings=25 --cache --fix ${filenames
        .map((f) => path.relative(__dirname, f))
        .map((f) => `"${f}"`)
        .join(' ')}`,
    ];

     */
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
