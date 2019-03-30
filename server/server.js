var express = require('express'),
    cors = require('cors'),
    app = express(),
    faker = require('faker');

app.set('port', process.env.PORT || 3500);



var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});