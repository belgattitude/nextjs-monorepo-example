module.exports = function (api) {
  //const isTest = api.env('test');
  //const isDevelopment = api.env('development');
  //const isServer = api.caller((caller) => caller?.isServer);
  //const isCallerDevelopment = api.caller((caller) => caller?.isDev);

  api.cache(true);

  const emotionJsxPresets = [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ];

  return {
    presets: emotionJsxPresets,
    plugins: ['@emotion/babel-plugin'],
  };
};
