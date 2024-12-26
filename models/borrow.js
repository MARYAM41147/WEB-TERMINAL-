const borrowSchema = new mongoose.Schema({
    name: { type: String, required: true },
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    membershipActive: { type: Boolean, required: true },
    membershipType: { type: String, enum: ['standard', 'premium'], required: true },
  }, {
    timestamps: true,
  });
  
  borrowSchema.pre('save', function(next) {
    if (this.membershipType === 'premium' && this.borrowedBooks.length > 10) {
      throw new Error('Premium members can borrow up to 10 books only.');
    }
    if (this.membershipType === 'standard' && this.borrowedBooks.length > 5) {
      throw new Error('Standard members can borrow up to 5 books only.');
    }
    next();
  });
  
  const Borrow = mongoose.model('Borrow', borrowSchema);
  
  module.exports = Borrow;
  