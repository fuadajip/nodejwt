var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = mongoose.model('User',
    new Schema({
        name: String,
        password: String,
        admin: Boolean
    }));

// set up a mongoose model and pass it using module.exports
module.exports = userModel;