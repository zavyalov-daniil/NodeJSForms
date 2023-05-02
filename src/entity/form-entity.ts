import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "form" })
export class FormEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ name: "created_at" })
  createdAt?: Date;
}
