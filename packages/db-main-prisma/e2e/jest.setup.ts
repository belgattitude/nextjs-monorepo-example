import { E2eDockerContainers } from './test-containers';

jest.setTimeout(30_000);

afterAll(async () => {
  await E2eDockerContainers.shutdownAll();
});

export {};
