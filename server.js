const { displayDepartments, displaysRoles, displaysEmployees, addDepartment, addRole, addEmployee } = require('./utils/sql');
const inquirer = require('inquirer');

// starting function
function startApp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a Department', 'Add a Role', 'Add a Employee', 'EXIT']
            }
        ])
        .then(response => {
            //console.log(response);
            responseHandler(response);
        });
}

function responseHandler(response) {
    selection = response.selection;
    if (selection === 'View all departments') {
        displayDepartments();
        startApp();
    }
    else if (selection === 'View all roles') {
        displaysRoles();
        startApp();
    }
    else if (selection === 'View all employees') {
        displaysEmployees();
        startApp();
    }
    else if (selection === 'Add a Department') {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newDepartment',
                    message: 'Name of new department to add'
                }
            ])
            .then(addition => {
                addDepartment(addition.newDepartment);
                startApp();
            });
    }
    else if (selection === 'Add a Role') {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Name of new role title to add'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Salary of new role'
                },
                {
                    type: 'input',
                    name: 'department',
                    message: 'Department ID of new role'
                }
            ])
            .then(addition => {
                const {title, salary, department} = addition;
                addRole(title, salary, department);
                startApp();
            });
    }
    else if (selection === 'Add a Employee') {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'First name of new employee'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Last name'
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'Role ID of new employee'
                },
                {
                    type: 'input',
                    name: 'manager',
                    message: "Do they have a manager (TYPE null for none)"
                }
            ])
            .then(addition => {
                const {firstName, lastName, role, manager} = addition;
                //console.log(firstName, lastName, role, manager);
                addEmployee(firstName, lastName, role, manager);
                startApp();
            });
    }
    else if (selection === 'EXIT') {
        console.log("Done");
    }
}

startApp();