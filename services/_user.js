var mongoose = require('mongoose');
var userModel = require('../models/user');
var jwt = require('jsonwebtoken');
require('dotenv').config();

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
    },
    findOne: (userData, callback) => {
        userModel.findOne({
            name: userData.name
        }, (err, user) => {
            if (err) throw err;
            if (!user) {
                callback({ status: false, msg: 'Authentication failed' });
            } else if (user) {
                if (user.password != userData.password) {
                    callback({ status: false, msg: 'Athentication failed. Wrong password' });
                } else {
                    var token = jwt.sign(user, process.env.SECRET, {
                        expiresIn: 60 * 60 * 24 // 24 hours
                    });
                    callback({ status: true, msg: 'Welcome', token: token });
                }
            }
        })
    }
}

module.exports = userService;