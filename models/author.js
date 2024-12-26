const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book', max: 5 }],
  }, {
    timestamps: true,
  });
  
  const Author = mongoose.model('Author', authorSchema);
  
  module.exports = Author;
  