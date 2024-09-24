import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import moviesData from './data/movies.json';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : moviesData.map(movie => ({ ...movie, id: uuidv4() }));
  });

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title) => {
    const newMovie = {
      id: uuidv4(),
      title,
      watched: false,
    };
    setMovies([newMovie, ...movies]); // Add new movies to the top
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      setMovies(movies.filter((movie) => movie.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">🎬 Movie Watchlist</h1>
        <AddMovieForm addMovie={addMovie} />
        <MovieList
          movies={movies}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        />
      </div>
    </div>
  );
}

export default App;
