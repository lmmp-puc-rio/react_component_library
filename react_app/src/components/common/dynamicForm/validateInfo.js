function validate_name(values, localErrors) {
  if (!values.nome.trim()) {
    localErrors.nome = "Field is required";
  } else if (!/^[A-Za-z]+/.test(values.nome.trim())) {
    localErrors.nome = "Enter a valid name";
  }
  return localErrors;
}

function validate_email(values, localErrors) {
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
  if (!values.senha.trim()) {
    localErrors.senha = "Field is required";
  } else if (values.senha.length > 6) {
    localErrors.senha = "Password needs more than 6 characters";
  }
  return localErrors;
}

function validate_phoneNumber(values, localErrors) {
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
  let errors = "";

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
  let errors = {};

  errors = validate_name(values, errors);
  errors = validate_email(values, errors);
  errors = validate_password(values, errors);
  errors = validate_phoneNumber(values, errors);
  return errors;
}
export { validate, validate_single };
