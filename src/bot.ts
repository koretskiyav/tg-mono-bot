import TelegramBot from "node-telegram-bot-api";
import { User } from './models/user';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'TELEGRAM_BOT_TOKEN';

export const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});

bot.setMyCommands([
  { command: '/start', description: 'Start' },
  { command: '/subscribe', description: 'Subscribe' },
  { command: '/unsubscribe', description: 'Unsubscribe' },
])

bot.onText(/\/start/, handleStart);
bot.onText(/\/subscribe/, handleSubscribe);
bot.onText(/\/unsubscribe/, handleUnsubscribe);

async function handleStart(msg: TelegramBot.Message) {
  const chatId = `${msg.chat.id}`;
  try {
    if (!await User.findOne({ where: { chatId }})) {
      await User.create({ chatId });
    }
    bot.sendMessage(chatId, "Welcome!");
  } catch(err) {
    console.log(err);
  }
}

async function handleSubscribe(msg: TelegramBot.Message) {
  const chatId = `${msg.chat.id}`;
  try {
    const user = await User.findOne({ where: {chatId }});
    if (user) {
      user.subscribed = true;
      await user.save();
      bot.sendMessage(msg.chat.id, "Subscribed!");
    } else {
      bot.sendMessage(msg.chat.id, "Not Found!");
    }
  } catch(err) {
    console.log(err);
  }
}

async function handleUnsubscribe(msg: TelegramBot.Message) {
  const chatId = `${msg.chat.id}`;
  try {
    const user = await User.findOne({ where: {chatId }});
    if (user) {
      user.subscribed = false;
      await user.save();
      bot.sendMessage(msg.chat.id, "Unsubscribed!");
    } else {
      bot.sendMessage(msg.chat.id, "Not Found!");
    }
  } catch(err) {
    console.log(err);
  }
}