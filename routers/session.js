const express = require("express")
const sessionController = require('../controllers/session')
const router = express.Router()

router.post('/', sessionController.createSession)

module.exports = router