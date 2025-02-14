const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');

// User signup
router.post('/signup', User.signup);

// user login
router.post('/login', User.login);

module.exports = router;