# MyReads

MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. This project was developed as part of Udacity's React Fundamentals course and demonstrates the use of React, React Router, and state management with functional components and hooks.

## Features

- **Main Page (Bookshelf View):**
  - Displays books organized into three shelves: Currently Reading, Want to Read, and Read.
  - Each book shows its cover, title, and authors.
  - Each book has a shelf changer dropdown to move it between shelves or remove it from shelves.
  - Floating "Add a book" button navigates to the Search page.

- **Search Page:**
  - Search for books by title, author, or ISBN (using a fixed set of search terms).
  - Live search results update as you type.
  - Books already on a shelf show their current shelf; you can add or move books directly from search results.
  - Graceful handling of missing covers/authors and invalid queries.
  - Close button returns to the main page.

- **Routing:**
  - Main page: `/`
  - Search page: `/search`
  - Navigation is handled with React Router v6.

- **State Management:**
  - State is managed in the top-level App component and passed down via props.
  - Shelf changes persist between main and search pages and are saved to the backend API.
  - Data persists on page refresh.

## Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

### Usage
- Use the dropdown on each book to move it between shelves or remove it.
- Click the floating "Add a book" button to search for new books to add to your shelves.
- On the search page, type a query (see [SEARCH_TERMS.md](../SEARCH_TERMS.md) for valid terms). Results update live.
- Use the close button to return to the main page.

## Backend API
The app uses a provided backend server. See [`BooksAPI.js`](src/BooksAPI.js) for available methods:
- `getAll()` — fetches all books on your shelves
- `update(book, shelf)` — updates a book's shelf
- `search(query, maxResults)` — searches for books

**Note:** Only certain search terms are supported. See [SEARCH_TERMS.md](../SEARCH_TERMS.md).

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Book.js
│   │   ├── Bookshelf.js
│   │   ├── ListBooks.js
│   │   └── SearchBooks.js
│   ├── App.js
│   ├── App.css
│   ├── BooksAPI.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License
This project is for educational purposes as part of the Udacity React Nanodegree program.
