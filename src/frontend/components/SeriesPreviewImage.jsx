import React from 'react';

import '../assets/style/components/MoviePreviewImage.scss';

const SeriesPreviewImage = ({ serie }) => {
  return (
    <section className="moviePreviewImage">
      <img src={serie.cover} alt="" />
    </section>
  );
};

export default SeriesPreviewImage
