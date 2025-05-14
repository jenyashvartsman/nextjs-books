import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Author } from "./author.entity";
import { Genre } from "./genre.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  coverUrl!: string;

  @ManyToOne(() => Author, (author) => author.books)
  author!: Author;

  @ManyToMany(() => Genre, (genre) => genre.books)
  @JoinTable()
  genres!: Genre[];
}
