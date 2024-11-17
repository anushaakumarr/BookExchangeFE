import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient';

function SearchResults({ filters }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get('/books/search', { params: filters });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (filters) {
      fetchResults();
    }
  }, [filters]);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {results.map((book) => (
        <li key={book.book_id}>
          {book.title} by {book.author} - {book.condition}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
