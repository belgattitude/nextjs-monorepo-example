import { assertParsableDsn } from '@soluble/dsn-parser';
import { PostgreSqlContainer, StartedTestContainer } from 'testcontainers';

// Here configure all ephemeral docker containers you need for e2e
const registeredE2eContainers = {
  postgresql13: {
    image: 'postgres:13.4-alpine',
    port: 5432,
    dsnProtocol: 'postgresql',
  },
  postgresql14: {
    image: 'postgres:14.0-alpine',
    port: 5432,
    dsnProtocol: 'postgresql',
  },
} as const;

type RegisteredContainers = keyof typeof registeredE2eContainers;

type E2eTestContainer = { container: StartedTestContainer; dsn: string };

export class E2eDockerContainers {
  static _instances: Map<RegisteredContainers, E2eTestContainer> = new Map();

  static async startPostgresqlContainer(
    key: RegisteredContainers
  ): Promise<E2eTestContainer> {
    if (!E2eDockerContainers._instances.has(key)) {
      const { image, port, dsnProtocol } = registeredE2eContainers[key];

      console.log(
        `Starting PostgreSqlContainer "${key}" with port "${port}"...`
      );

      const ctn = await new PostgreSqlContainer(image)
        .withExposedPorts(port)
        .start();

      const creds = `${ctn.getUsername()}:${ctn.getPassword()}`;

      const dsn = `${dsnProtocol}://${creds}@${ctn.getHost()}:${ctn.getMappedPort(
        port
      )}/${ctn.getDatabase()}?schema=public`;

      console.log('PostgreSqlContainer started:', key, dsn);

      assertParsableDsn(dsn, `Returned dsn is invalid or unsupported: ${dsn}`);

      E2eDockerContainers._instances.set(key, {
        container: ctn,
        dsn,
      });
    }
    return E2eDockerContainers._instances.get(key) as E2eTestContainer;
  }

  static async shutdownAll(timeout = 5000): Promise<true> {
    for await (const [key, { container }] of E2eDockerContainers._instances) {
      try {
        await container.stop({
          timeout: timeout,
        });
      } catch (e) {
        console.error('Cannot stop TestContainer', key, e);
      } finally {
        E2eDockerContainers._instances.delete(key);
      }
    }
    return true;
  }
}
