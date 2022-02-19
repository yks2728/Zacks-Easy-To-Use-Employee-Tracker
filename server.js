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
          "quit",
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
          addADepartment();
          break;
        case "add a role":
          addARole();
          break;
        case "add an employee":
          addAnEmployee();
          break;
        case "update an employee role":
          updateAnEmployeeRole();
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
  inquire
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Would you like to add a department?",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO department (NAME) VALUES (?)",
        response.department,
        function (err, results) {
          console.table(results);
          start();
          console.log(response);
        }
      );
    });
};

const addARole = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Add a title",
      },
      {
        type: "input",
        name: "salary",
        message: "Add a salary",
      },
      {
        type: "input",
        name: "department_id",
        message: "Add a Department Id",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
        [response.title, response.salary, response.department_id],
        function (err, results) {
          console.table(results);
          start();
          console.log(response);
        }
      );
    });
};

const addAnEmployee = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Last Name",
      },
      {
        type: "input",
        name: "role_id",
        message: "Role Id",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Manager Id",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [
          response.first_name,
          response.last_name,
          response.role_id,
          response.manager_id,
        ],
        function (err, results) {
          console.table(results);
          start();
        }
      );
    });
};

const updateAnEmployeeRole = () => {
  db.promise()
    .query("SELECT * FROM employee")
    .then(([response]) => {
      console.log(response);
      let employees = response;
      let choices = employees.map(({ id, first_name }) => {
        return { name: first_name, value: id };
      });
      inquire
        .prompt([
          {
            type: "list",
            name: "employee_id",
            message: "Select an Employee",
            choices: choices,
          },
        ])
        .then((response) => {
          console.log(response);
          const employee_id = response.employee_id;
          db.promise()
            .query("SELECT * FROM role")
            .then(([res]) => {
              console.log(res);
              let role = res;
              let choices = role.map(({ id, title }) => {
                return { name: title, value: id };
              });
              inquire
                .prompt([
                  {
                    type: "list",
                    name: "role",
                    message: "Select a role",
                    choices: choices,
                  },
                ])
                .then((response) => {
                  db.query(
                    "UPDATE employee SET role_id = ? WHERE id = ?",
                    [response.role, employee_id],
                    function (err, results) {
                      console.table(results);
                      start();
                    }
                  );
                });
            });
        });
    });
};
