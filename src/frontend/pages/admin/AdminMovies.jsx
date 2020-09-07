import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminMovieForm from '../../components/admin/AdminMovieForm';

const AdminMovies = (props) => {
  const handleSubmit = (data) => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/movies',
      data,
    });
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

export default connect(mapStateToProps, null)(AdminMovies);
