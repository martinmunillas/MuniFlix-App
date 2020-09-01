import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const {
    id,
    name,
    year,
    clasification,
    startYear,
    finalYear,
    cover,
    seasons,
  } = props;

  return (
    <div className='carousel-item'>
      <Link to={`/preview/series/${id}`}>
        <img className='carousel-item__img' src={cover} alt='' />
        <div className='carousel-item__details'>
          <h3 className='carousel-item__details--title'>{name}</h3>
          <p className='carousel-item__details--subtitle'>
            {`${startYear} - ${finalYear} | +${clasification} | ${seasons.length}S`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CarouselItem;
