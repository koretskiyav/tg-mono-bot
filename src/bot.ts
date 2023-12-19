import TelegramBot from "node-telegram-bot-api";

export const createBot = (token: string) => {
  const bot = new TelegramBot(token, {polling: true});

  bot.setMyCommands([
    { command: '/start', description: 'Start' },
    { command: '/subscribe', description: 'Subscribe' },
  ])

  bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, "Welcome!");
  });

  bot.onText(/\/subscribe/, msg => {
    bot.sendMessage(msg.chat.id, "Subscribed!");
  });

  return bot;
};
