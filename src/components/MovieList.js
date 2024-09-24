import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, toggleWatched, deleteMovie }) => {
  return (
    <ul className="space-y-4">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
