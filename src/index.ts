import * as dotenv from 'dotenv';
dotenv.config();
export { bot } from './bot';
import { db } from './db';

const start = () => {
  try {
    db.authenticate();
    db.sync();
  } catch (err) {
    console.log(err);
  }
};

start();
