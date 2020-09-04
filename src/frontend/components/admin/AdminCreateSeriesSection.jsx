import React from 'react';
import axios from 'axios'

import AdminCreateSeriesForm from '../../components/admin/AdminCreateSeriesForm'

import '../../assets/style/pages/admin/AdminCreateSeries.scss';

class AdminCreateSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleSubmit = (e) => {
      e.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:3000/series',
        data: this.state.form
      })     
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="adminCreateSeries">
        <h1 className="adminCreateSeries_title">Create New Serie</h1>
        <AdminCreateSeriesForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default AdminCreateSeries;
