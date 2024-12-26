const express = require('express');
const { borrowBook, getBorrows, updateBorrow, deleteBorrow } = require('../controllers/borrowController');
const router = express.Router();

// Borrow a book by borrowId
router.post('/borrow/:borrowId', borrowBook);

// Get all borrows
router.get('/', getBorrows);

// Update a borrow by borrowId
router.put('/:borrowId', updateBorrow);

// Delete a borrow by borrowId
router.delete('/:borrowId', deleteBorrow);

module.exports = router;
