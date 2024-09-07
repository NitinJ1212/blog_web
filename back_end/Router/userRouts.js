const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController');

const validateEmail = require("../mideleWhere/emailcheck");

router.post('/users', userController.signupUser);

router.post('/login', userController.longin);
router.get('/', userController.home);

module.exports = router
