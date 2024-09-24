import React from 'react';

const MovieItem = ({ movie, toggleWatched, deleteMovie }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 border rounded ${
        movie.watched ? 'bg-green-600' : 'bg-gray-800'
      }`}
    >
      <span className={`${movie.watched ? 'line-through' : ''} text-lg font-semibold`}>
        {movie.title}
      </span>
      <div>
        <button
          onClick={() => toggleWatched(movie.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2"
        >
          {movie.watched ? 'Unwatch' : 'Watch'}
        </button>
        <button
          onClick={() => deleteMovie(movie.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
