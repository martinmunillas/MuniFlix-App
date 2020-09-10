import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addMovie } from '../../redux/actions';

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminMovieForm from '../../components/admin/AdminMovieForm';

const AdminMovies = (props) => {
  const handleSubmit = (data) => {
    props.addMovie(data);
    props.history.push('/admin')
  };

  return (
    <AdminMediaTemplate
      media={props.movies}
      mediaPath='/movies'
      form={
        <AdminMovieForm
          handleSubmit={handleSubmit}
          formValues={{
            name: '',
            description: '',
            director: '',
            cast: '',
            year: '',
            duration: '',
            clasification: '',
            cover: '',
            src: '',
          }}
        />
      }
      name='Movies'
    />
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

const mapDispatchToProps = { addMovie };

export default connect(mapStateToProps, mapDispatchToProps)(AdminMovies);
