const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpasswd",
  database: "employees",
});

module.exports = db;
