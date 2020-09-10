import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateSeries } from '../../redux/actions';

import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminEditSeries = (props) => {
  const { serieId } = props.match.params;
  const serie = props.series.find((serie) => serie._id === serieId);

  const handleSubmit = (data) => {
    props.updateSeries(data, serie._id);
    props.history.push(`/admin/series/${serie._id}`)
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Edit "{serie.name}"</h1>
      <AdminSeriesForm handleSubmit={handleSubmit} formValues={serie} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

const mapDispatchToProps = {
  updateSeries,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditSeries);
