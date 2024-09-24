import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addMovie(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-700 bg-gray-900 text-white rounded-l outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Add a movie"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-r"
      >
        Add
      </button>
    </form>
  );
};

export default AddMovieForm;
