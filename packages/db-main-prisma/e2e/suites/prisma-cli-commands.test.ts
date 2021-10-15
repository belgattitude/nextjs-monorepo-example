import { PrismaManager, PrismaClientDbMain } from '@your-org/db-main-prisma';
import execa from 'execa';
import type { Options as ExecaOptions } from 'execa';
import { E2eDockerContainers } from '../test-containers';

describe('prisma cli commands', () => {
  describe('yarn prisma db create and seed', () => {
    it.each(['postgresql13', 'postgresql14'] as const)(
      'should load seed data in a newly created db',
      async (dbKey) => {
        const ctn = await E2eDockerContainers.startPostgresqlContainer(dbKey);
        const { dsn } = ctn;

        const options: ExecaOptions = {
          //encoding: 'utf-8',
          shell: true,
          env: {
            ...process.env,
            PRISMA_DATABASE_URL: dsn,
          },
        };

        const createResult = await execa('yarn prisma db push', options);

        expect(createResult.exitCode).toStrictEqual(0);
        expect(createResult.stdout).toMatch(
          /your database is now in sync with your schema/i
        );

        const seedResult = await execa('yarn prisma db seed', options);

        expect(seedResult.exitCode).toStrictEqual(0);
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
      }
    );
  });
});
