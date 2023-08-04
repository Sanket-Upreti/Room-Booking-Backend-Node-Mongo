const express = require('express');
const router = express.Router();
const { postLogin } = require('../controller/login')

// route for posting the data(logging in)
router.post('/', postLogin)

module.exports = router
