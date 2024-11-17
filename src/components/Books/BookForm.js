import React, { useState } from 'react';
import apiClient from '../../api/apiClient';

function BookForm({ onBookAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('New');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/books', {
        title,
        author,
        genre,
        condition,
        availability: true,
      });
      onBookAdded(response.data);
      setTitle('');
      setAuthor('');
      setGenre('');
      setCondition('New');
    } catch (error) {
      alert('Error adding book');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <select value={condition} onChange={(e) => setCondition(e.target.value)}>
        <option value="New">New</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
