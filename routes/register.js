const express = require('express');
const router = express.Router();
const { postUser } = require('../controller/register')

// route for registrating user(registration)
router.post('/', postUser)

module.exports = router
