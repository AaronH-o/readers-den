import { gql } from "@apollo/client";

//user
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
        bookAuthor
        bookReviewText
        createdAt
      }
    }
  }
`;

//books
export const QUERY_BOOKS = gql`
  query getBOOKS {
    books {
      _id
      bookAuthor
      bookReviewText
      bookReviewAuthor
      createdAt
    }
  }
`;

//single book
export const QUERY_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      bookAuthor
      bookReviewText
      bookReviewAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

//me
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
        bookAuthor
        bookReviewText
        bookReviewAuthor
        createdAt
      }
    }
  }
`;

//clubs
export const QUERY_CLUBS = gql`
  query getCLUBS {
    clubs {
      _id
      bookId
      bookAuthor
      createdAt
    }
  }
`;

//single club
export const QUERY_SINGLE_CLUB = gql`
  query getSingleClub($clubId: ID!) {
    club(clubId: $clubId) {
      _id
      bookId
      bookAuthor
      bookReviewText
      bookReviewAuthor
      createdAt
    }
  }
`;
