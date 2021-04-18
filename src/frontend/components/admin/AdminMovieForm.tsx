import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import validateMovieForm from "./validateMovieForm";

import "../../assets/style/components/admin/AdminCreateMovieForm.scss";

interface AdminCreateMovieForm {
  handleSubmit: (payload: any) => void;
  formValues: any;
}

const AdminCreateMovieForm: React.FC<AdminCreateMovieForm> = (props) => {
  const [form, setForm] = useState(props.formValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const errors = validateMovieForm(form);

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

  return (
    <form onSubmit={handleSubmit} className='createNewMovie'>
      <label>Name</label>
      <input
        type='text'
        name='name'
        onChange={handleChange}
        value={form.name}
      />
      {errors["name"] && <label className='formAlert'>{errors["name"]}</label>}

      <label>Description</label>
      <textarea
        name='description'
        onChange={handleChange}
        value={form.description}
      />
      {errors["description"] && (
        <label className='formAlert'>{errors["description"]}</label>
      )}

      <label>Director</label>
      <input
        type='text'
        name='director'
        onChange={handleChange}
        value={form.director}
      />
      {errors["director"] && (
        <label className='formAlert'>{errors["director"]}</label>
      )}

      <label>Cast</label>
      <textarea name='cast' onChange={handleArrayChange} value={form.cast} />
      {errors["cast"] && <label className='formAlert'>{errors["cast"]}</label>}

      <div className='createNewMovie_details'>
        <div>
          <label>Year</label>
          <input
            type='text'
            name='year'
            onChange={handleChange}
            value={form.year}
          />
          {errors["year"] && (
            <label className='formAlert'>{errors["year"]}</label>
          )}
        </div>

        <div>
          <label>Duration</label>
          <input
            type='text'
            name='duration'
            onChange={handleChange}
            value={form.duration}
          />
          {errors["duration"] && (
            <label className='formAlert'>{errors["duration"]}</label>
          )}
        </div>

        <div>
          <label>Clasification</label>
          <input
            type='text'
            name='clasification'
            onChange={handleChange}
            value={form.clasification}
          />
          {errors["clasification"] && (
            <label className='formAlert'>{errors["clasification"]}</label>
          )}
        </div>
      </div>

      <label>Cover Photo</label>
      <input
        type='text'
        name='cover'
        onChange={handleChange}
        value={form.cover}
      />
      {errors["cover"] && (
        <label className='formAlert'>{errors["cover"]}</label>
      )}

      <label>Video Url</label>
      <input type='text' name='src' onChange={handleChange} value={form.src} />
      {errors["src"] && <label className='formAlert'>{errors["src"]}</label>}

      <button type='submit'>Publish</button>
    </form>
  );
};

export default AdminCreateMovieForm;
