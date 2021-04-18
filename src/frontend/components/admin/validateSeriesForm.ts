const validateForm = (form: any) => {
  const errors: Record<string, string> = {};

  if (!form.name) {
    errors["name"] = "This field can't be empty.";
  }

  if (!form.description) {
    errors["description"] = "This field can't be empty.";
  }

  if (!form.cast) {
    errors["cast"] = "This field can't be empty.";
  }

  if (!form.startYear) {
    errors["startYear"] =
      "This field can't be empty and must be a number of 4 digits.";
  }

  if (!form.finalYear) {
    errors["finalYear"] =
      "This field can't be empty and must be a number of 4 digits.";
  }

  if (!form.clasification) {
    errors["clasification"] =
      "This field can't be empty and must be a number of 2 digits.";
  }

  if (!form.cover) {
    errors["cover"] = "This field can't be empty and must be a valid address.";
  }

  return errors;
};

export default validateForm;
