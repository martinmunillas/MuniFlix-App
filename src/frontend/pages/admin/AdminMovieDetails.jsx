import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../../assets/style/pages/admin/AdminMovieDetails.scss';

const AdminMovieDetails = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.find((movie) => movie._id == movieId);
  const { _id, name, cover, director, description, year, cast } = movie;

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/movies/${_id}`,
    });
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
        <button className='button2'>
          <Link to={`/admin/movies/${_id}/edit`}>Edit</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(AdminMovieDetails);
