var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
// // Establish Connection
// var mysql = require('mysql');

// mysql.init('bob', 'secret', 'mysql', 'localhost', 3306);

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'bob',
//     password: 'secret'
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     // connection.query("CREATE DATABASE cruzhacks2020", function (err, result) {
//     //     if (err) throw err;
//     //     console.log("Database created");
//     // });
//     // console.log('connected as id ' + connection.threadId);
// });

// //--------------------

// connection.end();