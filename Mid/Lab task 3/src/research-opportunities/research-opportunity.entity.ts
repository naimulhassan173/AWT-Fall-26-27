import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('research_opportunities')
export class ResearchOpportunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'varchar', length: 250 })
  requiredSkills!: string;
}