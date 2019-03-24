// for testing
// generate data in the hackers database, should see all data with curl -X GET..

const db = require('./../database/database');
// hackers (name VARCHAR(255), email VARCHAR(255) PRIMARY KEY, school VARCHAR(255), major VARCHAR(255), age INT)
function generateData() {
    // db.query('DELETE FROM `hackers`', (error, result) => {
    //     if (error) throw error
    // })

    var post = { name: 'John Doe', email: 'jdoe@ucsc.edu', school: 'UCSC', major: 'History', age: 21 }
    db.query('INSERT INTO `hackers` SET ?', post, (error, result) => {
        if (error) throw error
    })

    post = { name: 'Tiffany', email: 'tiff@tiff.com', major: 'Math', age: 21 }
    db.query('INSERT INTO `hackers` SET ?', post, (error, result) => {
        if (error) throw error
    })

    var post = { name: 'hi hi', email: 'g@gmail.com', school: 'UCLA', major: 'Computer Engineering', age: 90 }
    db.query('INSERT INTO `hackers` SET ?', post, (error, result) => {
        if (error) throw error
    })
    console.log('Hacker data generated.')
}

module.exports = { generateData } ;

