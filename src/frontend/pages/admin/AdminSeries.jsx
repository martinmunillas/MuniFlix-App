import React from 'react';
import { connect } from 'react-redux'

import AdminMediaTemplate from '../../components/admin/AdminMediaTemplate';
import AdminSeriesForm from '../../components/admin/AdminSeriesForm';

const AdminSeries = (props) => {
  return (
    <AdminMediaTemplate
      media={props.series}
      mediaPath='/series'
      form={<AdminSeriesForm/>}
      name="Series"
    />
  );
};

const mapStateToProps = state => {
    return {
      series: state.media.series
    }
  }

export default connect(mapStateToProps, null)(AdminSeries)
