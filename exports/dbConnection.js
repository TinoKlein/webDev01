const mysql   = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'yourUsername',
    password : 'yourPass',
    database : 'db'
});

connection.connect();

module.exports = connection;