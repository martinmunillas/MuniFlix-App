import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addSeries } from '../../redux/actions';

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminSeries = (props) => {
  const handleSubmit = (data) => {
    props.addSeries(data)
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

const mapDispatchToProps = {
  addSeries,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSeries);
