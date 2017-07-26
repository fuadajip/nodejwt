var mongoose = require('mongoose');
var userModel = require('../models/user');

let userService = {
    setup: (userData, callback) => {
        userData.save((err) => {
            if (err) throw err;
            callback({ status: true, msg: "saved" });
        })
    },
    getAll: (callback) => {
        userModel.find((err, users) => {
            if (err) throw err;
            callback({ status: true, data: users });
        })
    }
}

module.exports = userService;