import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { join } from 'node:path';

import { Student } from './students/student.entity';
import { Supervisor } from './supervisors/supervisor.entity';
import { ResearchOpportunity } from './research-opportunities/research-opportunity.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [Student, Supervisor, ResearchOpportunity],
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],

  synchronize: false,
  migrationsRun: false,
});

export default dataSource;