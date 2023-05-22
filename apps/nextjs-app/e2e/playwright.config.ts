// @ts-check

import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// Reference: https://playwright.dev/docs/test-configuration
/**
 * @type {Partial<import('@playwright/test').PlaywrightTestConfig>}
 */
const config: PlaywrightTestConfig = {
  testDir: '.',
  timeout: 6_000,
  /* Maximum time one test can run for. */
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: `./output`,
  preserveOutput: 'always',
  reporter: [
    ['json', { outputFile: `./.out/reports/test-results.json` }],
    [
      'html',
      {
        outputFolder: `./.out/reports/html`,
        open: 'on-failure',
      },
    ],
  ],

  use: {
    baseURL: 'http://host.docker.internal:3000',
    headless: true,
    // Retry a test if it's failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    contextOptions: {
      ignoreHTTPSErrors: true,
    },
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    // {
    //  name: 'Desktop Firefox',
    //  use: {
    //    ...devices['Desktop Firefox'],
    //  },
    // },
    // {
    //  name: 'Desktop Safari',
    //  use: {
    //    ...devices['Desktop Safari'],
    //  },
    // },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    // Mobile Safari is not supported on CI/Linux yet.
    // {
    //  name: 'Mobile Safari',
    //  use: devices['iPhone 12'],
    // },
  ],
};
export default config;
