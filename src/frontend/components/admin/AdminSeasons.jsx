import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { deleteSeason } from '../../redux/actions';

import '../../assets/style/components/admin/AdminSeasons.scss';

import AdminEpisodes from './AdminEpisodes';

const AdminSeasons = (props) => {
  const { season, serieId } = props;

  const handleDeleteSeason = () => {
    props.deleteSeason(season._id, serieId);
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

const mapDispatchToProps = {
  deleteSeason,
};

export default connect(null, mapDispatchToProps)(AdminSeasons);
