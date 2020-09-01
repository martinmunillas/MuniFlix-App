import React from 'react';

import EpisodePreview from './EpisodePreview'

import '../assets/style/components/SeasonPreview.scss'

const SeasonPreview = ({ season }) => {
  return (
      <div className="seasonPreview">
          <h1 className="seasonPreview_number">Season {season.number}</h1>
          <div className="seasonPreview_episodes">
              {season.episodes.map(episode => (
                  <EpisodePreview episode={episode} seasonNumber={season.number} key={episode.id} />
              ))}
          </div>
      </div>
  )
};

export default SeasonPreview;
