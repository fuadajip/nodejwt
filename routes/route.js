var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/seeder', userController.setup);
router.get('/user', userController.getAll);
router.post('/authenticate', userController.findOne);
module.exports = router;