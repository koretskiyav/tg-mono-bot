import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user";

export const db = new Sequelize(
  process.env.POSTGRES_DATABASE || "POSTGRES_DATABASE",
  process.env.POSTGRES_USER || "POSTGRES_USER",
  process.env.POSTGRES_PASSWORD || "POSTGRES_PASSWORD",
  {
    models: [User],
    dialect: "postgres",
    host: process.env.POSTGRES_HOST || "POSTGRES_HOST",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    dialectOptions: {
      ssl: true,
    }
  }
);
