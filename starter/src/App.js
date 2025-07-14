import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const booksData = await BooksAPI.getAll();
      setBooks(booksData);
    } catch (error) {
      console.error('Error loading books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShelfChange = async (book, newShelf) => {
    try {
      await BooksAPI.update(book, newShelf);
      
      // Update the books state
      setBooks(prevBooks => {
        // Remove the book from its current shelf
        const updatedBooks = prevBooks.filter(b => b.id !== book.id);
        
        // If the new shelf is not 'none', add the book to the new shelf
        if (newShelf !== 'none') {
          const updatedBook = { ...book, shelf: newShelf };
          return [...updatedBooks, updatedBook];
        }
        
        return updatedBooks;
      });
    } catch (error) {
      console.error('Error updating book shelf:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<ListBooks books={books} onShelfChange={handleShelfChange} />} 
          />
          <Route 
            path="/search" 
            element={<SearchBooks books={books} onShelfChange={handleShelfChange} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
