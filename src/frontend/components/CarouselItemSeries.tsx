import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/components/CarouselItem.scss";

const CarouselItem = ({
  _id,
  name,
  clasification,
  startYear,
  finalYear,
  cover,
  seasons,
}: any) => {
  return (
    <div className='carousel-item'>
      <Link to={`/preview/series/${_id}`}>
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
