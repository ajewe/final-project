const express = require('express')
const usersController = require('../controllers/users')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, usersController.getAllUsers)
//need to change slash values
router.get('/', usersController.getAllUsers)

router.get('/user/:id', usersController.getUserById)

router.post('/user/create', usersController.createUser)

router.put('/user/update/:id', usersController.updateUserById)

// router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router