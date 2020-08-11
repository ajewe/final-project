const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')

router.get('/', booksController.getAllBooks)
router.post('/create', booksController.createBook)
router.put('/update/:id', booksController.updateBookNameById)
router.delete('/delete/:id', booksController.deleteBookById)

module.exports = router