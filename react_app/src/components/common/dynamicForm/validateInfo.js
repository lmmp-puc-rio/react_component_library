function validate_data(values, localErrors) {
  if (!values.name.trim()) {
    localErrors.name = "Field is required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    localErrors.name = "Enter a valid field";
  }
  return localErrors;
}

function validate_single(values, field) {
  let errors = {};

  if (field === "name") {
    errors = validate_data(values, errors);
  }
  return errors;
}

function validate(values) {
  let errors = {};

  errors = validate_data(values, errors);
  return errors;
}

export { validate, validate_single };
