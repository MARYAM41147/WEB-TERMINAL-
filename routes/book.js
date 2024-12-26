const express = require('express');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('./controllers/book');
const router = express.Router();

// Create a new book
router.post('/', createBook);

// Get all books
router.get('/', getBooks);

// Get a book by ID
router.get('/:id', getBookById);

// Update a book by ID
router.put('/:id', updateBook);

// Delete a book by ID
router.delete('/:id', deleteBook);

module.exports = router;
