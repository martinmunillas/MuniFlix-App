import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { editEpisode } from '../../redux/actions';

import AdminEpisodesForm from '../../components/admin/AdminEpisodesForm';

const AdminEditEpisode = (props) => {
  const { serieId, episodeId } = props.match.params;
  const serie = props.series.find((serie) => serie._id === serieId);
  const episodes = [];
  serie.seasons.forEach((season) =>
    season.episodes.forEach((episode) => episodes.push(episode))
  );
  const episode = episodes.find((episode) => episode._id === episodeId);

  const handleSubmit = (data) => {
    props.editEpisode(data, episode._id);
    props.history.push(`/admin/series/${serie._id}`)
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>
        Edit "{episode.name}" of {serie.name}
      </h1>
      <AdminEpisodesForm handleSubmit={handleSubmit} formValues={episode} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

const mapDispatchToProps = {
  editEpisode,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditEpisode);
