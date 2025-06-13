// utils/inputHelper.js
const readline = require("readline-sync");

function ask(question) {
  return readline.question(question);
}

module.exports = ask;
