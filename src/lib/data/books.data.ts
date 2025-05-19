import { getDataSource } from "../database/data-source";
import { Book } from "../entities/book.entity";

const dataSource = await getDataSource();

export const getRandomBooks = async (limit: number): Promise<Book[]> => {
  const bookRepo = dataSource.getRepository(Book);

  const books = await bookRepo
    .createQueryBuilder("book")
    .leftJoinAndSelect("book.author", "author")
    .orderBy("RANDOM()")
    .limit(limit)
    .getMany();

  return books;
};
