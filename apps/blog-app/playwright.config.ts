import path from 'path';
import { type Env, loadEnvConfig } from '@next/env';
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import pc from 'picocolors';

const webServerModes = ['DEV', 'START', 'BUILD_AND_START'] as const;
type WebServerMode = typeof webServerModes[number];

const isCI = ['true', '1'].includes(process.env?.CI ?? '');
const webServerMode =
  (process.env?.E2E_WEBSERVER_MODE as WebServerMode) ?? 'DEV';

const webServerPort = 3000;
const outputDir = path.join(__dirname, 'e2e/.out');

type WebServerConfig = { cmd: string; timeout: number; retries: number };
const webServerConfigs: Record<WebServerMode, WebServerConfig> = {
  START: {
    cmd: `yarn start -p ${webServerPort}`,
    timeout: isCI ? 90_000 : 30_000,
    retries: isCI ? 3 : 1,
  },
  DEV: {
    cmd: `yarn dev -p ${webServerPort}`,
    timeout: 30_000,
    retries: 1,
  },
  BUILD_AND_START: {
    cmd: `yarn build --no-lint && yarn start -p ${webServerPort}`,
    timeout: isCI ? 180_000 : 120_000,
    retries: isCI ? 3 : 1,
  },
};

if (typeof webServerConfigs?.[webServerMode] !== 'object') {
  const msg = `${pc.red(
    'error'
  )}- Unsupported E2E_WEBSERVER_MODE must be one of './${webServerModes.join(
    ', '
  )}'`;
  console.error(msg);
  throw new Error(msg);
} else {
  console.log(
    `${pc.green('notice')}- Using E2E_WEBSERVER_MODE: '${webServerMode}'`
  );
}

const webServerConfig = webServerConfigs[webServerMode];

function getNextJsEnv(): Env {
  const { combinedEnv, loadedEnvFiles } = loadEnvConfig(__dirname);
  loadedEnvFiles.forEach((file) => {
    console.log(
      `${pc.green('notice')}- Loaded nextjs environement file: './${file.path}'`
    );
  });
  return combinedEnv;
}

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, 'e2e'),
  timeout: webServerConfig.timeout,
  retries: webServerConfig.retries,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: outputDir,
  preserveOutput: 'always',
  reporter: [
    isCI ? ['github'] : ['list'],
    ['json', { outputFile: `${outputDir}/test-results.json` }],
    [
      'html',
      {
        outputFolder: `${outputDir}/html`,
        open: isCI ? 'never' : 'on-failure',
      },
    ],
  ],

  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: webServerConfig.cmd,
    port: webServerPort,
    timeout: webServerConfig.timeout,
    reuseExistingServer: !isCI,
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
