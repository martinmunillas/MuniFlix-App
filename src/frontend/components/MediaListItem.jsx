import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/MediaListItem.scss';

const MediaListItem = (props) => {
  return (
    <li className='mediaListItem'>
      <Link to={`/preview/${props.isMovie ? 'movies' : 'series'}/${props._id}`}>
        <img
          src={props.cover}
          alt={props.name}
          className='mediaListItem__image'
        />
        <div className='mediaListItem__details'>
          <h3>{props.name}</h3>
          <h5>{props.director}</h5>
          {props.isMovie ? (
            <p>
              {props.year} | {props.duration}m
            </p>
          ) : (
            <p>
              {props.startYear} - {props.finalYear}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default MediaListItem;
