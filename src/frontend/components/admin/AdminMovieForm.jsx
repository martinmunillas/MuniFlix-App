import React from 'react';

import validateMovieForm from './validateMovieForm';

import '../../assets/style/components/admin/AdminCreateMovieForm.scss';

class AdminCreateMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.formValues,
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateMovieForm(this);
    console.log(!Object.values(errors).some((error) => !!error))
    console.log(errors);

    if (!Object.values(errors).some((error) => !!error)) {
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
      director,
      cast,
      year,
      duration,
      clasification,
      cover,
      src,
    } = this.state.form;

    const {
      nameError,
      descriptionError,
      directorError,
      castError,
      yearError,
      durationError,
      clasificationError,
      coverError,
      srcError,
    } = this.state.errors;

    return (
      <form onSubmit={this.handleSubmit} className='createNewMovie'>
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

        <label>Director</label>
        <input
          type='text'
          name='director'
          onChange={this.handleChange}
          value={director}
        />
        {directorError && <label className='formAlert'>{directorError}</label>}

        <label>Cast</label>
        <textarea
          type='text'
          name='cast'
          onChange={this.handleArrayChange}
          value={cast}
        />
        {castError && <label className='formAlert'>{castError}</label>}

        <div className='createNewMovie_details'>
          <div>
            <label>Year</label>
            <input
              type='text'
              name='year'
              onChange={this.handleChange}
              value={year}
            />
            {yearError && <label className='formAlert'>{yearError}</label>}
          </div>

          <div>
            <label>Duration</label>
            <input
              type='text'
              name='duration'
              onChange={this.handleChange}
              value={duration}
            />
            {durationError && (
              <label className='formAlert'>{durationError}</label>
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

        <label>Video Url</label>
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

export default AdminCreateMovieForm;
