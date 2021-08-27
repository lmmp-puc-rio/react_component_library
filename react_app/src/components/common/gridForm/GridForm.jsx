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
                <div className="gridFormInput">
                    <label className="rowLabel">
                        {props.name}
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

    const [state, setState] = useState({text1: "teste1" , text2: "teste2"})
    
    function onChangeCallback(event) {
        const { name , value } = event.target;

        setState(prevState => ({ ...prevState, [name]: value}));
    }

    return (
        // Logo assembled by Icon and Name
        <div className="gridFormSection" >
            <h4> Section Title</h4>
            <GridFormInput name={"text1"} value={state.text1} onChange={onChangeCallback} />
            <GridFormInput name={"text2"} value={state.text2} onChange={onChangeCallback} />
        </div>
    )

}

export default GridForm;