import React from 'react';

function BookDetails({ book }) {
  if (!book) return null;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Condition:</strong> {book.condition}</p>
      <p><strong>Availability:</strong> {book.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
}

export default BookDetails;
