import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Book } from "./book.entity";

@Entity()
export class Genre {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @ManyToMany(() => Book, (book) => book.genres)
  books!: Book[];
}
