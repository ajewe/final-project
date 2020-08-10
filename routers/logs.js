const express = require('express')
const logsController = require('../controllers/logs')
const router = express.Router()
const { authMiddleware } = require('./middleware')

router.get('/', authMiddleware, logsController.getAllLogsByUser)
router.get('/:id', authMiddleware, logsController.getLogById)
router.post('/create', authMiddleware, logsController.createLog)
router.put('/update/:id', authMiddleware, logsController.updateLogById)

module.exports = router