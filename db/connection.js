const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // your MySQL username,
    user: "root",
    // your MySQL password
    password: "DylanSophie1219++",
    database: "employees",
  },
  console.log("Connected to the employees database.")
);

module.exports = db;