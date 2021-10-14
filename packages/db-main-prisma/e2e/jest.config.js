// @ts-check
'use strict';

const { defaults: tsjPreset } = require('ts-jest/presets');

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  name: 'db-main-prisma:e2e',
  displayName: 'db-main-prisma:e2e',
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
