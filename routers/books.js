const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')
const { authMiddleware } = require('./middleware')

router.get('/', authMiddleware, booksController.getAllBooks)
router.post('/create', authMiddleware, booksController.createBook)
router.put('/update/:id', authMiddleware, booksController.updateBookNameById)
router.delete('/delete/:id', authMiddleware, booksController.deleteBookById)

module.exports = router