import React from 'react';
import { connect } from 'react-redux';

import SeriesPreviewDetails from '../components/SeriesPreviewDetails';
import SeriesPreviewImage from '../components/SeriesPreviewImage';

import '../assets/style/pages/MoviePreview.scss'

const SeriesPreview = (props) => {
  const { seriesId } = props.match.params;
  const serie = props.series.filter((serie) => serie._id == seriesId)[0];
  return (
    <div className="moviePreview">
      <SeriesPreviewDetails serie={serie} />
      <SeriesPreviewImage serie={serie} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(SeriesPreview);
