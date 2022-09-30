// @ts-check
const { pathsToModuleNameMapper } = require('ts-jest');

const tsConfigFile = './tsconfig.jest.json';
const { getJestCachePath } = require('../../cache.config');

const packageJson = require('./package.json');
const { compilerOptions: baseTsConfig } = require('./tsconfig.json');

// Take the paths from tsconfig automatically from base tsconfig.json
// @link https://kulshekhar.github.io/ts-jest/docs/paths-mapping
const getTsConfigBasePaths = () => {
  return baseTsConfig.paths
    ? pathsToModuleNameMapper(baseTsConfig.paths, {
        prefix: '<rootDir>/src',
      })
    : {};
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  displayName: `${packageJson.name}:unit`,
  cacheDirectory: getJestCachePath(packageJson.name),
  testEnvironment: 'jsdom',
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: tsConfigFile,
      },
    ],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    ...getTsConfigBasePaths(),
  },
  // false by default, overrides in cli, ie: yarn test:unit --collect-coverage=true
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}', '!**/*.test.ts'],
};

module.exports = config;
