import type { PrismaDbMain as Prisma } from '../';
import { AbstractSeed } from '../lib/AbstractSeed';

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    username: 'belgattitude',
    email: 'belgattitude@gmail.com',
    Post: {
      create: [
        {
          title: 'Nextjs monorepo example',
          slug: 'first-post',
          link: 'https://github.com/belgattitude/nextjs-monorepo-example',
          content: 'Hello world',
          image:
            'https://images.unsplash.com/photo-1625904835711-fa25795530e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          publishedAt: new Date(),
        },
      ],
    },
  },
];

export class UserSeeds extends AbstractSeed {
  execute = async (): Promise<void> => {
    for (const u of userData) {
      const { email, username, ...userNonUnique } = u;
      const user = await this.prisma.user.upsert({
        where: { email },
        update: userNonUnique,
        create: u,
      });
      this.log('UPSERT', `User ${user.id} - ${user.email} - ${user.password}`);
    }
  };
}
