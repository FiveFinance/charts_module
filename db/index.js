let mysql = require('mysql');
let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database: "stockDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = connection;
