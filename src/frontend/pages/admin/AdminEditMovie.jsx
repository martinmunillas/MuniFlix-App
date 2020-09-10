import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateMovie } from '../../redux/actions';

import AdminMovieForm from '../../components/admin/AdminMovieForm';

const AdminEditMovie = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.find((movie) => movie._id === movieId);

  const handleSubmit = (data) => {
    props.updateMovie(data, movie._id);
    props.history.push(`/admin/movies/${movie._id}`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Edit "{movie.name}"</h1>
      <AdminMovieForm handleSubmit={handleSubmit} formValues={movie} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

const mapDispatchToProps = { updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditMovie);
