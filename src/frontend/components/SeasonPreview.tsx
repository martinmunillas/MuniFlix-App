import React from "react";

import EpisodePreview from "./EpisodePreview";

import "../assets/style/components/SeasonPreview.scss";

interface SeasonPreviewProps {
  season: any;
}

const SeasonPreview: React.FC<SeasonPreviewProps> = ({ season }) => {
  return (
    <div className='seasonPreview'>
      <h1 className='seasonPreview_number'>Season {season.number}</h1>
      <div className='seasonPreview_episodes'>
        {season.episodes.map((episode: any) => (
          <EpisodePreview
            episode={episode}
            seasonNumber={season.number}
            key={episode._id}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonPreview;
