import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
    try {
      axios({
        method: 'put',
        url: `http://localhost:3000/series/episodes/${episode._id}`,
        data,
      });
    } catch (error) {
      console.log(error);
    }
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

export default connect(mapStateToProps, null)(AdminEditEpisode);
