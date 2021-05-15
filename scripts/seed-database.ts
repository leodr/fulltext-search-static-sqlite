import { PrismaClient } from "@prisma/client";
import * as faker from "faker";

const client = new PrismaClient();

async function seed() {
  await client.product.deleteMany();

  await Promise.all(
    Array(1000)
      .fill(true)
      .map(() =>
        client.product.create({
          data: {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
          },
        })
      )
  );
}

seed().then(() => {
  process.exit(0);
});
