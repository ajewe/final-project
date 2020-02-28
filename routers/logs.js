const express = require('express')
const logsController = require('../controllers/logs')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, logsController.getAllUsers)
//need to change slash value things
router.get('/', authenticate, logsController.getAllLogs)

router.get('/', authenticate, logsController.getLogByDate)

router.post('/', authenticate, logsController.createLog)

router.put('/:id', authenticate, logsController.updateLogById)

// router.delete('/:first_name', authenticate, logsController.deleteUserByFirstName)

module.exports = router