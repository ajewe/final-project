const express = require('express')
const logsController = require('../controllers/logs')
const router = express.Router()

router.get('/', logsController.getAllLogsByUser)
router.get('/:id', logsController.getLogById)
router.post('/create', logsController.createLog)
router.put('/update/:id', logsController.updateLogById)

module.exports = router