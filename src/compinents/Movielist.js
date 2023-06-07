// src/components/Movielist.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Movielist = ({ movies }) => {
  return (
    <div className='movies_cards'>
      {movies.map((movie) => (
        <div key={movie.score} className="movie-card">
          
          <img className="images" src={movie.show.image.original} alt={movie.name} />
          <h1>{movie.show.name}</h1>
          <Link to={`/summary/${movie.score}`}>View Summary</Link>
        </div>
      ))}
    </div>
  );
};

export default Movielist;