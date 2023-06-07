import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Forms from '../compinents/Forms';
import "../App.css";

const Summary = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  const fetchMovie = (id) => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((post) => {
          const score = parseFloat(post.score);
          const parsedId = parseFloat(id);
          if (score === parsedId) {
            return post;
          }
        });
        setMovie(filteredData);
      });
  };

  const handleSubmit = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <Forms movie={movie} />;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }
  const cleanedString = movie[0].show.summary.replace(/<\/?p>/g, '');
  movie[0].show.summary=cleanedString;
  const cleanedStrings = movie[0].show.summary.replace(/<\/?b>/g, '');
  movie[0].show.summary=cleanedStrings;
  return (
    <div className="container">
      <div className="sum"><span className="ss">Movie Summary</span></div>
      <div className="title"><span className="t">Movie Name:</span>{movie[0].show.name}</div>
      <p className="title"><span className="t">Genres:</span> {movie[0].show.genres}</p>
      <p className="title"><span className="t">Language: </span>{movie[0].show.language}</p>
      
      <p className="title"><span className="t">Summary:</span>{movie[0].show.summary}</p>
      <div className="stt"><div className="st"><img className="image" src={movie[0].show.image.original} alt={movie[0].show.name} /></div>
      <span className="sd"><button className="button btn-primary" onClick={handleSubmit}>
        Book Ticket
      </button></span>
    </div></div>
  );
};

export default Summary;
