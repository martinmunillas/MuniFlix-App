import React from 'react';

import MediaListItem from './MediaListItem';

import '../assets/style/components/MediaList.scss';

const MediaList = (props) => {
  return (
    <div className="mediaList">
      <ul>
        {props.media.map((item, i) => (
          <MediaListItem {...item} key={i} isMovie={props.isMovie} />
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
