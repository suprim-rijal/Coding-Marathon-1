import { useState } from "react";
import Book from "./Book";
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  function addBook(event) {
    event.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !genre.trim() ||
      !language.trim() ||
      !edition.trim() ||
      !pages ||
      !rating ||
      !year
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (Number(rating) < 0 || Number(rating) > 5) {
      setError("Rating must be between 0 and 5.");
      return;
    }

    if (Number(pages) < 1) {
      setError("Pages must be at least 1.");
      return;
    }

    if (Number(year) < 1 || Number(year) > new Date().getFullYear()) {
      setError("Please enter a valid publication year.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      genre: genre.trim(),
      language: language.trim(),
      edition: edition.trim(),
      pages: Number(pages),
      rating: Number(rating),
      year: Number(year),
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);

    setTitle("");
    setAuthor("");
    setGenre("");
    setLanguage("");
    setEdition("");
    setPages("");
    setRating("");
    setYear("");
    setError("");
  }

  function deleteBook(id) {
    setBooks((currentBooks) =>
      currentBooks.filter((book) => book.id !== id)
    );
  }

  return (
    <div className="book-manager">
      <h1>Book Collection Manager</h1>

      <form className="book-form" onSubmit={addBook}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="Enter author name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            placeholder="e.g. Fantasy"
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            placeholder="e.g. English"
          />
        </div>

        <div className="form-group">
          <label htmlFor="edition">Edition</label>
          <input
            id="edition"
            type="text"
            value={edition}
            onChange={(event) => setEdition(event.target.value)}
            placeholder="e.g. First Edition"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pages">Pages</label>
          <input
            id="pages"
            type="number"
            min="1"
            value={pages}
            onChange={(event) => setPages(event.target.value)}
            placeholder="e.g. 310"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="0 - 5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="number"
            min="1"
            max={new Date().getFullYear()}
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="e.g. 1937"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="add-button">
          Add Book
        </button>
      </form>

      <section className="books-section">
        <div className="books-header">
          <h2>Your Books</h2>
          <span>{books.length} book(s)</span>
        </div>

        {books.length === 0 ? (
          <p className="empty-message">
            No books yet. Add a book to get started.
          </p>
        ) : (
          <div className="books-list">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                onDelete={deleteBook}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default BookCollectionManager;