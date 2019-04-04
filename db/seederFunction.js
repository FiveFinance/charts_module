var faker = require('faker');

function createStocks(startRange, stockArray, priceLow, priceHigh){

var startDate = new Date(startRange); //GIVEN DATE
var endDate = new Date();
var interValrange = [1, 7] //daily, weekly interval
var interval = interValrange[0] //default daily
var priceLow = priceLow //adjustable parameters
var priceHigh = priceHigh //adjustable parameters

var setDatePrice = function(start, end) {
    var obj = new Object();
    var dt = new Date(start);
    while (dt <= end) {
        obj[dt] = faker.commerce.price(priceLow, priceHigh, 2, '$');
        dt.setDate(dt.getDate() + interval);
    }

    return obj;
}
var stockPriceTimeData = {}

for (let stock in stockArray){
    var obj = setDatePrice(startDate, endDate);
    for (var key in obj){
      obj[key] = Number(obj[key].slice(1));
    }
    stockPriceTimeData[stockArray[stock]] = obj;
}
    return [stockPriceTimeData]
}

module.exports = createStocks;

// let stockArray = ['AAPL']

// console.log(createStocks("2019-03-01", stockArray, 110, 190))

//End of Function

/* Example calls:
let stockArray = ['AAPL']
createStocks("2019-03-01", stockArray, 110, 190));

returns: [ {AAPL:
      { 'Thu Feb 28 2019 16:00:00 GMT-0800 (PST)': '$186.00',
        'Fri Mar 01 2019 16:00:00 GMT-0800 (PST)': '$131.00',
        'Sat Mar 02 2019 16:00:00 GMT-0800 (PST)': '$166.00',
        'Sun Mar 03 2019 16:00:00 GMT-0800 (PST)': '$174.00',
        'Mon Mar 04 2019 16:00:00 GMT-0800 (PST)': '$119.00',
        'Tue Mar 05 2019 16:00:00 GMT-0800 (PST)': '$185.00',
        'Wed Mar 06 2019 16:00:00 GMT-0800 (PST)': '$143.00',
        'Thu Mar 07 2019 16:00:00 GMT-0800 (PST)': '$119.00',
        'Fri Mar 08 2019 16:00:00 GMT-0800 (PST)': '$172.00',
        'Sat Mar 09 2019 16:00:00 GMT-0800 (PST)': '$176.00',
        'Sun Mar 10 2019 16:00:00 GMT-0700 (PDT)': '$170.00',
        'Mon Mar 11 2019 16:00:00 GMT-0700 (PDT)': '$132.00',
        'Tue Mar 12 2019 16:00:00 GMT-0700 (PDT)': '$117.00',
        'Wed Mar 13 2019 16:00:00 GMT-0700 (PDT)': '$122.00',
        'Thu Mar 14 2019 16:00:00 GMT-0700 (PDT)': '$181.00',
        'Fri Mar 15 2019 16:00:00 GMT-0700 (PDT)': '$128.00',
        'Sat Mar 16 2019 16:00:00 GMT-0700 (PDT)': '$130.00',
        'Sun Mar 17 2019 16:00:00 GMT-0700 (PDT)': '$160.00',
        'Mon Mar 18 2019 16:00:00 GMT-0700 (PDT)': '$133.00',
        'Tue Mar 19 2019 16:00:00 GMT-0700 (PDT)': '$159.00',
        'Wed Mar 20 2019 16:00:00 GMT-0700 (PDT)': '$166.00',
        'Thu Mar 21 2019 16:00:00 GMT-0700 (PDT)': '$111.00',
        'Fri Mar 22 2019 16:00:00 GMT-0700 (PDT)': '$179.00',
        'Sat Mar 23 2019 16:00:00 GMT-0700 (PDT)': '$163.00',
        'Sun Mar 24 2019 16:00:00 GMT-0700 (PDT)': '$152.00',
        'Mon Mar 25 2019 16:00:00 GMT-0700 (PDT)': '$156.00',
        'Tue Mar 26 2019 16:00:00 GMT-0700 (PDT)': '$163.00',
        'Wed Mar 27 2019 16:00:00 GMT-0700 (PDT)': '$133.00',
        'Thu Mar 28 2019 16:00:00 GMT-0700 (PDT)': '$134.00',
        'Fri Mar 29 2019 16:00:00 GMT-0700 (PDT)': '$144.00',
        'Sat Mar 30 2019 16:00:00 GMT-0700 (PDT)': '$121.00',
        'Sun Mar 31 2019 16:00:00 GMT-0700 (PDT)': '$152.00',
        'Mon Apr 01 2019 16:00:00 GMT-0700 (PDT)': '$139.00' }
      }
    ]
*/



