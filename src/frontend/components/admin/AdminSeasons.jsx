import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../assets/style/components/admin/AdminSeasons.scss';

import AdminEpisodes from './AdminEpisodes';

const AdminSeasons = ({ season, serieId }) => {
  const handleDeleteSeason = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/series/${serieId}/seasons/${season._id}`,
    });
  };
  return (
    <div className='adminSeasons'>
      <div className='adminSeasons_header'>
        <h1>Season {season.number}</h1>
        <div className='adminSeasons_header-buttons'>
          <Link
            to={`/admin/series/${serieId}/seasons/${season._id}/episode/add`}
          >
            <button className='button2'>Add Episode</button>
          </Link>
          <button onClick={handleDeleteSeason}>Delete Season</button>
        </div>
      </div>
      <div className='adminSeasons_episodes'>
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
