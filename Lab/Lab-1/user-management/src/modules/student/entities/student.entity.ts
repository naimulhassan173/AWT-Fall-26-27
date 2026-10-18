import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "students" })
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}


