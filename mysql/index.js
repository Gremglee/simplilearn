const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'nodemysql',
});

//Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

const app = express();

//Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, (err) => {
        if (err) {
            throw err
        }
        res.send('Database Created');
    });
});

//Create table
app.get('/createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err) => {
        if(err) {
            throw err 
        }
        res.send('Employee table created');
    });
});

//Insert Employee
app.get('/employee1', (req, res) => {
    let post = { name: 'Jake Smith', designation: 'Chief Executive Office' }
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('Employee added');
    });
});

//Select Employees
app.get('/getemployee', (req, res) => {
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Employee details fetched')
    })
})

//Update employee
app.get('/updateemployee/:id', (req, res) => {
    let newName = 'Updatedname'
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Employee updated')
    })
});

app.listen('3000', () => {
    console.log('Server started on port 3000')
})