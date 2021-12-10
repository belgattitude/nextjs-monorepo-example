import path from 'path';
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const port = 3000;
let webServerCmd = `yarn dev -p ${port}`;
switch (process.env.E2E_PLAYWRIGHT_MODE) {
  case 'BUILD_AND_START':
    webServerCmd = `yarn build && yarn start -p ${port}`;
    break;
  case 'SKIP_BUILD_AND_START':
    webServerCmd = `yarn start -p ${port}`;
    break;
}

const outputDir = path.join(__dirname, 'e2e/.out');

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, 'e2e'),
  timeout: 30_000,
  retries: 2,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: outputDir,
  preserveOutput: 'always',
  reporter: [
    process.env.CI ? ['github'] : ['list'],
    ['json', { outputFile: `${outputDir}/test-results.json` }],
    [
      'html',
      {
        outputFolder: `${outputDir}/html`,
        open: process.env.CI ? 'never' : 'on-failure',
      },
    ],
  ],

  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests

  webServer: {
    command: webServerCmd,
    port: 3000,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
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
    //   name: 'Desktop Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
};
export default config;
