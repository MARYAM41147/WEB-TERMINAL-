const express = require('express');
const bookRoutes = require('./book');
const authorRoutes = require('./author');
const borrowRoutes = require('./borrow');
const router = express.Router();

// Mount the routes
router.use('/books', book);
router.use('/authors', author);
router.use('/borrows', borrow);

module.exports = router;
