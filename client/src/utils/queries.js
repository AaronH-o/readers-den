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
        title
        author
        createdAt
      }
      clubs {
        _id
        name
      }
    }
  }
`;

//books
export const QUERY_BOOKS = gql`
  query getBOOKS {
    books {
      _id
      title
      author
      reviews {
        _id
        text
        userId
      }
      createdAt
    }
  }
`;

//single book
export const QUERY_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      title
      author
      reviews {
        _id
        text
        userId
        createdAt
      }
      createdAt
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
        title
        author
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
      name
      createdAt
    }
  }
`;

//single club
export const QUERY_SINGLE_CLUB = gql`
  query getSingleClub($clubId: ID!) {
    club(clubId: $clubId) {
      _id
      name
      books {
        _id
        title
        author
      }
      users {
        _id
        username
      }
      createdAt
    }
  }
`;
