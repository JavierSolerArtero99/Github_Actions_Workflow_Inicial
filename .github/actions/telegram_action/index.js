const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");
const github = require("@actions/github");

const token = core.getInput("token");
const bot = new TelegramBot(token, { polling: false });

try {
  bot.sendMessage(
    core.getInput("chat"),
    `${core.getInput("message")}\n
      GitHub Information:\n
      - Commit name: ${git.head_commit.author.name}\n
      - Commit message: ${git.head_commit.message}\n
      - Username: ${git.head_commit.author.username}\n
      - Email: ${git.head_commit.author.email}\n`
  );
} catch (error) {
  core.setFailed(error.message);
}

console.log("Mensaje enviado");
