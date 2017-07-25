var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

require('dotenv').config();
// use logger to log transaction
app.use(logger('dev'));
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/', (req, res) => { res.status(200).json({ status: true, msg: "Hello World" }) });

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