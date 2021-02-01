const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");
const github = require("@actions/github");

const token = core.getInput("token");
const bot = new TelegramBot(token, { polling: false });

try {
  bot.sendMessage(
    core.getInput("chat"),
    `${core.getInput("message")}
      GitHub Information:
      - Commit name: ${git.head_commit.author.name}
      - Commit message: ${git.head_commit.message}
      - Username: ${git.head_commit.author.username}
      - Email: ${git.head_commit.author.email}`
  );
} catch (error) {
  core.setFailed(error.message);
}

console.log("Mensaje enviado");
