const validateForm = (form: any) => {
  const errors: Record<string, string> = {};

  if (!form.name) {
    errors["name"] = "This field can't be empty.";
  }

  if (!form.description) {
    errors["description"] = "This field can't be empty.";
  }

  if (!form.number) {
    errors["number"] = "This field can't be empty.";
  }

  if (!form.src) {
    errors["src"] = "This field can't be empty and must be a valid address.";
  }

  return errors;
};

export default validateForm;
