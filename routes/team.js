const express = require('express');
const router = express.Router();
const { checkTeamName } = require('../controller/team')

// checking if a team exists
router.post('/check', checkTeamName)

module.exports = router
