import "reflect-metadata";
import { AppDataSource } from "../src/lib/db/data-source";
import { Author } from "../src/lib/db/entities/author.entity";
import { faker } from "@faker-js/faker";

async function seed() {
  console.log("Seeding database...");

  console.log("Connecting to database...");
  await AppDataSource.initialize();
  const authorsRepo = AppDataSource.getRepository(Author);

  console.log("Dropping existing tables and re-create...");
  await AppDataSource.dropDatabase();
  await AppDataSource.synchronize();

  console.log("Creating new tables...");
  const authors: Author[] = Array.from({ length: 10 }, (_, i) => {
    const sexType = faker.person.sexType();

    return {
      id: faker.string.uuid(),
      name: faker.person.fullName({ sex: sexType }),
      imageUrl: faker.image.personPortrait({ sex: sexType, size: 256 }),
    };
  });

  await authorsRepo.save(authors);

  console.log("✅ Seed complete");
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
});
