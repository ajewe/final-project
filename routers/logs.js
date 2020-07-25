const express = require('express')
const logsController = require('../controllers/logs')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, logsController.getAllUsers)
router.get('/', logsController.getAllLogsByUser)
router.get('/:id', logsController.getLogById)

router.post('/create', logsController.createLog)

// router.put('/:id', logsController.updateLogById)

// router.delete('/:first_name', authenticate, logsController.deleteUserByFirstName)

module.exports = router