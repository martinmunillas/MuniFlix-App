import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { _id, title, year, contentRating, duration, cover, isList } = props;

  return (
    <div className="carousel-item">
      <Link to={`/preview/movies/${_id}`}>
        <img className="carousel-item__img" src={cover} alt="" />
        <div className="carousel-item__details">
          <h3 className="carousel-item__details--title">{title}</h3>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration} min.`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CarouselItem;
