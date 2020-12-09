const express = require('express')
const router = express.Router()
const controller = require('../controllers/Teams')
const cors = require('cors')

router.get('/', cors(), controller.getAllTeams)
router.post('/add', cors(), controller.addTeam)

module.exports = router