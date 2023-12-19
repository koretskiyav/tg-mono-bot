import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user";

export const db = new Sequelize({
  database: process.env.POSTGRES_DATABASE || "POSTGRES_DATABASE",
  dialect: "postgres",
  username: process.env.POSTGRES_USER || "POSTGRES_USER",
  password: process.env.POSTGRES_PASSWORD || "POSTGRES_PASSWORD",
  host: process.env.POSTGRES_HOST || "POSTGRES_HOST",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  models: [User],
  dialectOptions: {
    ssl: true,
  },
});
