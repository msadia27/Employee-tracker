const { beforeAll } = require("jest-circus");
const connection = require("./routes/connection.js");
const inquirer = require("inquirer");
const { red } = require("color-name");
const db = require("./routes/connection.js");

//initial user questions
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "promptUser",
        message: "What would you like to do?",
        choices: ["view", "add", "update"],
      },
    ])
    .then(function (res) {
      switch (res.promptUser) {
        case "view":
          view();
          break;
        case "add":
          add();
          break;
        case "update":
          update();
          break;
      }
    });
}

promptUser();

//view
function view() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "view",
        message: "What would you like to view?",
        choices: ["department", "role", "employee"],
      },
    ])
    .then(function (res) {
      switch (res.view) {
        case "department":
          viewDepartment();
          break;
        case "role":
          viewRole();
          break;
        case "employee":
          viewEmployee();
          break;
      }
    });
}
