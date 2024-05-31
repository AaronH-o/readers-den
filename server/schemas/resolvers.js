// const { AuthenticationError } = require("apollo-server-express");
const { User, Book, Club } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("books").populate("clubs");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("books").populate("clubs");
    },
    books: async () => {
      return Book.find().populate("comments");
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId }).populate("comments");
    },
    bookByTitle: async (parent, { title }) => {
      return Book.findOne({ title }).populate("comments");
    },
    clubs: async () => {
      return Club.find().populate("books").populate("users");
    },
    club: async (parent, { clubId }) => {
      return Club.findOne({ _id: clubId }).populate("books").populate("users");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("books")
          .populate("clubs");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    reviews: async () => {
      return Review.find().populate();
    },
    review: async (parent, { id }) => {
      return Review.findOne({ id }).populate();
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
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addBook: async (parent, { title, author }) => {
      const book = await Book.create({ title, author });
      return book;
    },
    addReview: async (parent, { bookId, reviewText, userId }) => {
      const review = await Review.create({ bookId, reviewText, userId });
      return review;
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
    }
    addRating: async (parent, { value, userId, bookId }) => {
      const rating = await Rating.create({ value, userId, bookId });
      return rating;
    },
    removeBook: async (parent, { bookId }) => {
      const book = await Book.findOneAndDelete({ _id: bookId });
      return book;
    },
    removeReview: async (parent, { bookId, reviewId }) => {
      const book = await Book.findOneAndUpdate(
        { _id: bookId },
        {
          $pull: {
            reviews: {
              _id: reviewId,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return book;
    },
    removeRating: async (parent, { ratingId }) => {
      const rating = await Rating.findOneAndDelete({ _id: ratingId });
      return rating;
    },
    addToBookshelf: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { books: bookId } },
          { new: true }
        ).populate("books");
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
