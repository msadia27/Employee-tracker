const { beforeAll } = require("jest-circus");
const connection = require("./routes/connection.js");
const inquirer = require("inquirer");

//initial user questions
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "answer",
        message: "What would you like to do?",
        choices: ["view", "add", "update"],
      },
    ])
    .then(function (res) {
      switch (res.start) {
        case "view":
          view();
          break;
        case "add":
          add();
          break;
        case "update":
          upate();
          break;
      }
    });
}

promptUser();

