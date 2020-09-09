import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import AdminSeasons from '../../components/admin/AdminSeasons';

import '../../assets/style/pages/admin/AdminSeriesDetails.scss';

const AdminSeriesDetails = (props) => {
  const { serieId } = props.match.params;
  const serie = props.series.find((serie) => serie._id == serieId);
  const {
    _id,
    name,
    cover,
    director,
    description,
    startYear,
    finalYear,
    cast,
    seasons,
  } = serie;

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: `http://localhost:3000/series/${_id}`,
    });
  };

  const handleAddSeason = () => {
    axios({
      method: 'post',
      url: `http://localhost:3000/series/${_id}/seasons`,
    });
  };

  return (
    <div className='adminSeriesDetails'>
      <div className='adminSeriesDetails_serie'>
        <img src={cover} alt={name} />
        <div className='adminSeriesDetails_serie-info'>
          <h1>{name}</h1>
          <p>
            {startYear} - {finalYear}
          </p>
          <p>{description}</p>
          <p>{cast}</p>
          <button className='button2'>
            <Link to={`/admin/series/${_id}/edit`}>Edit</Link>
          </button>

          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className='adminSeriesDetails_seasons'>
        {seasons.map((season) => (
          <AdminSeasons season={season} serieId={_id} key={season.number} />
        ))}
      </div>
      <button onClick={handleAddSeason}>Add Season</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(AdminSeriesDetails);
