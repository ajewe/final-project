const express = require('express')
const labsController = require('../controllers/labs')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, labsController.getAllUsers)
//need to change slash values
router.get('/lab/:id', labsController.getLabById)

router.post('/lab/create', labsController.createLab)

router.put('/lab/update/:id', labsController.updateLabById)

// router.delete('/:first_name', authenticate, labsController.deleteUserByFirstName)

module.exports = router