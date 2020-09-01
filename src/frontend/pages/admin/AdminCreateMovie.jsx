import React from 'react';

import AdminCreateMovieForm from '../../components/admin/AdminCreateMovieForm'

import '../../assets/style/pages/AdminCreateMovie.scss';

class AdminCreateMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.form)
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
