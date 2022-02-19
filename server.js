const require = ("inquirer");
const employeeData = [];

const addData = () => {
    return (
        inquire
            .prompt([
                {
                    type: "choice",
                    name: "companyData",
                    message: "Choose From the Following Options",
                    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
                },
                {
                    
                }
            ])
    )
}