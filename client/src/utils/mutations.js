import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      _id
      title
      author
      createdAt
      reviews {
        _id
        text
      }
      clubs {
        _id
        name
      }
      user {
        _id
        username
      }
      ratings {
        _id
        value
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($bookId: ID!, $reviewText: String!, $userId: ID!) {
    addReview(bookId: $bookId, reviewText: $reviewText, userId: $userId) {
      _id
      text
      userId
      createdAt
      bookId
    }
  }
`;

export const ADD_CLUB = gql`
  mutation addClub($name: String!) {
    addClub(name: $name) {
      _id
      name
      books {
        _id
        title
      }
      users {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK_TO_CLUB = gql`
  mutation addBookToClub($clubId: ID!, $bookId: ID!) {
    addBookToClub(clubId: $clubId, bookId: $bookId) {
      _id
      name
      books {
        _id
        title
      }
      users {
        _id
        username
      }
    }
  }
`;

export const ADD_USER_TO_CLUB = gql`
  mutation addUserToClub($clubId: ID!, $userId: ID!) {
    addUserToClub(clubId: $clubId, userId: $userId) {
      _id
      name
      books {
        _id
        title
      }
      users {
        _id
        username
      }
    }
  }
`;

export const ADD_RATING = gql`
  mutation addRating($value: Int!, $userId: ID!, $bookId: ID!) {
    addRating(
      value: $value
      userId: $userId
      bookId: $bookId
    ) {
      _id
      value
      userId
      clubId
      bookId
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      title
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($bookId: ID!, $reviewId: ID!) {
    removeReview(bookId: $bookId, reviewId: $reviewId) {
      _id
      text
    }
  }
`;

export const REMOVE_RATING = gql`
  mutation removeRating($ratingId: ID!) {
    removeRating(ratingId: $ratingId) {
      _id
      value
    }
  }
`;
