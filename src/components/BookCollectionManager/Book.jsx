function Book({ book, onDelete }) {
  return (
    <article className="book-card" aria-labelledby={`book-title-${book.id}`}>
      <div className="book-card-header">
        <div>
          <h3 id={`book-title-${book.id}`}>{book.title}</h3>
          <p className="book-author">by {book.author}</p>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(book.id)}
          aria-label={`Delete ${book.title}`}
        >
          Delete
        </button>
      </div>

      <div className="book-details">
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>

        <p>
          <strong>Language:</strong> {book.language}
        </p>

        <p>
          <strong>Edition:</strong> {book.edition}
        </p>

        <p>
          <strong>Pages:</strong> {book.pages}
        </p>

        <p>
          <strong>Rating:</strong> {book.rating}/5
        </p>

        <p>
          <strong>Year:</strong> {book.year}
        </p>
      </div>
    </article>
  );
}

export default Book;