import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AdminMovieForm from '../../components/admin/AdminMovieForm';

const AdminEditMovie = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.find((movie) => movie._id === movieId);
  const handleSubmit = (data) => {
    try {
      axios({
        method: 'put',
        url: `http://localhost:3000/movies/${movie._id}`,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <AdminMovieForm handleSubmit={handleSubmit} formValues={movie} />;
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(AdminEditMovie);
