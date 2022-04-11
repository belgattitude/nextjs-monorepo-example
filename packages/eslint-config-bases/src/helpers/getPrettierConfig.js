const getPrettierConfig = () => {
  return {
    singleQuote: true,
    semi: true,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    bracketSameLine: false,
    useTabs: false,
    endOfLine: 'lf',
    overrides: [],
  };
};

module.exports = {
  getPrettierConfig,
};
