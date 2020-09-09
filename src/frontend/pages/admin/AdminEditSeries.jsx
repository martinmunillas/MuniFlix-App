import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminEditSeries = (props) => {
  const { serieId } = props.match.params;
  const serie = props.series.find((serie) => serie._id === serieId);

  const handleSubmit = (data) => {
    try {
      axios({
        method: 'put',
        url: `http://localhost:3000/series/${serie._id}`,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="safeContainer">
      <h1 className="mV">Edit "{serie.name}"</h1>
      <AdminSeriesForm handleSubmit={handleSubmit} formValues={serie} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(AdminEditSeries);
