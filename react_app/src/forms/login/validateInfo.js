//TODO: Multilanguage = Input Errors in a Resource File

function validate_username(values,localErrors) {

    // Username values.username
    if (!values.username.trim()) {
        localErrors.username = 'Username is required';
    }
    return localErrors;
}

function validate_password(values,localErrors) {

    // Password values.password1
    if (!values.password.trim()) {
        localErrors.password = 'Password is required';
    } else if (values.password.length < 6) {
        localErrors.password = 'Password needs to be 6 characters or more';
    }
return localErrors;
}

//Validate Single Field
function validate_single(values,field) {

    let errors = {};
    if (field === "username"){
        errors = validate_username(values,errors)
    }

    if (field === "password1"){
        errors = validate_password(values,errors)
    }
    return errors;
}

//Validate All Fields in Submit
function validate(values) {

    let errors = {};
    
    errors = validate_username(values,errors)

    errors = validate_password(values,errors)

    return errors;
}

// export {validate}
export {validate, 
        validate_single};