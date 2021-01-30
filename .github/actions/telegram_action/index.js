const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");

const token = core.getInput("token");
const bot = new TelegramBot(token, { polling: true });

try {
  bot.sendMessage(core.getInput("chat"), core.getInput("message"));
} catch (error) {
  console.log("No se ha podido enviar el mensaje");
  console.log(error);
  core.setFailed(error.message);
}

core.setOutput("response", "Mensaje enviado");
