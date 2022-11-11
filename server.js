const { beforeAll } = require("jest-circus");
const connection = require("./routes/connection.js");
const inquirer = require("inquirer");
//const { red } = require("color-name");
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

// //view department, role, and employee
function viewDepartment() {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}
function viewRole() {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}
function viewEmployee() {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
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

// //add department, role, and employee
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
        "INSERT INTO department SET",
        { department: res.department_id },
        (err, res) => {
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
        name: "role",
        message: "what role?",
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary?",
      },
      {
        type: "input",
        name: "department",
        message: "what department?",
      },
    ])
    .then(function (res) {
      db.query(
        "INSERT INTO role SET",
        {
          role: res.role_id,
          salary: res.salary,
          department: res.department_id,
        },
        (err, res) => {
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
        name: "role",
        message: "what role?",
      },
      {
        type: "input",
        name: "manager",
        message: "which manager?",
      },
    ])
    .then(function (res) {
      db.query(
        "INSERT INTO employee SET",
        {
          first_name: res.first_name,
          last_name: res.last_name,
          role: res.role_id,
          manager: res.manager_id,
        },
        (err, res) => {
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
        name: "employee_id",
        message: "Employee ID:",
      },
      {
        type: "input",
        name: "employee_role",
        message: "Employee Role:",
      },
    ])
    .then(function (res) {
      db.query(
        "UPDATE employee",
        [
          { employee_id: res.employee_id },
          { employee_role: res.employee_role },
        ],
        (err, res) => {
          promptUser();
        }
      );
    });
}

//update employee
