const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");

const token = core.getInput("token");
const bot = new TelegramBot(token, { polling: true });

try {
  bot.sendMessage(core.getInput("chat"), core.getInput("message"));
} catch (error) {
  core.setFailed(error.message);
}

console.log("Mensaje enviado");

// core.setOutput("response", "Mensaje enviado");
