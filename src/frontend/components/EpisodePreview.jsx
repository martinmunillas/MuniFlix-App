import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/EpisodePreview.scss';

const EpisodePreview = (props) => {
  const { episode, seasonNumber } = props;
  return (
    <div className='episodePreview'>
      <Link to={`/watch/${episode._id}`}>
        <img src={episode.cover} alt='' />
        <div className='episodePreview__info'>
          <h4 className='episodePreview_number'>
            S{seasonNumber}E{episode.number}
          </h4>
          <h4 className='episodePreview_title'>{episode.name}</h4>
          <p className='episodePreview_description'>
            {episode.description.length > 110
              ? episode.description.substring(0, 100) + '...'
              : episode.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodePreview;
