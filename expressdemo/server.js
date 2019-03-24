// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3306;
const db = require('./../databaseQueries'); // way to access functions in databaseQueries.js

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// http://localhost:3306/
app.get('/', (request, response) => {
  response.json({ info: 'Welcome to the hacker database!' })
})

// http://localhost:3306/hackers/
app.get('/hackers', (request, response) => {
  db.query('SELECT * FROM `hackers`', (error, result) => {
    if (error) throw error;
    response.send(result);
  });
});

app.put('/hackers', (request, response) => {
  db.query('INSERT INTO `hackers` SET ?', request.body, (error, result) => {
    if (error) throw error;
    response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});

app.post('/hackers', (request, response) => {
  db.query('INSERT INTO `hackers` SET ?', request.body, (error, result) => {
    if (error) throw error;
    response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});

app.listen(port, function(){
  console.log('Connected to port' + port);
});