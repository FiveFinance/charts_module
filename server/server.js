const express = require('express')
const app = express()
var mysql = require('mysql');
const port = 3000
const cors = require('cors')
app.use(cors()); 

//factor out this connection
//import connection from db

//start working on client side code
//handle response to build graph
//smallest success - react component fetches at URL returns data
    //simple React component
    //console.log(results) - of fetch
    //build new Graph from data

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tradeDeskdb"
});

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:stockTicker', function(req, res){
    var stockTicker = req.params.stockTicker
    db.query(`SELECT * FROM ${stockTicker}`, function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        let dataPoints = []
        for (var i = 0; i < results.length; i++){
                var coordinates = {}
                    coordinates.x = i
                    coordinates.y = results[i].price
                dataPoints.push(coordinates)
        }
        res.send(dataPoints)  //creates x and y points out of i and price for graphing
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//results from the sql query


