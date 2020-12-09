import React from 'react';
import { connect } from 'react-redux';

import MoviePreviewDetails from '../components/MoviePreviewDetails';
import Header from '../components/Header';

import '../assets/style/pages/MoviePreview.scss';

const MoviePreview = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.filter((movie) => movie._id == movieId)[0];
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

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(MoviePreview);
