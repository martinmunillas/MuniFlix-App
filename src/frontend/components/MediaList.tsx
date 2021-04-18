import React from "react";

import MediaListItem from "./MediaListItem";

import "../assets/style/components/MediaList.scss";

interface MediaListProps {
  title: string;
  centeredTitle?: boolean;
  isMovie?: boolean;
  media: any[];
}

const MediaList: React.FC<MediaListProps> = (props) => {
  return (
    <div className={`mediaList ${props.centeredTitle ? "centered" : ""}`}>
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
