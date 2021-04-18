import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateMovie } from "../../redux/actions";

import AdminMovieForm from "../../components/admin/AdminMovieForm";
import { useHistory, useParams } from "react-router";

interface AdminEditMovieProps {}

const AdminEditMovie: React.FC<AdminEditMovieProps> = ({}) => {
  const { movieId } = useParams<any>();
  const movie = useSelector((state: any) =>
    state.media.movies.find((movie: any) => movie._id === movieId)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data: any) => {
    dispatch(updateMovie(data, movie._id));
    history.push(`/admin/movies/${movie._id}`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Edit "{movie.name}"</h1>
      <AdminMovieForm handleSubmit={handleSubmit} formValues={movie} />
    </div>
  );
};

export default AdminEditMovie;
