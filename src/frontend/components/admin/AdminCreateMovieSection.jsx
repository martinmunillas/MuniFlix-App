import React from 'react';
import axios from 'axios'

import AdminCreateMovieForm from '../../components/admin/AdminCreateMovieForm'

import '../../assets/style/pages/admin/AdminCreateMovie.scss';

class AdminCreateMovie extends React.Component {
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
        url: 'http://localhost:3000/movies',
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
      <div className="adminCreateMovie">
        <h1 className="adminCreateMovie_title">Create New Movie</h1>
        <AdminCreateMovieForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default AdminCreateMovie;
