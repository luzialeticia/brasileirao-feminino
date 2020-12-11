const express = require('express')
const router = express.Router()
const controller = require('../controllers/Players')
const cors = require('cors')

router.get('/team/:team', cors(), controller.getAllByTeam)
router.post('/add', cors(), controller.add)

module.exports = router