const { beforeAll } = require("jest-circus");
//const connection = require("./routes/connection.js");
const inquirer = require("inquirer");
//const { red } = require("color-name");
const db = require("./routes/connection.js");
const cTable = require("console.table");
require("dotenv").config();

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  // app.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`);
  // });
  promptUser();
});

//initial user questions
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "promptUser",
        message: "What would you like to do?",
        choices: ["view", "add", "update", "exit"],
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
        case "exit":
          break;
        default:
      }
    });
}

//promptUser();

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
        default:
      }
    });
}

// //view department, role, and employee
function viewDepartment() {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}
function viewRole() {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}
function viewEmployee() {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

//add
function add() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "add",
        message: "What would you like to add?",
        choices: ["department", "role", "employee"],
      },
    ])
    .then(function (res) {
      switch (res.add) {
        case "department":
          addDepartment();
          break;
        case "role":
          addRole();
          break;
        case "employee":
          addEmployee();
          break;
      }
    });
}

//add department, role, and employee
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "what department?",
      },
    ])
    .then(function (res) {
      db.query(
        "INSERT INTO department SET ?",
        { department_name: res.department },
        (err, res) => {
          if (err) throw err;
          promptUser();
        }
      );
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what role title?",
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary?",
      },
      {
        type: "input",
        name: "department_id",
        message: "what department?",
      },
    ])
    .then(function (res) {
      db.query(
        "INSERT INTO role SET ?",
        {
          title: res.title,
          salary: res.salary,
          department_id: res.department_id,
        },
        (err, res) => {
          if (err) throw err;
          promptUser();
        }
      );
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what is the first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "what role?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "which manager?",
      },
    ])
    .then(function (res) {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.first_name,
          last_name: res.last_name,
          role_id: res.role_id,
          manager_id: res.manager_id,
        },
        (err, res) => {
          if (err) throw err;
          promptUser();
        }
      );
    });
}

//update employee
function update() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
      },
      {
        type: "input",
        name: "role_id",
        message: "Employee Role:",
      },
    ])
    .then(function (res) {
      db.query(
        "UPDATE employee SET ? WHERE ?",
        [{ id: res.id }, { role_id: res.role_id }],
        (err, res) => {
          promptUser();
        }
      );
    });
}

//update employee
