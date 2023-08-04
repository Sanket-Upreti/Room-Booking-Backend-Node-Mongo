const express = require('express');
const router = express.Router();
const { bookMeetingRoom } = require('../controller/roomBook')

// route for room booking(booking room)
router.post('/book', bookMeetingRoom)

module.exports = router
