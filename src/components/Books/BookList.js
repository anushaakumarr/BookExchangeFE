import React, { useEffect, useState } from 'react';
import axios from '../../api/apiClient';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book Listings</h2>
      <ul>
        {books.map((book) => (
          <li key={book.book_id}>
            {book.title} by {book.author} - {book.condition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
