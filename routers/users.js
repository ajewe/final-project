const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

//sign-up, check if email is already registered, if not, create user
router.post('/create', usersController.createUser)

module.exports = router