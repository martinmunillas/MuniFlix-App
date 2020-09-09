import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminSeries = (props) => {
  const handleSubmit = (data) => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/series',
      data,
    });
  };
  return (
    <AdminMediaTemplate
      media={props.series}
      mediaPath='/series'
      form={
        <AdminSeriesForm
          handleSubmit={handleSubmit}
          formValues={{
            name: '',
            description: '',
            director: '',
            cast: '',
            year: '',
            duration: '',
            clasification: '',
            cover: '',
            src: '',
          }}
        />
      }
      name='Series'
    />
  );
};

const mapStateToProps = (state) => {
  return {
    series: state.media.series,
  };
};

export default connect(mapStateToProps, null)(AdminSeries);
