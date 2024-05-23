const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]!
  }

  type Book {
    _id: ID
    title: String
    author: String
    createdAt: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    Text: String
    authorId: String
    createdAt: String
  }
  type Club {
    _id: ID
    name: String
    books: [Book]!
    users: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
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
    removeBook(bookId: ID!): Book
    removeReview(bookId: ID!, reviewId: ID!): Book
  }
`;

module.exports = typeDefs;
