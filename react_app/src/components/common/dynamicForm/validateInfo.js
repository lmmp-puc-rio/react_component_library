function validate_name(values, localErrors) {
  console.log(values);
  if (!values.nome.trim()) {
    localErrors.nome = "Field is required";
  } else if (!/^[A-Za-z]+/.test(values.nome.trim())) {
    localErrors.nome = "Enter a valid name";
  }
  return localErrors;
}

function validate_email(values, localErrors) {
  console.log(values);
  if (!values.email.trim()) {
    localErrors.email = "Field is required";
  } else if (
    values.email &&
    values.email &&
    !/\S+@\S+\.\S+/.test(values.email)
  ) {
    localErrors.email = "Enter a valid e-mail address";
  }
  return localErrors;
}

function validate_password(values, localErrors) {
  console.log(values);
  if (!values.senha.trim()) {
    localErrors.senha = "Field is required";
  } else if (values.senha.length > 6) {
    localErrors.senha = "Password must be longer than 6 characters";
  }
  return localErrors;
}

function validate_phoneNumber(values, localErrors) {
  console.log(values);
  if (!values.telefone.trim()) {
    localErrors.telefone = "Field is required";
  } else if (
    values.telefone &&
    values.telefone &&
    !/^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/.test(
      values.telefone.trim()
    )
  ) {
    localErrors.telefone = "Enter a valid phone number";
  }
  return localErrors;
}

function validate_single(values, field) {
  console.log(field);
  console.log(values);
  let errors = {};

  if (field === "nome") {
    errors = validate_name(values, errors);
  }
  if (field === "email") {
    errors = validate_email;
  }
  if (field === "senha") {
    errors = validate_password;
  }
  if (field === "telefone") {
    errors = validate_phoneNumber;
  }
  return errors;
}

function validate(values) {
  console.log(values);
  let errors = {};

  errors = validate_name(values, errors);
  errors = validate_email(values, errors);
  errors = validate_password(values, errors);
  errors = validate_phoneNumber(values, errors);
  return errors;
}
export { validate, validate_single };
