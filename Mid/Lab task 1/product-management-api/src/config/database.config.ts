import "dotenv/config";
import { DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "user_management_lab",
  schema: process.env.DB_SCHEMA || "public",
  entities: [__dirname + "/../modules/**/entities/*.entity.{ts,js}"],
  migrations: [__dirname + "/../database/migrations/*.{ts,js}"],
  synchronize: false,
  logging: false,
};

export default dataSourceOptions;
