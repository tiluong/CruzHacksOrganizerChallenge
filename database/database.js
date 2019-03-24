// Establish Connection

var mysql = require('mysql')

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruzhacks2020',
    port: 3306 //local
});

pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    //Database
    connection.query("CREATE DATABASE IF NOT EXISTS cruzhacks2020", function (err, result) {
        if (err) throw err;
        console.log("Database created: cruzhacks2020");
    });

    //table, email as primary key, name cannot be null
    var sql = "CREATE TABLE IF NOT EXISTS hackers (name VARCHAR(255) NOT NULL, email VARCHAR(255) PRIMARY KEY, school VARCHAR(255), major VARCHAR(255), age INT)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created: hackers");
    });
});

module.exports = pool;
// connection.end()