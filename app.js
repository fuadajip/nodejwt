var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var routerApp = require('./routes/route');

require('dotenv').config();

mongoose.connect(process.env.DB_HOST);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to database");
});

// use logger to log transaction
app.use(logger('dev'));
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api', routerApp);


app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    res.status(404).send("404 Not found");
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    console.log(err.stack);
});

module.exports = app;