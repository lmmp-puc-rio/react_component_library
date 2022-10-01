//TODO: Multilanguage = Input Errors in a Resource File

function validate_username(values,localErrors) {

    // Username values.username
    if (!values.username.trim()) {
        localErrors.username = 'Username is required';
    }
    return localErrors;
}

function validate_name(values,localErrors) {
    
    // Name values.name
    if (!values.name.trim()) {
        localErrors.name = 'Name is required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        localErrors.name = 'Enter a valid name';
    }
    return localErrors;
}

function validate_email(values,localErrors) {

    // Email values.email
    if (!values.email.trim()) {
        localErrors.email = 'E-mail is required';
    } else if (values.email && values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        localErrors.email = 'Enter a valid e-mail address';
    }
return localErrors;
}

function validate_password1(values,localErrors) {

    // Password values.password1
    if (!values.password1.trim()) {
        localErrors.password1 = 'Password is required';
    } else if (values.password1.length < 6) {
        localErrors.password1 = 'Password needs to be 6 characters or more';
    }
return localErrors;
}

function validate_password2(values,localErrors) {

    // Password confirmation values.password2
    if (!values.password2) {
        localErrors.password2 = 'Password confirmation is required';
    } else if (values.password2 !== values.password1) {
        localErrors.password2 = 'Passwords do not match';
    }

return localErrors;
}

//Validate Single Field
function validate_single(values,field) {

    let errors = {};
    if (field === "name"){
        errors = validate_name(values,errors)
    }
    if (field === "username"){
        errors = validate_username(values,errors)
    }
    if (field === "email"){
        errors = validate_email(values,errors)
    }

    if (field === "password1"){
        errors = validate_password1(values,errors)
    }
    
    if (field === "password2"){
        errors = validate_password2(values,errors)
    }
    return errors;
}

//Validate All Fields in Submit
function validate(values) {

    let errors = {};
    
    errors = validate_username(values,errors)

    errors = validate_name(values,errors)

    errors = validate_email(values,errors)

    errors = validate_password1(values,errors)

    errors = validate_password2(values,errors)

    return errors;
}

// export {validate}
export {validate, 
        validate_single};