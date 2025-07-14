import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = ({ books, onShelfChange }) => {
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');
  const read = books.filter(book => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={currentlyReading}
            onShelfChange={onShelfChange}
          />
          {currentlyReading.length === 0 && (
            <div className="empty-state">No books in this shelf yet.</div>
          )}
          <Bookshelf
            title="Want to Read"
            books={wantToRead}
            onShelfChange={onShelfChange}
          />
          {wantToRead.length === 0 && (
            <div className="empty-state">No books in this shelf yet.</div>
          )}
          <Bookshelf
            title="Read"
            books={read}
            onShelfChange={onShelfChange}
          />
          {read.length === 0 && (
            <div className="empty-state">No books in this shelf yet.</div>
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks; 