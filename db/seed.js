var mysql = require('mysql');
var createData = require('./seederFunction.js')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tradeDeskdb" //leave out first run
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let stockArray = ['AAPL']
    
    // con.query("CREATE DATABASE tradeDeskdb", function (err, result) {
    // if (err) throw err;
    // console.log("Database created");
    // });

    var sql1 = `CREATE TABLE ${stockArray[0]} (time VARCHAR(255), price DECIMAL)`;


    con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });

    let sqlQuery = []
    let values = createData("2019-03-01", stockArray, 110, 190);
    let timePrices = values[0][stockArray]
    for (let time in timePrices){
      sqlQuery.push([time, timePrices[time]])
    }
  var sql2 = `INSERT INTO ${stockArray[0]} (time, price) VALUES ?`;
  con.query(sql2, [sqlQuery], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log(sqlQuery)
  });
});

module.exports = con;
