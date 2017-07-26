var userModel = require('../models/user');
var userService = require('../services/_user');

var userController = {
    setup: (req, res) => {
        // create a sample user
        var userData = new userModel({
            name: 'Hello guys',
            password: 'password',
        });
        userService.setup(userData, (callback) => {
            if (callback.status) {
                res.status(200).json(callback);
            } else {
                res.status(200).json({ status: false, msg: 'Failed to save' });
            }
        })
    },
    getAll: (req, res) => {
        userService.getAll((callback) => {
            if (callback.status) {
                res.status(200).json(callback);
            } else {
                res.status(200).json({ status: false, msg: 'No user found' });
            }
        })
    },
    findOne: (req, res) => {
        var userData = new userModel({
            name: req.body.name,
            password: req.body.password
        });

        console.log(userData);
        userService.findOne(userData, (callback) => {
            if (callback.status) {
                res.status(200).json(callback);
            } else {
                res.status(200).json(callback);
            }
        })
    }
}

module.exports = userController;