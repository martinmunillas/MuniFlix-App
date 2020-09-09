import React from 'react';

import validateForm from './validateEpisodesForm';

import '../../assets/style/components/admin/AdminCreateSeriesForm.scss';

class AdminEpisodesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.formValues || {},
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(this);
    if (!Object.values(errors).some((error) => error)) {
      this.props.handleSubmit(this.state.form);
    }
    this.setState({ ...this.state, errors });
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
    const { name, description, number, src } = this.state.form;

    const {
      nameError,
      descriptionError,
      numberError,
      srcError,
    } = this.state.errors;

    return (
      <form onSubmit={this.handleSubmit} className='createNewSeries'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={name}
        />
        {nameError && <label className='formAlert'>{nameError}</label>}

        <label>Description</label>
        <textarea
          type='text'
          name='description'
          onChange={this.handleChange}
          value={description}
        />
        {descriptionError && (
          <label className='formAlert'>{descriptionError}</label>
        )}

        <label>Number</label>
        <input
          type='text'
          name='number'
          onChange={this.handleChange}
          value={number}
        />
        {numberError && <label className='formAlert'>{numberError}</label>}

        <label>Source</label>
        <input
          type='text'
          name='src'
          onChange={this.handleChange}
          value={src}
        />
        {srcError && <label className='formAlert'>{srcError}</label>}

        <button type='submit'>Publish</button>
      </form>
    );
  }
}

export default AdminEpisodesForm;
