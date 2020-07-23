const express = require('express')
const usersController = require('../controllers/users')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, usersController.getAllUsers)

//get rid of this eventually
router.get('/', usersController.getAllUsers)

// router.get('/:id', usersController.getUserById)

//sign-up, check if email is already registered, if not, create user
router.post('/create', usersController.createUser)

// router.put('/update/:id', usersController.updateUserById)

// router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router