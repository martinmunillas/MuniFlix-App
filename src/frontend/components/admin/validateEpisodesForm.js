const validateForm = (that) => {
  let nameError = '';
  let descriptionError = '';
  let numberError = '';
  let srcError = '';

  if (!that.state.form.name) {
    nameError = "This field can't be empty.";
  }

  if (!that.state.form.description) {
    descriptionError = "This field can't be empty.";
  }

  if (!that.state.form.number) {
    numberError = "This field can't be empty.";
  }

  if (!that.state.form.src) {
    srcError = "This field can't be empty and must be a valid address.";
  }

  const errors = {
    nameError,
    descriptionError,
    numberError,
    srcError,
  };

  return errors;
};

export default validateForm;
