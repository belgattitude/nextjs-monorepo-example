const filePatterns = {
  test: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
  anyCode: ['*.{js,jsx,mjs,jsx,tsx}'],
  typescriptCodeWithJsx: ['*.{ts,tsx}'],
  typescriptCodeWithoutJsx: ['*.ts'],
  typescriptAndJsCodeWithoutJsx: ['*.{js,mjs,ts}'],
  typescriptAndJsCodeWithJsx: ['*.{js,mjs,ts,jsx,tsx}'],
  storybook: ['**/*.stories.{ts,tsx,mdx}'],
  nonCodeFile: [
    '**/?(*.)+(test).{js,jsx,ts,tsx}',
    '**/?(*.)+(bench).{js,jsx,ts,tsx}',
    '*.stories.{js,ts,jsx,tsx}',
  ],
};
module.exports = {
  filePatterns,
};
