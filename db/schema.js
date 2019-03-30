const db = require('./index.js');


/* db.query("CREATE DATABASE stockDB", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

~* DATABASE ALREADY CREATED *~ UNCOMMENT TO CREATE AGAIN

*/

var sql = "CREATE TABLE pricetable (name VARCHAR(255), date DATE, price INT)"

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });


var data = "INSERT INTO pricetable (name, date, price) VALUES ('MSFT', '2019-03-29')";
    con.query(data, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });


// module.exports = Blog;
