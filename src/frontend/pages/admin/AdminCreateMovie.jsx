import React from 'react';
import { connect } from 'react-redux';

import { addMovie } from '../../redux/actions';

import AdminMovieForm from '../../components/admin/AdminMovieForm';

const AdminCreateMovie = (props) => {
  const handleSubmit = (data) => {
    props.addMovie(data);
    props.history.push(`/admin/movies/`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Create Movie</h1>
      <AdminMovieForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};


const mapDispatchToProps = { addMovie };

export default connect(null, mapDispatchToProps)(AdminCreateMovie);
