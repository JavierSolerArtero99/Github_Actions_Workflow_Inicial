const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");

const token = core.getInput("token");

const bot = new TelegramBot(token, { polling: true });

bot.sendMessage(core.getInput("chat"), core.getInput("message"));

console.log("Mensaje enviado");