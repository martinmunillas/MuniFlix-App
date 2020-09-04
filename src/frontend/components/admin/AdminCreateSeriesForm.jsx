import React from 'react';

import '../../assets/style/components/admin/AdminCreateSeriesForm.scss';

const AdminCreateSeriesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='createNewSeries'>
      <label>Name</label>
      <input type='text' name='name' onChange={props.handleChange} />

      <label>Description</label>
      <textarea type='text' name='description' onChange={props.handleChange} />

      <div className='createNewSeries_details'>
        <div>
          <label>Start Year</label>
          <input type='text' name='startYear' onChange={props.handleChange} />
        </div>

        <div>
          <label>Final Year</label>
          <input type='text' name='finalYear' onChange={props.handleChange} />
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
      <button type='submit'>Publish</button>
    </form>
  );
};

export default AdminCreateSeriesForm;
