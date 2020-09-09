import React from 'react';
import axios from 'axios';

import AdminEpisodesForm from '../../components/admin/AdminEpisodesForm';

const AdminAddEpisodes = (props) => {
  const { serieId, seasonId } = props.match.params;

  const handleSubmit = (data) => {
    axios({
      method: 'post',
      url: `http://localhost:3000/series/episodes`,
      data: { ...data, season: seasonId },
    });
  };

  return (
    <div className="safeContainer">
      <h1 className="mV">Add Episode</h1>
      <AdminEpisodesForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};

export default AdminAddEpisodes;
