// # Main Imports
import  React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// # External SubComponents & utils
import { useForm } from '../index';
import { validate, validate_single } from "./validateInfo";

// # Contexts
import { AuthContext } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';

// # Import Component Style
import './Login.css'

// Form main Title
const formTitle = "Sign in"
//TODO: Get titles, labels and placeholders from multilanguage structure
// Defined fields (names must match validationInfo file)
const fields = [{type: 'text',
                name: 'username',
                label: 'Username:',
                placeholder: 'Enter a username',
                defaultValue: ""},
                {type: 'password',
                name: 'password',
                label: 'Password:',
                placeholder: 'Choose a password',
                defaultValue: ""}
                ]

 // TODO: Unify Form Input Field component
function LoginField(props) {

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
        <label className="login-field-label"> {fieldLabel}
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
function Login(props) {
    
    // Context Variables
    const { handleLogin, token } = useContext(AuthContext);
    const { toastList, setToastList, showToast } = useContext(ToastContext);
    
    // Set Unlogged Error Message 
    const unlogged = {type: "error", title:"User unlogged", 
                    description:"Please login to access this page."}
    
    let history = useHistory();
    
    // Submit URL Destination
    const submitonURL = props.submitionURL

    // Add defaults dependent of the existing fields
    const defaults = {}
    fields.map((field) => {
        return defaults[field.name] = field.defaultValue    }
        );

    // Form Submit function
    async function loginSubmit(values) {
        
        // Route
        const route = '/login'

        // User info
        const user = {  admin: false,
                        password: values.password,
                        username: values.username
                    }
        
        // Encode user info for token
        let encondedUser = window.btoa(user.username + ':' + user.password)

        // Assemble request header
        let head = new Headers();
        head.append('Accept','application/json');
        head.append('Authorization','Basic '+ encondedUser)
        

        let req = new Request(route, {
            method: 'GET',
            headers: head,
            credentials: 'same-origin'
        });
        
        // Fetch API Response    
        fetch(req)
            .then (response => response.json())
            .then(data => {
                if (data.error) {
                    // Throw Toast
                    showToast(data.error,toastList,setToastList)
                }
                else if (data.message) {
                    handleLogin(data.token)
                    // Throw Toast
                    showToast(data.message,toastList,setToastList)
                    // Redirect to home
                    history.push('/app');
                }
                else {
                    const unknownError = {type: "error", title:"Unknown Error", 
                                        description:"Please contact the system admin."}
                    // Throw Toast
                    showToast(unknownError,toastList,setToastList)
                    // Redirect to login Submition url
                    history.push(submitonURL)
                }
            })
            .catch(error => {
                console.log("Fetch Failed")
            })
    };

    // Hook to persist form values and validate inputs
    const { handleBlur, handleChange, handleSubmit, values, errors } = useForm(
        loginSubmit,
        defaults,
        validate, validate_single
    ); 
    
    // Show Redirected Message
    useEffect(() => {
        try {
            let redirected = history.location.state.redirected
            if (redirected) {
                showToast(unlogged,toastList,setToastList)
            }    
        } catch (error) {
        }
        
    }//TODO: Understand UseEffect Warning disabled
    // eslint-disable-next-line
    , []);


    // Render the Component
    return (
        <fieldset className="login-form-group">
            { (token && token !== "" && token !== undefined) ? 
                ( "You're already Logged in." ) : 
                (
                        <form className="login-form" onSubmit={handleSubmit}> {/*  Main form object */}
                            <legend className="login-title" >{formTitle}</legend>
                            {/* Form Fields with Validation */}
                            
                            {/* Loop through all fields */}
                            {fields.map(
                                (field) => {
                                    return <LoginField   key={field.name}
                                                                data = {field}
                                                                handleBlur={handleBlur}
                                                                handleChange={handleChange}
                                                                values={values} >
                                                {/* Errors Spam - Optional */}
                                                {errors[field.name] &&
                                                <span className="invalid-feedback"> {errors[field.name]} </span>}
                                            </LoginField>
                            })}
                            
                            {/* Submit Button */}
                            <button name="submit"
                                    type="submit"
                                    onClick={handleSubmit}> 
                                    Sign in 
                            </button>         
                            <span type="alternative">
                                {/* TODO: place correct login url */}
                                {"Does not have an account yet? "}
                            <Link to={"/register"}>
                                {"Register"}
                            </Link>
                            {/* <a href='#'>here</a> */}
                            </span>
                        </form>
                    )
                }
                </fieldset>
        );
}

export default Login;