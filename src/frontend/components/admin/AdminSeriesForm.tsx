import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import validateForm from "./validateSeriesForm";

import "../../assets/style/components/admin/AdminCreateSeriesForm.scss";

interface AdminSeriesFormProps {
  formValues: any;
  handleSubmit: (payload: any) => void;
}

const AdminSeriesForm: React.FC<AdminSeriesFormProps> = (props) => {
  const [form, setForm] = useState(props.formValues || {});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (!Object.values(errors).some((error) => error)) {
      props.handleSubmit(form);
    }
    setErrors(errors);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.split(","),
    });
  };

  const {
    name,
    description,
    cast,
    startYear,
    finalYear,
    clasification,
    cover,
  } = form;

  return (
    <form onSubmit={handleSubmit} className='createNewSeries'>
      <label>Name</label>
      <input type='text' name='name' onChange={handleChange} value={name} />
      {errors.name && <label className='formAlert'>{errors.name}</label>}

      <label>Description</label>
      <textarea
        name='description'
        onChange={handleChange}
        value={description}
      />
      {errors.description && (
        <label className='formAlert'>{errors.description}</label>
      )}

      <label>Cast</label>
      <textarea name='cast' onChange={handleArrayChange} value={cast} />
      {errors.cast && <label className='formAlert'>{errors.cast}</label>}

      <div className='createNewSeries_details'>
        <div>
          <label>Start Year</label>
          <input
            type='text'
            name='startYear'
            onChange={handleChange}
            value={startYear}
          />
          {errors.startYear && (
            <label className='formAlert'>{errors.startYear}</label>
          )}
        </div>

        <div>
          <label>Final Year</label>
          <input
            type='text'
            name='finalYear'
            onChange={handleChange}
            value={finalYear}
          />
          {errors.finalYear && (
            <label className='formAlert'>{errors.finalYear}</label>
          )}
        </div>

        <div>
          <label>Clasification</label>
          <input
            type='text'
            name='clasification'
            onChange={handleChange}
            value={clasification}
          />
          {errors.clasification && (
            <label className='formAlert'>{errors.clasification}</label>
          )}
        </div>
      </div>

      <label>Cover Photo</label>
      <input type='text' name='cover' onChange={handleChange} value={cover} />
      {errors.cover && <label className='formAlert'>{errors.cover}</label>}

      <button type='submit'>Publish</button>
    </form>
  );
};

export default AdminSeriesForm;
