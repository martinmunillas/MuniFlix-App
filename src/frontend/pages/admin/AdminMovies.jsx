import React from 'react';
import { connect } from 'react-redux'

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminCreateMovieForm from '../../components/admin/AdminCreateMovieForm';

const AdminMovies = (props) => {
  return (
    <AdminMediaTemplate
      media={props.movies}
      mediaPath='/movies'
      form={<AdminCreateMovieForm/>}
      name="Movies"
    />
  );
};

const mapStateToProps = state => {
  return {
    movies: state.media.movies
  }
}

export default connect(mapStateToProps, null)(AdminMovies)