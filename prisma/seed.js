const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const faker = require("faker");

async function main() {
  await Promise.all(
    Array(1000)
      .fill(true)
      .map(() =>
        prisma.person.create({
          data: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            role: faker.name.jobTitle(),
            bio: faker.lorem.paragraph(),
            imageUrl: faker.image.people(),
          },
        })
      )
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
