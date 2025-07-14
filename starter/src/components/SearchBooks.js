import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

const SearchBooks = ({ books, onShelfChange }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchBooks = async () => {
      if (query.trim()) {
        setIsSearching(true);
        try {
          const results = await BooksAPI.search(query, 20);
          if (results && !results.error) {
            // Merge search results with existing books to show correct shelf status
            const mergedResults = results.map(book => {
              const existingBook = books.find(b => b.id === book.id);
              return existingBook || book;
            });
            setSearchResults(mergedResults);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        }
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    };

    const timeoutId = setTimeout(searchBooks, 300);
    return () => clearTimeout(timeoutId);
  }, [query, books]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" aria-label="Close search and return to main page">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleQueryChange}
            aria-label="Search for books by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {isSearching ? (
            <li>Searching...</li>
          ) : searchResults.length > 0 ? (
            searchResults.map((book) => (
              <Book
                key={book.id}
                book={book}
                onShelfChange={onShelfChange}
              />
            ))
          ) : query ? (
            <div className="empty-state">No books found. Try a different search term.</div>
          ) : null}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks; 