const db = require('../db/connection');
const cTable = require('console.table');

// displays table with console.table
function displayDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, row) => {
        table = cTable.getTable(row)
        console.table(table);
        //console.log(row);
    });
}

function displaysRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, row) => {
        table = cTable.getTable(row)
        console.table(table);
    });
}

function displaysEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, row) => {
        table = cTable.getTable(row)
        console.table(table);
    });
}

function addDepartment(name) {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [name];

    db.query(sql, params, (err, result) => {
        console.log(`Added ${name} to departments`);
    });
}

function addRole(title, salary, department_id) {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [title, salary, department_id];

    db.query(sql, params, (err, result) => {
        console.log(`Added ${title} to Roles`);
    });
}

function addEmployee(first_name, last_name, role_id, manager_id) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [first_name, last_name, role_id, manager_id];

    db.query(sql, params, (err, result) => {
        console.log(`Added ${first_name} ${last_name} to Employees`);
    });
}


module.exports =
    { displayDepartments, displaysRoles, displaysEmployees, addDepartment, addRole, addEmployee };