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

function addDepartment() {
    const sql = `INSERT INTO `;
}

module.exports = { displayDepartments, displaysRoles, displaysEmployees };