import React from "react";
import { useSelector } from "react-redux";

import AdminMediaTemplate from "../../components/admin/AdminMediaTemplate";

interface AdminMoviesProps {}

const AdminMovies: React.FC<AdminMoviesProps> = ({}) => {
  const movies = useSelector((state: any) => state.media.movies);
  return (
    <AdminMediaTemplate media={movies} mediaPath='/movies' name='Movies' />
  );
};

export default AdminMovies;
