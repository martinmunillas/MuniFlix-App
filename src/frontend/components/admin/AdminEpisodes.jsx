import React from 'react';
import { Link } from 'react-router-dom'

const AdminEpisodes = ({ episode, seasonNumber, serieId }) => {
  return (
    <div>
      <Link to={`/admin/series/${serieId}/episode/${episode._id}`}>
        <h1>
          S{seasonNumber}E{episode.number}
        </h1>
        <h2>{episode.name}</h2>
      </Link>
    </div>
  );
};

export default AdminEpisodes