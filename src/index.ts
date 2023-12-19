import * as dotenv from "dotenv";
import { createBot } from './bot'

dotenv.config();

createBot(process.env.TELEGRAM_BOT_TOKEN!);
