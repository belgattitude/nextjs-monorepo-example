// @ts-check

const { defaults: tsjPreset } = require('ts-jest/presets');

const { getJestCachePath } = require('../../../cache.config');
const packageJson = require('../package.json');

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  name: `${packageJson.name}:e2e`,
  cacheDirectory: getJestCachePath(`${packageJson.name}:e2e`),
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/e2e/jest.setup.ts'],
  verbose: true,
  transform: {
    ...tsjPreset.transform,
  },
  rootDir: '../',
  testMatch: ['<rootDir>/e2e/suites/**/*.test.ts'],
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: './e2e/tsconfig.e2e.json',
    },
  },
};
module.exports = config;
