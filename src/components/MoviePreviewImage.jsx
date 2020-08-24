import React from 'react';

import '../assets/style/components/MoviePreviewImage.scss';

const MoviePreviewImage = ({ movie }) => {
  return (
    <section className="moviePreviewImage">
      <img src={movie.cover} alt="" />
    </section>
  );
};

export default MoviePreviewImage
