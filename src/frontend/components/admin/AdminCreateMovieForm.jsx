import React from 'react';

import '../../assets/style/components/admin/AdminCreateMovieForm.scss';

const AdminCreateMovieForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='createNewMovie'>
      <label>Title</label>
      <input type='text' name='title' onChange={props.handleChange} />

      <label>Description</label>
      <textarea type='text' name='description' onChange={props.handleChange} />

      <div className='createNewMovie_details'>
        <div>
          <label>Year</label>
          <input type='text' name='year' onChange={props.handleChange} />
        </div>

        <div>
          <label>Duration</label>
          <input type='text' name='duration' onChange={props.handleChange} />
        </div>

        <div>
          <label>Clasification</label>
          <input
            type='text'
            name='clasification'
            onChange={props.handleChange}
          />
        </div>
      </div>

      <label>Cover Photo</label>
      <input type='text' name='cover' onChange={props.handleChange} />

      <label>Video Url</label>
      <input type='text' name='src' onChange={props.handleChange} />

      <button type='submit'>Publish</button>
    </form>
  );
};

export default AdminCreateMovieForm;
