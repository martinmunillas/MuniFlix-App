const validateForm = (that) => {
  let nameError = '';
  let descriptionError = '';
  let directorError = '';
  let castError = '';
  let yearError = '';
  let durationError = '';
  let clasificationError = '';
  let coverError = '';
  let srcError = '';
  let error = false;

  if (!that.state.form.name) {
    nameError = "This field can't be empty.";
  }

  if (!that.state.form.description) {
    descriptionError = "This field can't be empty.";
  }

  if (!that.state.form.director) {
    directorError = "This field can't be empty.";
  }

  if (!that.state.form.cast) {
    castError = "This field can't be empty.";
  }

  if (!that.state.form.duration) {
    durationError =
      "This field can't be empty and must be the duration of the movie expressed in minutes.";
  }

  if (!that.state.form.year) {
    yearError = "This field can't be empty and must be a number of 4 digits.";
  }

  if (!that.state.form.clasification) {
    clasificationError =
      "This field can't be empty and must be a number of 2 digits.";
  }

  if (!that.state.form.cover) {
    coverError = "This field can't be empty and must be a valid address.";
  }

  if (!that.state.form.src) {
    srcError = "This field can't be empty and must be a valid address.";
  }

  const errors = {
    nameError,
    descriptionError,
    directorError,
    castError,
    yearError,
    durationError,
    clasificationError,
    coverError,
    srcError,
  };

  return errors;
};

export default validateForm;
