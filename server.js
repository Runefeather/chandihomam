var express = require('express');
var app = express();

var http = require('http').Server(app);

// parser
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// css and js files
app.use(express.static('html'));

// Dashboard routes
var routes = require('./routes/index');
app.use('/', routes);

http.listen(3004, "0.0.0.0", function(){
    console.log('listening on *:3004');
});