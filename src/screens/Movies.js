// src/components/Movies.js
import React, { useEffect, useState } from 'react';
import Movielist from '../compinents/Movielist';
import '../App.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies-container">
      <h1 className="movies-heading">Movies</h1>
      <div className="mango"></div><Movielist movies={movies} /></div>
  );
};

export default Movies;
