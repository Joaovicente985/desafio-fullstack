"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const node_path_1 = __importDefault(require("node:path"));
require("dotenv/config");
const dataSourceConfig = () => {
    const entitiesPath = node_path_1.default.join(__dirname, "entities/**.{js,ts}");
    const migrationsPath = node_path_1.default.join(__dirname, "migrations/**.{js,ts}");
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
const appDataSource = new typeorm_1.DataSource(dataSourceConfig());
exports.appDataSource = appDataSource;
