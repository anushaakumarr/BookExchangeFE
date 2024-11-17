import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';

function UserBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await apiClient.get('/books');
        setBooks(response.data);
      } catch (error) {
        alert('Error fetching books');
      }
    }
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/books/${id}`);
      setBooks(books.filter((book) => book.book_id !== id));
    } catch (error) {
      alert('Error deleting book');
    }
  };

  return (
    <div>
      <h2>Your Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.book_id}>
            {book.title} - {book.author} ({book.condition})
            <button onClick={() => handleDelete(book.book_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserBooks;
