import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "author" })
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "text", name: "image_url" })
  imageUrl!: string;
}
