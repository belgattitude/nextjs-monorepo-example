import { PrismaClientDbMain } from '../src';
import { PoemSeeds, UserSeeds } from '../src/seeds';

const prisma = new PrismaClientDbMain();

async function main() {
  console.log(`Start seeding ...`);

  const userSeeds = new UserSeeds(prisma);
  await userSeeds.execute();

  const companySeeds = new PoemSeeds(prisma);
  await companySeeds.execute();

  console.log(`Seeding finished.`);
}

try {
  await main();
} catch (e) {
  console.error(e);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
