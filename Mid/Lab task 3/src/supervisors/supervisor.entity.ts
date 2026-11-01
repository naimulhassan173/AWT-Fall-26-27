import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('supervisors')
export class Supervisor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 120 })
  name!: string;

  @Column({ type: 'varchar', length: 190 })
  email!: string;

  @Column({ type: 'varchar', length: 150 })
  researchArea!: string;
}