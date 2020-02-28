const express = require('express')
const inventoryController = require('../controllers/inventory')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, inventoryController.getAllUsers)
//need to change slash values
router.get('/:id', authenticate, inventoryController.getAllInventory)

router.post('/', authenticate, inventoryController.createItem)

router.put('/:id', authenticate, inventoryController.updateItem)

// router.delete('/:first_name', authenticate, inventoryController.deleteUserByFirstName)

module.exports = router