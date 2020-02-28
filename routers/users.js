const express = require('express')
const usersController = require('../controllers/users')
// const { authenticate } = require('../middleware')
const router = express.Router()

// router.get('/', authenticate, usersController.getAllUsers)
//need to change slash values
router.get('/user/:id', authenticate, usersController.getUserById)

//THESE WONT WORKKKKKKKKK i dont think
// router.post('/user/create', authenticate, usersController.createUser)

// router.put('/user/update/:id', authenticate, usersController.updateUserById)

// router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router