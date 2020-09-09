import React from 'react';
import { Link } from 'react-router-dom';

import SeasonPreview from './SeasonPreview';

import '../assets/style/components/MoviePreviewDetails.scss';

const SeriesPreviewDetails = ({ serie }) => {
  return (
    <section className='moviePreviewDetails'>
      <Link to='/'>
        <button className='moviePreviewDetails_goHome'>⬅ Go Home</button>
      </Link>
      <h1 className='moviePreviewDetails_title'>{serie.name}</h1>
      <p className='moviePreviewDetails_description'>{serie.description}</p>
      <ul className='moviePreviewDetails_details'>
        <li className='moviePreviewDetails_details-year'>
          {serie.startYear} - {serie.finalYear}
        </li>
        <li className='moviePreviewDetails_details-clasification'>
          +{serie.clasification}
        </li>
      </ul>
      <div className='seasons'>
        {serie.seasons.map((season) => (
          <SeasonPreview season={season} key={season._id} />
        ))}
      </div>
    </section>
  );
};

export default SeriesPreviewDetails;
