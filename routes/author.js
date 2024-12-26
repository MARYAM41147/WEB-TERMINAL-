const express = require('express');
const { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/authorController');
const router = express.Router();

// Create a new author
router.post('/', createAuthor);

// Get all authors
router.get('/', getAuthors);

// Get an author by ID
router.get('/:id', getAuthorById);

// Update an author by ID
router.put('/:id', updateAuthor);

// Delete an author by ID
router.delete('/:id', deleteAuthor);

module.exports = router;
