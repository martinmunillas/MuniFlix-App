import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/MoviePreviewDetails.scss';

const MoviePreviewDetails = ({ movie }) => {
  return (
    <section className='moviePreviewDetails'>
      <Link to='/'>
        <button className='moviePreviewDetails_goHome'>⬅ Go Home</button>
      </Link>
      <h1 className='moviePreviewDetails_title'>{movie.name}</h1>
      <p className='moviePreviewDetails_description'>{movie.description}</p>
      <ul className='moviePreviewDetails_details'>
        <li className='moviePreviewDetails_details-clasification'>
          {movie.clasification != 0 ? '+' + movie.clasification : 'All Ages'}
        </li>
        <li className='moviePreviewDetails_details-year'>{movie.year}</li>
        <li className='moviePreviewDetails_details-duration'>
          {movie.duration} minutes
        </li>
      </ul>
      <Link to={`/watch/${movie._id}`}>
        <button className='moviePreviewDetails_play'>Play ▶</button>
      </Link>
    </section>
  );
};

export default MoviePreviewDetails;
