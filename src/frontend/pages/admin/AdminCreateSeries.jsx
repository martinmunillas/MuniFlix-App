import React from 'react';
import { connect } from 'react-redux';

import { addSeries } from '../../redux/actions';

import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminCreateSeries = (props) => {
  const handleSubmit = (data) => {
    props.addSeries(data);
    props.history.push(`/admin/series/`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Create Series</h1>
      <AdminSeriesForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};


const mapDispatchToProps = { addSeries };

export default connect(null, mapDispatchToProps)(AdminCreateSeries);
