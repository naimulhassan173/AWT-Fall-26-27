import { DataSource } from "typeorm";
import { dataSourceOptions } from "../config/database.config";

async function migrate() {
  const dataSource = new DataSource(dataSourceOptions);
  try {
    await dataSource.initialize();
    const migrations = await dataSource.runMigrations();
    console.log(`Migration completed: ${migrations.length} new migration(s)`);
  } finally {
    if (dataSource.isInitialized) await dataSource.destroy();
  }
}

migrate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
