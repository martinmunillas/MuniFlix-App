import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/components/MoviePreviewDetails.scss";

interface MoviePreviewDetailsProps {
  movie: any;
}

const MoviePreviewDetails: React.FC<MoviePreviewDetailsProps> = ({ movie }) => {
  return (
    <section className='moviePreviewDetails'>
      <Link to='/' className='moviePreviewDetails_goHome'>
        ⬅ Go Home
      </Link>
      <h1 className='moviePreviewDetails_title'>{movie.name}</h1>
      <p>
        {movie.director} |{" "}
        {movie.clasification != 0 ? "+" + movie.clasification : "All Ages"} |{" "}
        {movie.year} | {movie.duration} minutes
      </p>
      <br />
      <p>{movie.cast.join(", ")}</p>
      <br />
      <p className='moviePreviewDetails_description'>{movie.description}</p>
      <Link to={`/watch/${movie._id}`} className='moviePreviewDetails_play'>
        <button>Play ▶</button>
      </Link>
    </section>
  );
};

export default MoviePreviewDetails;
