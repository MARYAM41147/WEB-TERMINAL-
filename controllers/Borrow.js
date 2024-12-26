const Borrow = require('./models/Borrow');
const Book = require('./models/Book');

exports.createBorrow = async (req, res) => {
  try {
    const { name, borrowedBooks, membershipActive, membershipType } = req.body;
    const borrow = new Borrow({ name, borrowedBooks, membershipActive, membershipType });
    await borrow.save();

    // Update book available copies
    for (let bookId of borrowedBooks) {
      const book = await Book.findById(bookId);
      if (book.availableCopies === 0) {
        throw new Error('No available copies for this book.');
      }
      book.availableCopies -= 1;
      await book.save();
    }

    res.status(201).json(borrow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find().populate('borrowedBooks');
    res.status(200).json(borrows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(borrow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBorrow = async (req, res) => {
  try {
    await Borrow.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Borrow record not found' });
  }
};
