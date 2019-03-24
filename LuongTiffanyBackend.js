// Establish Connection
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruzhacks2020'
    // port: 1234
    // database: 'my_db'
});

connection.connect(function (err) {
    if (err) throw err; //connection error
    console.log("Connected!");

    //Database
    connection.query("CREATE DATABASE IF NOT EXISTS cruzhacks2020", function (err, result) {
        if (err) throw err;
        console.log("Database created: cruzhacks2020");
    });

    //table
    var sql = "CREATE TABLE IF NOT EXISTS hackers (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), school VARCHAR(255), major VARCHAR(255), age INT)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created: hackers");
    });
});
    
// connection.end()