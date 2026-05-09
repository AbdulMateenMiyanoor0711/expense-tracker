const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mateen@8652",
  database: "expense_tracker",
  port: 3306,
});

const db = connection.promise();

module.exports = db;
