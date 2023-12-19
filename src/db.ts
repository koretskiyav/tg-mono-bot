import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user';

const POSTGRES_URL = process.env.POSTGRES_URL || 'POSTGRES_URL';

export const db = new Sequelize(POSTGRES_URL, { models: [User] })

