import { PrismaClientDbMain } from '../src';
import { PoemSeeds, UserSeeds } from '../src/seeds';

const prisma = new PrismaClientDbMain();

async function main() {
  console.log(`Start seeding ...`);

  const userSeeds = new UserSeeds(prisma);
  userSeeds.execute();

  const companySeeds = new PoemSeeds(prisma);
  companySeeds.execute();

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
