const Author = require('./models/Author');

exports.createAuthor = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const newAuthor = new Author({ name, email, phoneNumber });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books');
    res.status(200).json(author);
  } catch (error) {
    res.status(404).json({ error: 'Author not found' });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Author not found' });
  }
};
