const validateForm = (that) => {
  let nameError = '';
  let descriptionError = '';
  let castError = '';
  let startYearError = '';
  let finalYearError = '';
  let clasificationError = '';
  let coverError = '';

  if (!that.state.form.name) {
    nameError = "This field can't be empty.";
  }

  if (!that.state.form.description) {
    descriptionError = "This field can't be empty.";
  }

  if (!that.state.form.cast) {
    castError = "This field can't be empty.";
  }

  if (!that.state.form.startYear) {
    startYearError = "This field can't be empty and must be a number of 4 digits.";
  }

  if (!that.state.form.finalYear) {
    finalYearError = "This field can't be empty and must be a number of 4 digits.";
  }

  if (!that.state.form.clasification) {
    clasificationError =
      "This field can't be empty and must be a number of 2 digits.";
  }

  if (!that.state.form.cover) {
    coverError = "This field can't be empty and must be a valid address.";
  }

  const errors = {
    nameError,
    descriptionError,
    castError,
    startYearError,
    finalYearError,
    clasificationError,
    coverError,
  };

  return errors;
};

export default validateForm;
