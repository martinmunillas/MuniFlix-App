import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AdminEpisodes from './AdminEpisodes';

const AdminSeasons = ({ season, serieId }) => {
  const handleDeleteSeason = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/series/${serieId}/seasons/${season._id}`,
    });
  };
  return (
    <div>
      <h1>Season {season.number}</h1>
      <button onClick={handleDeleteSeason}>Delete Season</button>
      <button>
        <Link to={`/admin/series/${serieId}/seasons/${season._id}/episode/add`}>Add Episode</Link>
      </button>
      <div>
        {season.episodes.map((episode) => (
          <AdminEpisodes
            episode={episode}
            seasonNumber={season.number}
            serieId={serieId}
            key={episode._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSeasons;
