import React from 'react';
import { connect } from 'react-redux';

import MoviePreviewDetails from '../components/MoviePreviewDetails';
import MoviePreviewImage from '../components/MoviePreviewImage';

import '../assets/style/pages/MoviePreview.scss'

const MoviePreview = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.filter((movie) => movie.id == movieId)[0];
  return (
    <div className="moviePreview">
      <MoviePreviewDetails movie={movie} />
      <MoviePreviewImage movie={movie} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(MoviePreview);
