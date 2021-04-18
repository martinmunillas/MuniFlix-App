import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MediaList from "../components/MediaList";

const SerieList = ({}) => {
  const series = useSelector((state: any) => state.media.series);

  return (
    <>
      <Header />
      <MediaList media={series} title='Series' centeredTitle />
    </>
  );
};

export default SerieList;
