// # Main Import 
import React, { useState } from 'react';
import Logo from '../logo';

// # Import Component Style
import './GridForm.css'

// # GrifForm Row React Component Construction
function GridFormInput (props) {
    
    // Initialize variable states:
    // const [input, setInput] = props.input

    return (
        // Logo assembled by Icon and Name
            <form >
                <div className="gridFormInputRow">
                    <label className="rowLabel">
                        {props.label}
                    </label>
                    {/* Important to set input tag name property */}
                    <input className="rowInput"
                        name={props.name}
                        type="text"
                        required
                        value= {props.value}
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
            </form>
    )

}

// # GrifForm Row React Component Construction
function GridForm () {
    // const defaultValues = [
        // {name: "test2", value: "2"}];
    const [state, setState] = useState({rho: "0", mu: "0" })
    const data = {  rho: {label: "Density [m3/kg]"},
                    mu: {label: "Viscosity [Pa.s]"}};
                    
    function onChangeCallback(event) {
        const { name , value } = event.target;
        console.log({name});
        setState(prevState => ({ ...prevState, [name]: value}));
    }

    return (
        // Logo assembled by Icon and Name
        <div className="gridFormSection" >
            <h4> Section Title</h4>
            <GridFormInput name={"rho"} label={data.rho.label} value={state.rho} onChange={onChangeCallback} />
            <GridFormInput name={"mu"} label={data.mu.label} value={state.mu} onChange={onChangeCallback} />
        </div>
    )

}

export default GridForm;