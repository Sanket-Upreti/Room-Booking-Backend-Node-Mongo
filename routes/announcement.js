const express = require('express');
const router = express.Router();
const { announceToAll } = require('../controller/announcement')

// route for room booking(booking room)
router.post('/store', announceToAll)

module.exports = router
