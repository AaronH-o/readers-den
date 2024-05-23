import { Link } from "react-router-dom";
import auth from "../../utils/auth";

const BookList = ({
  books,
  title,
  author,
  showTitle = true,
  showUsername = true,
  showAuthor = true,
}) => {
  if (!books.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {showAuthor && <h2>{author}</h2>}
      {books &&
        books.map((book) => (
          <div key={book._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${book.bookReviewAuthor}`}
                >
                  {book.bookReviewAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    reviewed this book at {book.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had reviewed this book at {book.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{book.bookReviewText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/books/${book._id}`}
            >
              Join the book club.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BookList;
