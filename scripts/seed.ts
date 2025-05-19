import "reflect-metadata";
import { getAppDataSource } from "../src/lib/database/init-data-source";
import { Author } from "../src/lib/entities/author.entity";
import { Book } from "../src/lib/entities/book.entity";
import { Genre } from "../src/lib/entities/genre.entity";
import { faker } from "@faker-js/faker";

async function seed() {
  console.log("Seeding database...");

  const appDataSource = await getAppDataSource();
  console.log("Connected to database.");

  console.log("Resetting database...");
  await appDataSource.dropDatabase();
  await appDataSource.synchronize();

  const authorRepo = appDataSource.getRepository(Author);
  const genreRepo = appDataSource.getRepository(Genre);
  const bookRepo = appDataSource.getRepository(Book);

  console.log("Seeding genres...");
  const genreNames = [
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Horror",
    "Mystery",
  ];
  const genres = genreNames.map((name) => genreRepo.create({ name }));
  await genreRepo.save(genres);

  console.log("Seeding authors...");
  const authors: Author[] = Array.from({ length: 85 }).map(() => {
    const sexType = faker.person.sexType();
    return authorRepo.create({
      name: faker.person.fullName({ sex: sexType }),
      imageUrl: faker.image.personPortrait({ sex: sexType, size: 256 }),
    });
  });
  await authorRepo.save(authors);

  console.log("Seeding books...");
  const books: Book[] = Array.from({ length: 325 }).map(() => {
    const author = faker.helpers.arrayElement(authors);
    const bookGenres = faker.helpers.arrayElements(
      genres,
      faker.number.int({ min: 1, max: 3 })
    );

    return bookRepo.create({
      title: faker.book.title(),
      description: faker.lorem.paragraphs({ min: 2, max: 6 }),
      coverUrl: faker.image.urlPicsumPhotos({
        width: 500,
        height: 700,
        blur: 0,
      }),
      author,
      genres: bookGenres,
    });
  });

  await bookRepo.save(books);

  console.log("✅ Seed complete.");
  await appDataSource.destroy();
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
});
