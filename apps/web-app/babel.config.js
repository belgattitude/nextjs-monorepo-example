module.exports = function (api) {
  //const isTest = api.env('test');
  const isDevelopment = api.env('development');
  const isServer = api.caller((caller) => caller?.isServer);
  const isCallerDevelopment = api.caller((caller) => caller?.isDev);

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

  const whyDidYouRenderPreset = [
    [
      'next/babel',
      {
        'preset-react': {
          importSource:
            !isServer && isCallerDevelopment
              ? '@welldone-software/why-did-you-render'
              : 'react',
        },
      },
    ],
  ];

  const presets =
    isDevelopment || isCallerDevelopment
      ? whyDidYouRenderPreset
      : emotionJsxPresets;

  const plugins = ['@emotion/babel-plugin'];

  return { presets, plugins };
};
