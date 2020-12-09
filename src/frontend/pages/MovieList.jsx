import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MediaList from '../components/MediaList';

const MovieList = (props) => {
  return (
    <>
      <Header />
      <MediaList media={props.movies} isMovie={true} title='Movies' centeredTitle />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(MovieList);
