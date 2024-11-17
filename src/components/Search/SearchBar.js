import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSearch = () => {
    onSearch({ title, author, genre });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
