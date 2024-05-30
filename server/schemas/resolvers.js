const { User, Book, Review, Club, Auth } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate();
    },
    books: async () => {
      return Book.find().populate();
    },
    book: async (parent, { id }) => {
      return Book.findOne({ id }).populate();
    },
    clubs: async () => {
      return Club.find().populate();
    },
    club: async (parent, { id }) => {
      return Club.findOne({ id }).populate();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate();
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addBook: async (parent, { title, author }) => {
      const user = await Book.create({ title, author });
    },
    addReview: async (parent, { bookId, reviewText, userId }) => {
      const user = await Review.create({ bookId, reviewText, userId });
    },
    addClub: async (parent, { name }) => {
      const user = await Club.create({ name });
    },
    addBookToClub: async (parent, { clubId, bookId}, context) => {
      if (context.user) {
        await Club.findOneAndUpdate(
          { _id: clubId},
          { $addToSet: { books: bookId}}
        )
        return;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addUserToClub: async (parent, { clubId, userId}, context) => {
      if (context.user) {
        await Club.findOneAndUpdate(
          { _id: clubId},
          { $addToSet: { users: userId}}
        )
        return;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    removeReview: async (parent, { bookId, reviewId }, context) => {
      
    },
  },
};

module.exports = resolvers;
