import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

const AdminMovieDetails = (props) => {
  const { movieId } = props.match.params;
  const movie = props.movies.find((movie) => movie._id == movieId);
  const { _id, name, cover, director, description, year, cast } = movie;

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/movies/${_id}`
    })
  }

  return (
    <div className='adminMovieDetails'>
      <img src={cover} alt={name} />
      <h1>{name}</h1>
      <p>{year}</p>
      <h4>{director}</h4>
      <p>{description}</p>
      <p>{cast}</p>
      <button>
        <Link to={`/admin/movies/${_id}/edit`}>Edit</Link>
      </button>

      <button onClick={handleDelete} >Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.media.movies,
  };
};

export default connect(mapStateToProps, null)(AdminMovieDetails);
