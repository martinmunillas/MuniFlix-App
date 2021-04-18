import React from "react";
import { useDispatch } from "react-redux";

import { addMovie } from "../../redux/actions";

import AdminMovieForm from "../../components/admin/AdminMovieForm";
import { useHistory } from "react-router";

interface AdminCreateMovieProps {}

const AdminCreateMovie: React.FC<AdminCreateMovieProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data: any) => {
    dispatch(addMovie(data));
    history.push(`/admin/movies/`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Create Movie</h1>
      <AdminMovieForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};

export default AdminCreateMovie;
