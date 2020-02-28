const express = require('express')
const labsController = require('../controllers/labs')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, labsController.getAllUsers)
//need to change slash values
router.get('/lab/:id', authenticate, labsController.getLabById)

router.post('/lab/create', authenticate, labsController.createLab)

router.put('/lab/update/:id', authenticate, labsController.updateLabById)

// router.delete('/:first_name', authenticate, labsController.deleteUserByFirstName)

module.exports = router