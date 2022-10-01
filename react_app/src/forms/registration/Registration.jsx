// # Main Import and Utils
import React , { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../index';
import { validate, validate_single } from "./validateInfo";

// # External SubComponents
import { ToastContext } from '../../contexts/ToastContext';

// # Import Component Style
import './Registration.css'

// Form main Title
const formTitle = "Create an Account"
//TODO: Get labels and placeholders from multilanguage structure
// Defined fields (names must match validationInfo file)
const fields = [{type: 'text',
                name: 'username',
                label: 'Username:',
                placeholder: 'Enter a username',
                defaultValue: ""},
                {type: 'text',
                name: 'name',
                label: 'Name:',
                placeholder: 'Enter your full name',
                defaultValue: ""},
                {type: 'text',
                name: 'email',
                label: 'E-mail:',
                placeholder: 'Enter a valid e-mail adreess',
                defaultValue: ""},
                {type: 'password',
                name: 'password1',
                label: 'Password:',
                placeholder: 'Choose a password',
                defaultValue: ""},
                {type: 'password',
                name: 'password2',
                label: 'Confirm password:',
                placeholder: 'Confirm the password',
                defaultValue: ""}
                ]

function RegistrationField(props) {
    
    // Form field properties
    const fieldType = props.data.type
    const fieldName = props.data.name
    const fieldLabel = props.data.label
    const fieldPlaceholder = props.data.placeholder
    const handleBlur = props.handleBlur
    const handleChange = props.handleChange
    const values = props.values

    // Render the Component
    return (
        <label className="registration-field-label"> {fieldLabel}
            <input  type={fieldType}
                    name={fieldName}
                    placeholder={fieldPlaceholder}
                    value={values[fieldName]}
                    onBlur={handleBlur}
                    onChange={handleChange}/>
        {/* Error spam - Optional */}
        {props.children} 
        </label>
        );
}

// TODO: Populate field labels and placeholders from resource for multilanguage
function Registration(props) {
    
    let history = useHistory();
    const { toastList, setToastList, showToast } = useContext(ToastContext);

    // Submit URL Destination
    const url = props.submitionURL

    
    let defaults = {}
    fields.map((field) => {
        return defaults[field.name] = field.defaultValue    }
        );

    // Hook to persist form values and validate inputs
    const { handleBlur, handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        defaults,
        validate, validate_single
    ); 
    
    useEffect (() => {

    },// eslint-disable-next-line 
    [])

    // Form Submit function
    async function submitForm(values) {
        
        // Route
        const route = '/user'

        const user = {  admin: false,
                        email: values.email,
                        name: values.name,
                        password: values.password1,
                        username: values.username
                    }

        // Assemble request header
        let head = new Headers();
        head.append('Content-Type','application/json');

        let req = new Request(route, {
            method: 'POST',
            headers: head,
            body: JSON.stringify(user)
        });

        // Fetch API Response    
        fetch(req)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    // Throw Toast
                    showToast(data.error,toastList,setToastList)
                }
                else if (data.message) {
                    // Throw Toast
                    showToast(data.message,toastList,setToastList)
                    history.push(url)
                }
                else {
                    const unknownError = {type: "error", title:"Unknown Error", 
                                        description:"Please contact the system admin."}
                    // Throw Toast
                    showToast(unknownError,toastList,setToastList)
                    history.push(url)
                }
            }
        );
    };

    // Render the Component
    return (
        <fieldset className="registration-form-group">
            <form className="registration-form" onSubmit={handleSubmit}> {/*  Main form object */}
                <legend className="registration-title" >{formTitle}</legend>
                {/* Form Fields with Validation */}
                
                {/* Loop through all fields */}
                {fields.map(
                    (field) => {
                        return <RegistrationField   key={field.name}
                                                    data = {field}
                                                    handleBlur={handleBlur}
                                                    handleChange={handleChange}
                                                    values={values} >
                                    {/* Errors Spam - Optional */}
                                    {errors[field.name] &&
                                    <span className="invalid-feedback"> {errors[field.name]} </span>}
                                </RegistrationField>
                })}
                
                {/* Submit Button */}
                <button name="submit"
                        type="submit"
                        onClick={handleSubmit}> 
                        Sign up 
                </button>         
                <span type="alternative">
                    {/* TODO: place correct login url */}
                {"Already have an account? "} 
                <Link to={"/login"}>
                    Login 
                </Link>
                {/* <a href='#'>here</a> */}
                </span>
            </form>
        </fieldset>
    );
}

export default Registration;