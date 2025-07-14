import React from 'react';

const Book = ({ book, onShelfChange }) => {
  const handleShelfChange = (event) => {
    const newShelf = event.target.value;
    onShelfChange(book, newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks 
                ? `url("${book.imageLinks.thumbnail}")`
                : 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjE5MyIgdmlld0JveD0iMCAwIDEyOCAxOTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTkzIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjY0IiB5PSI5NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=")'
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || 'none'} onChange={handleShelfChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(', ') : 'Unknown Author'}
        </div>
      </div>
    </li>
  );
};

export default Book; 