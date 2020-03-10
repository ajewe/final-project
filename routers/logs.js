const express = require('express')
const logsController = require('../controllers/logs')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, logsController.getAllUsers)
//need to change slash value things
router.get('/', logsController.getAllLogs)

router.get('/', logsController.getLogByDate)

router.post('/', logsController.createLog)

router.put('/:id', logsController.updateLogById)

// router.delete('/:first_name', authenticate, logsController.deleteUserByFirstName)

module.exports = router