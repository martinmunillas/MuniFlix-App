import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MediaList from '../components/MediaList';

const SerieList = (props) => {
  return (
    <>
      <Header />
      <MediaList media={props.series} title='Series' centeredTitle />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(SerieList);
