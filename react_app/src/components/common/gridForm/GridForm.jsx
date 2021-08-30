// # Main Import 
import React, { useState } from 'react';


// # Import Component Style
import './GridForm.css'

// # GrifForm Row React Component Construction
function GridFormInput (props) {
    
    // Initialize variable states:
    // const [input, setInput] = props.input
    const data = props.data

    return (
        // Logo assembled by Icon and Name
            <form >
                <div className="gridFormInputRow">
                    <label className="rowLabel">
                        {props.data.label}
                    </label>
                    {/* Important to set input tag name property */}
                    <input className="rowInput"
                        name={props.name}
                        type="text"
                        required
                        value= {props.value}
                        onChange={(e) => props.onChange(e)}
                    />
                    <select className="rowUnit">
                        <option>
                            teste
                        </option>
                    </select>
                </div>
            </form>
    )

}

// # GrifForm Row React Component Construction
function GridForm (props) {
    // const defaultValues = [
        // {name: "test2", value: "2"}];
    // const [state, setState] = useState({rho: "0", mu: "0" })
    
    const data = props.data;
    console.log(data)
    const statesData = {};
    
    for (var key in data) {
        statesData[key] = data[key].defaultValue;
        statesData[key+"_unit"] = data[key].unitType;
    }
    console.log({statesData})
    // console.log(statesData);
    const [state, setState] = useState(statesData)
                    
    //TODO: Store state variables always in SI units.
    function onChangeCallback(event) {
        const { name , value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value}));
    }

    return (
        // Logo assembled by Icon and Name
        <div className="gridFormSection" >
            <h4> Section Title</h4>
            <GridFormInput name={"gap"} 
                            data = {data.gap}
                            value={state.gap} 
                            onChange={onChangeCallback} />
            <GridFormInput name={"size"} 
                            data = {data.size} 
                            value={state.size} 
                            onChange={onChangeCallback} />
        </div>
    )

}

export default GridForm;