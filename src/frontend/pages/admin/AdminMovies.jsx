import React from 'react';
import { connect } from 'react-redux';

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';

const AdminMovies = (props) => {
  return <AdminMediaTemplate media={props.movies} mediaPath='/movies' name='Movies' />;
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(AdminMovies);
