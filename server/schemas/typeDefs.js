const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]!
    clubs: [Club]!

  }

  type Book {
    _id: ID
    title: String
    author: String
    createdAt: String
    reviews: [Review]!
    clubs:[Club]!
    user:[User]!
    ratings:[Rating]
  }

  type Review {
    _id: ID
    Text: String
    authorId: String
    createdAt: String
    bookId: ID
  }
  type Club {
    _id: ID
    name: String
    books: [Book]!
    users: [User]!

  }
  type Rating {
    _id: ID
    value: Int
    userId: ID
    clubId: ID
    bookId: ID
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    clubs: [Club]
    club(clubId: ID!): Club
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(title: String!, author: String!): Book
    addReview(bookId: ID!, reviewText: String!): Book
    addClub(name: String!): Club
    addBookToClub(clubId: ID!, bookId: ID!): Club
    addUserToClub(clubId: ID!, userId: ID!): Club
    addRating(value: Int!, userId: ID!, clubId: ID!, bookId: ID!): Rating
    removeBook(bookId: ID!): Book
    removeReview(bookId: ID!, reviewId: ID!): Book
    removeRating(ratingId: ID!): Rating
  }
`;

module.exports = typeDefs;
