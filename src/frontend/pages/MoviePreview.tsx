import React from "react";
import { useSelector } from "react-redux";

import MoviePreviewDetails from "../components/MoviePreviewDetails";
import Header from "../components/Header";

import "../assets/style/pages/MoviePreview.scss";
import { useParams } from "react-router";

const MoviePreview = ({}) => {
  const { movieId } = useParams<any>();
  const movie = useSelector((state: any) =>
    state.media.movies.find((movie: any) => movie._id == movieId)
  );
  return (
    <>
      <Header />
      <div className='moviePreview'>
        <MoviePreviewDetails movie={movie} />
        <img src={movie.cover} alt='' className='moviePreviewImage' />
      </div>
    </>
  );
};

export default MoviePreview;
