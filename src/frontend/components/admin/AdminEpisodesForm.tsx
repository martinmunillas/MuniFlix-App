import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import validateForm from "./validateEpisodesForm";

import "../../assets/style/components/admin/AdminCreateSeriesForm.scss";

interface AdminEpisodesFormProps {
  formValues: any;
  handleSubmit: (payload: any) => void;
}

const AdminEpisodesForm: React.FC<AdminEpisodesFormProps> = (props) => {
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
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='createNewSeries'>
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

      <label>Number</label>
      <input
        type='text'
        name='number'
        onChange={handleChange}
        value={form.number}
      />
      {errors["number"] && (
        <label className='formAlert'>{errors["number"]}</label>
      )}

      <label>Source</label>
      <input type='text' name='src' onChange={handleChange} value={form.src} />
      {errors["src"] && <label className='formAlert'>{errors["src"]}</label>}

      <label>Cover</label>
      <input
        type='text'
        name='cover'
        onChange={handleChange}
        value={form.cover}
      />
      {errors["src"] && <label className='formAlert'>{errors["cover"]}</label>}

      <button type='submit'>Publish</button>
    </form>
  );
};

export default AdminEpisodesForm;
