import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_BOOK } from "../../utils/mutations";
import { QUERY_BOOKS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const BookReviewForm = () => {
  const [bookReviewText, setBookReviewText] = useState("");
  const [bookRating, setBookRating] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addBook, { error }] = useMutation(ADD_BOOK, {
    refetchQueries: [QUERY_BOOKS, "getbOOKS", QUERY_ME, "me"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBook({
        variables: {
          bookReviewText,
          bookRating,
          bookReviewAuthor: Auth.getProfile().data.username,
        },
      });

      setBookReviewText("");
      setBookRating("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "bookReviewText" && value.length <= 280) {
      setBookReviewText(value);

      setCharacterCount(value.length);
    } else if (name === "bookRating") {
      setBookRating(value);
    }
  };

  return (
    <div>
      <h3>Read anything lately?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="bookReviewText"
                placeholder="Here's a new review..."
                value={bookReviewText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add a review
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to review. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BookReviewForm;
