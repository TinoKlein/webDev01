const mysql   = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'steffi13',
    database : 'webdev1'
});

connection.connect();

module.exports = connection;