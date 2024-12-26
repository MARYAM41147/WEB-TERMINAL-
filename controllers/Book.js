const Book = require('./models/Book');

exports.createBook = async (req, res) => {
  try {
    const { title, author, isbn, availableCopies } = req.body;
    const newBook = new Book({ title, author, isbn, availableCopies });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author');
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Book not found' });
  }
};
