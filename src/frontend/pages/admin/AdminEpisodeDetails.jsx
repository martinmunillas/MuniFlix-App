import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

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
  const { seasonNumber } = season;

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/series/episodes/${_id}`,
    });
  };

  return (
    <div className='adminMovieDetails'>
      <img src={serie.cover} alt={name} />
      <h1>
        S{seasonNumber}E{number} {name}
      </h1>
      <p>{description}</p>
      <button>
        <Link to={`/admin/series/${serie._id}/episode/${_id}/edit`}>Edit</Link>
      </button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(AdminEpisodeDetails);
