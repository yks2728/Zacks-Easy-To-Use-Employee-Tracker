const path = require("path");
const inquire = require("inquirer");
const employee = [];
const db = require("./db/connection.js");

const start = () => {
  return inquire
    .prompt([
      {
        type: "list",
        name: "companyData",
        message: "Choose From the Following Options",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "quit"
        ],
      },
    ])
    .then((results) => {
      console.log(results);
      switch (results.companyData) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          viewAllEmployees();
          break;
        case "add a department":
          addADepartment;
          break;
        case "add a role":
          addARole;
          break;
        case "add an employee":
          addAnEmployee;
          break;
        case "update an employee role":
          updateAnEmployeeRole;
          break;
        default: 
          process.exit(1);
      }
    });
};
start();

const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    start();
  });
};

const viewAllRoles = () => {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    start();
  });
};

const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    start();
  });
};

const addADepartment = () => {
  db.query("INSERT INTO department", function (err, results) {
    console.table(results);
    start();
  });
};

const addARole = () => {
  db.query("INSERT INTO role", function (err, results) {
    console.table(results);
    start();
  });
};

const addAnEmployee = () => {
  db.query("INSERT INTO employee", function (err, results) {
    console.table(results);
    start();
  });
};

const updateAnEmployeeRole =() => {
  db.query("UPDATE employee SET role_id = ?")
}


