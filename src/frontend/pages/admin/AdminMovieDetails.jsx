import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { deleteMovie } from '../../redux/actions';

import '../../assets/style/pages/admin/AdminMovieDetails.scss';

const AdminMovieDetails = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.find((movie) => movie._id == movieId);
  const { _id, name, cover, director, description, year, cast } = movie;

  const handleDelete = () => {
    props.deleteMovie(_id);
    props.history.push('/admin/movies');
  };

  return (
    <div className='adminMovieDetails'>
      <img src={cover} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{year}</p>
        <h3>{director}</h3>
        <p>{description}</p>
        <p>{cast.join(', ')}</p>
        <Link to={`/admin/movies/${_id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete} className='button2'>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

const mapDispatchToProps = { deleteMovie };

export default connect(mapStateToProps, mapDispatchToProps)(AdminMovieDetails);
