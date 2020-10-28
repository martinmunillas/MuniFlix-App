import React from 'react';

import MediaListItem from './MediaListItem';

import '../assets/style/components/MediaList.scss';

const MediaList = (props) => {
  return (
    <div className='mediaList'>
      <h1>{props.title}</h1>
      <ul>
        {props.media.map((item, i) => (
          <MediaListItem {...item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
