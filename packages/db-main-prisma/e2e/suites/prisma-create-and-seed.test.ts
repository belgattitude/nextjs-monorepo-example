import {
  execSync,
  ExecSyncOptionsWithStringEncoding,
  SpawnSyncReturns,
} from 'child_process';
import { PrismaManager, PrismaClientDbMain } from '@your-org/db-main-prisma';
import { E2eDockerContainers } from '../test-containers';

// Quick util
const execCmd = async (
  cmd: string,
  options: ExecSyncOptionsWithStringEncoding
): Promise<{
  stdout?: string;
  stderr?: string;
  status?: number | null;
}> => {
  try {
    const stdout = await execSync(cmd, options);
    return {
      stdout,
    };
  } catch (e: unknown) {
    const error = e as unknown as Error & SpawnSyncReturns<Buffer>;
    return {
      status: error.status,
    };
  }
};

describe('prisma cli commands', () => {
  describe('Create and seed', () => {});
  it('should load seed data in a newly created db', async () => {
    const ctn = await E2eDockerContainers.startPostgresqlContainer(
      'postgresql13'
    );
    const { dsn } = ctn;

    const options: ExecSyncOptionsWithStringEncoding = {
      encoding: 'utf-8',
      env: {
        PRISMA_DATABASE_URL: dsn,
      },
    };

    const createResult = await execCmd('yarn prisma db push', options);

    expect(createResult.status).toBeUndefined();
    expect(createResult.stdout).toMatch(
      /your database is now in sync with your schema/i
    );

    const seedResult = await execCmd('yarn prisma db seed', options);

    expect(seedResult.status).toBeUndefined();
    expect(seedResult.stdout).toMatch(/seeding finished/i);

    const prisma = PrismaManager.getDevSafeInstance('test', () => {
      return new PrismaClientDbMain({
        datasources: {
          db: {
            url: dsn,
          },
        },
      });
    });

    const poetry = await prisma.poem.findFirst();
    expect(poetry).toBeDefined();
  });
});
