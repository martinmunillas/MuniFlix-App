import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MediaList from "../components/MediaList";

const MovieList = ({}) => {
  const movies = useSelector((state: any) => state.media.movies);
  return (
    <>
      <Header />
      <MediaList media={movies} isMovie title='Movies' centeredTitle />
    </>
  );
};

export default MovieList;
