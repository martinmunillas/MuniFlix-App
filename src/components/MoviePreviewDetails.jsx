import React from 'react';

import '../assets/style/components/MoviePreviewDetails.scss';

const MoviePreviewDetails = ({ movie }) => {
  return (
    <section className="moviePreviewDetails">
      <h1 className="moviePreviewDetails_title">{movie.title}</h1>
      <p className="moviePreviewDetails_description">{movie.description}</p>
      <ul className="moviePreviewDetails_details">
        <li className="moviePreviewDetails_details-clasification">
          {movie.contentRating}
        </li>
        <li className="moviePreviewDetails_details-year">{movie.year}</li>
        <li className="moviePreviewDetails_details-duration">
          {movie.duration} minutes
        </li>
      </ul>
      <button className="moviePreviewDetails_play">Play ▶</button>
    </section>
  );
};

export default MoviePreviewDetails;
