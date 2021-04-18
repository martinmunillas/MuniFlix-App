import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteMovie } from "../../redux/actions";

import "../../assets/style/pages/admin/AdminMovieDetails.scss";

interface AdminMovieDetailsProps {}

const AdminMovieDetails: React.FC<AdminMovieDetailsProps> = ({}) => {
  const { movieId } = useParams<any>();
  const {
    _id,
    name,
    cover,
    director,
    description,
    year,
    cast,
  } = useSelector((state: any) =>
    state.media.movies.find((movie: any) => movie._id == movieId)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteMovie(_id));
    history.push("/admin/movies");
  };

  return (
    <div className='adminMovieDetails'>
      <img src={cover} alt={name} className='adminMovieDetails__image' />
      <div>
        <h1>{name}</h1>
        <p>{year}</p>
        <h3>{director}</h3>
        <p>{cast.join(", ")}</p>
        <p>{description}</p>
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

export default AdminMovieDetails;
