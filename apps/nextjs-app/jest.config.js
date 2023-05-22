// @ts-check
import { getTsconfig } from 'get-tsconfig';
import { pathsToModuleNameMapper } from 'ts-jest';

const tsConfigFile = new URL('./tsconfig.jest.json', import.meta.url).pathname;
const tsConfigPathsFile = new URL('./tsconfig.json', import.meta.url).pathname;

/**
 * Transform the tsconfig paths into jest compatible one (support extends)
 * @param {string} tsConfigFile
 */
const getTsConfigBasePaths = (tsConfigFile) => {
  const parsedTsConfig = getTsconfig(tsConfigFile);
  if (parsedTsConfig === null) {
    throw new Error(`Cannot find tsconfig file: ${tsConfigFile}`);
  }
  const tsPaths = parsedTsConfig.config.compilerOptions?.paths;
  return tsPaths
    ? pathsToModuleNameMapper(tsPaths, {
        prefix: '<rootDir>/',
      })
    : {};
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  displayName: `nextjs-app:unit`,
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  verbose: true,
  rootDir: './src',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: tsConfigFile,
      },
    ],
  },
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/../config/tests/ReactSvgrMock.tsx',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    ...getTsConfigBasePaths(tsConfigPathsFile),
  },
  // false by default, overrides in cli, ie: yarn test:unit --collect-coverage=true
  collectCoverage: false,
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx,js,jsx}',
    '!**/*.test.{js,ts}',
    '!**/__mock__/*',
  ],
};

export default config;
