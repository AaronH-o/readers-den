const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema({
  bookReviewText: {
    type: String,
    required: 'You need to leave a review!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  bookAuthor: {
    type: String,
    required: 'You need to note the author!',
    minlength: 1,
    maxlength: 280,
    trim: true,
    },
  bookReviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const BookReview = model('BookReview', bookSchema);

module.exports = BookReview;
