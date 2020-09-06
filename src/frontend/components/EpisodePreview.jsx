import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/EpisodePreview.scss';

const EpisodePreview = (props) => {
  const { episode, seasonNumber } = props;
  return (
    <div className='episodePreview'>
      <h3 className='episodePreview_number'>S{seasonNumber}E{episode.number}</h3>
      <h3 className='episodePreview_title'>{episode.name}</h3>
      <p className='episodePreview_description'>
        {episode.description.length < 50
          ? episode.description
          : episode.description.substring(0, 20) + '...'}
      </p>
      <Link className='episodePreview_play' to={`/watch/${episode._id}`}>
        <button className='episodePreview_play-button'>Play ▶</button>
      </Link>
    </div>
  );
};

export default EpisodePreview;
