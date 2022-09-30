// @ts-check

const tsConfigFile = './tsconfig.e2e.json';
const { getJestCachePath } = require('../../../cache.config');

const packageJson = require('../package.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  displayName: `${packageJson.name}:e2e`,
  cacheDirectory: getJestCachePath(`${packageJson.name}:e2e`),
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/e2e/jest.setup.ts'],
  verbose: true,
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: tsConfigFile,
      },
    ],
  },
  rootDir: '../',
  testMatch: ['<rootDir>/e2e/suites/**/*.test.ts'],
};
module.exports = config;
