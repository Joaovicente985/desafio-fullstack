import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path";
import "dotenv/config";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists.");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const appDataSource: DataSource = new DataSource(dataSourceConfig());

export { appDataSource };
