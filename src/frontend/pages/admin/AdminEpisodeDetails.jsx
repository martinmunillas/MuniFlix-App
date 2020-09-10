import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { deleteEpisode } from '../../redux/actions';

const AdminEpisodeDetails = (props) => {
  const { serieId, episodeId } = props.match.params;
  const serie = props.series.find((serie) => serie._id === serieId);
  const episodes = [];
  serie.seasons.forEach((season) =>
    season.episodes.forEach((episode) => episodes.push(episode))
  );
  const episode = episodes.find((episode) => episode._id === episodeId);
  const season = serie.seasons.find((season) => season._id === episode.season);

  const { _id, name, description, number } = episode;
  const seasonNumber = season.number;

  const handleDelete = () => {
    props.deleteEpisode(_id);
    props.history.push(`/admin/series/${serie._id}`);
  };

  return (
    <div className='adminMovieDetails'>
      <img src={serie.cover} alt={name} />
      <div>
        <h1>
          S{seasonNumber}E{number} {name}
        </h1>
        <p>{description}</p>
        <Link to={`/admin/series/${serie._id}/episode/${_id}/edit`}>
          <button className='button2'>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

const mapDispatchToProps = { deleteEpisode };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminEpisodeDetails);
