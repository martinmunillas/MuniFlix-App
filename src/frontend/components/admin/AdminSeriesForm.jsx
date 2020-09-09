import React from 'react';

import validateForm from './validateSeriesForm';

import '../../assets/style/components/admin/AdminCreateSeriesForm.scss';

class AdminSeriesForm extends React.Component {
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
    const {
      name,
      description,
      cast,
      startYear,
      finalYear,
      clasification,
      cover,
    } = this.state.form;

    const {
      nameError,
      descriptionError,
      castError,
      startYearError,
      finalYearError,
      clasificationError,
      coverError,
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

        <label>Cast</label>
        <textarea
          type='text'
          name='cast'
          onChange={this.handleArrayChange}
          value={cast}
        />
        {castError && <label className='formAlert'>{castError}</label>}

        <div className='createNewSeries_details'>
          <div>
            <label>Start Year</label>
            <input
              type='text'
              name='startYear'
              onChange={this.handleChange}
              value={startYear}
            />
            {startYearError && (
              <label className='formAlert'>{startYearError}</label>
            )}
          </div>

          <div>
            <label>Final Year</label>
            <input
              type='text'
              name='finalYear'
              onChange={this.handleChange}
              value={finalYear}
            />
            {finalYearError && (
              <label className='formAlert'>{finalYearError}</label>
            )}
          </div>

          <div>
            <label>Clasification</label>
            <input
              type='text'
              name='clasification'
              onChange={this.handleChange}
              value={clasification}
            />
            {clasificationError && (
              <label className='formAlert'>{clasificationError}</label>
            )}
          </div>
        </div>

        <label>Cover Photo</label>
        <input
          type='text'
          name='cover'
          onChange={this.handleChange}
          value={cover}
        />
        {coverError && <label className='formAlert'>{coverError}</label>}

        <button type='submit'>Publish</button>
      </form>
    );
  }
}

export default AdminSeriesForm;
