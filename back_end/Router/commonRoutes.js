const express = require("express")
const router = express.Router();
const commonController = require('../controllers/commonController');

const validateEmail = require("../mideleWhere/emailcheck");

router.post('/contactus', commonController.newContactus);

// router.post('/login', userController.longin);
// router.get('/', userController.home);

module.exports = router
