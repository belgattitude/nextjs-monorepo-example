// Disabled in favour of nextjs swc compiler
// In case of issues, or when using an unsupported plugin
// rename to babel.config.js and add `@babel/core` to dependencies

module.exports = function (api) {
  // const isTest = api.env('test');
  // const isDevelopment = api.env('development');
  // const isServer = api.caller((caller) => caller?.isServer);
  // const isCallerDevelopment = api.caller((caller) => caller?.isDev);

  api.cache(true);

  return {
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        },
      ],
    ],
    plugins: ['@emotion/babel-plugin'],
  };
};
