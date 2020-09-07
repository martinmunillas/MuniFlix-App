import React from 'react';
import axios from 'axios'

import '../../assets/style/components/admin/AdminCreateSeriesForm.scss';

class AdminCreateSeriesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/series',
      data: this.state.form,
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleArrayChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value.split(','),
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='createNewSeries'>
        <label>Name</label>
        <input type='text' name='name' onChange={this.handleChange} />

        <label>Description</label>
        <textarea type='text' name='description' onChange={this.handleChange} />

        <label>Director</label>
        <input type='text' name='director' onChange={this.handleChange} />

        <label>Cast</label>
        <textarea type='text' name='cast' onChange={this.handleArrayChange} />

        <div className='createNewSeries_details'>
          <div>
            <label>Start Year</label>
            <input type='text' name='startYear' onChange={this.handleChange} />
          </div>

          <div>
            <label>Final Year</label>
            <input type='text' name='finalYear' onChange={this.handleChange} />
          </div>

          <div>
            <label>Clasification</label>
            <input
              type='text'
              name='clasification'
              onChange={this.handleChange}
            />
          </div>
        </div>

        <label>Cover Photo</label>
        <input type='text' name='cover' onChange={this.handleChange} />
        <button type='submit'>Publish</button>
      </form>
    );
  }
}

export default AdminCreateSeriesForm;
