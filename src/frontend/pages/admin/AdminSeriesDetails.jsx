import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminSeriesDetails = (props) => {
  const { serieId } = props.match.params;
  const serie = props.series.filter((serie) => serie._id == serieId)[0];
  const { name, cover, director, description, startYear, finalYear, cast } = serie;
  return (
    <div className='adminMediaDetails'>
      <img src={cover} alt={name} />
      <h1>{name}</h1>
      <p>
        {startYear} - {finalYear}
      </p>
      <p>{description}</p>
      <p>{cast}</p>
      <button>
        <Link to={`/admin/series/${_id}/edit`}>Edit</Link>
      </button>

      <button>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(AdminSeriesDetails);
