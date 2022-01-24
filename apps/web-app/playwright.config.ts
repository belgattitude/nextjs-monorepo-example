import path from 'path';
import { Env, loadEnvConfig } from '@next/env';
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import pc from 'picocolors';

const outputDir = path.join(__dirname, 'e2e/.out');

const webServerPort = 3000;

function getWebserverConfig(port = webServerPort) {
  switch (process.env.E2E_PLAYWRIGHT_MODE) {
    case 'BUILD_AND_START':
      return {
        cmd: `yarn build && yarn start -p ${port}`,
        timeout: 120_000,
      };
    case 'SKIP_BUILD_AND_START':
      return {
        cmd: `yarn start -p ${port}`,
        timeout: 60_000,
      };
    default:
      return {
        cmd: `yarn dev -p ${port}`,
        timeout: 60_000,
      };
  }
}

function getNextJsEnv(): Env {
  const { combinedEnv, loadedEnvFiles } = loadEnvConfig(__dirname);
  loadedEnvFiles.forEach((file) => {
    `${pc.green('notice')}- Loaded nextjs env ${file.path}`;
  });
  return combinedEnv;
}

const webServerConfig = getWebserverConfig(webServerPort);

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
    command: webServerConfig.cmd,
    port: webServerPort,
    timeout: webServerConfig.timeout,
    reuseExistingServer: !process.env.CI,
    env: getNextJsEnv(),
  },

  use: {
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
