import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addEpisode } from '../../redux/actions';

import AdminEpisodesForm from '../../components/admin/AdminEpisodesForm';

const AdminAddEpisodes = (props) => {
  const { serieId, seasonId } = props.match.params;

  const handleSubmit = (data) => {
    props.addEpisode({ ...data, season: seasonId });
    props.history.push(`/admin/series/${serieId}`)
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Add Episode</h1>
      <AdminEpisodesForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};

const mapDispatchToProps = {
  addEpisode,
};

export default connect(null, mapDispatchToProps)(AdminAddEpisodes);
