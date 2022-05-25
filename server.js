const { displayDepartments, displaysRoles, displaysEmployees } = require('./utils/sql');
const inquirer = require('inquirer');

// starting function
function startApp (){
    inquirer
        .prompt([
            {
                type:'list',
                name: 'selection',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a Department','EXIT']
            }
        ])
        .then(response => {
            //console.log(response);
            responseHandler(response);
        });
}

function responseHandler (response){
    selection = response.selection;
    if (selection === 'View all departments'){
        displayDepartments();
        startApp();
    }
    else if (selection === 'View all roles'){
        displaysRoles();
        startApp();
    }
    else if (selection === 'View all employees'){
        displaysEmployees();
        startApp();
    }
    else if (selection === 'Add a Department'){
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'newDepartment',
                    message: 'Name of new department to add'
                }
            ])
            .then(addition => {
                
            });
    }
    else if (selection === 'EXIT'){
        console.log("Done");
    }
}

startApp();