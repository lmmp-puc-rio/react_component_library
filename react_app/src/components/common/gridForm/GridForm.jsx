// # Main Import 
import React, { useState } from 'react';

// All Components import
import { Dropdown } from '../../common';

// # Import Component Style
import './GridForm.css';


function unitOptions(object) {
    return Object.keys(object);
}


// # GrifForm Row React Component Construction
function GridFormInput (props) {
    
    // Initialize local variable:
    const name = props.name;
    const data = props.data;
    const value = props.value;
    const conversionFactors = props.conversionFactors;

    return (
        // Logo assembled by Icon and Name
            <form >
                <div className="gridFormInputRow">
                    <label className="rowLabel">
                        {data.label}
                    </label>
                    {/* Important to set input tag name property */}
                    <input className="rowInput"
                        name={name}
                        type="text"
                        required
                        value= {value}
                        onChange={(e) => props.onChange(e)}
                    />
                    {/* Dropdown receives array of options */}
                    <Dropdown   name={[name]+"_unit"} 
                                options = {unitOptions(conversionFactors)}
                                state = {props.state}
                                onChange = {props.onChange}/>
                </div>
            </form>
    )

}

// # GrifForm Row React Component Construction
function GridForm (props) {
    // const defaultValues = [
        // {name: "test2", value: "2"}];
    // const [state, setState] = useState({rho: "0", mu: "0" })
    
    // data Object Structure:
    // data = {var1: {label: , defaultValue: ,unitType: ,selectecUnit: },
    //         var2: {label: , defaultValue: ,unitType: ,selectecUnit: },
    //         var3: {label: , defaultValue: ,unitType: ,selectecUnit: }
    //          ...
    //         }
    const data = props.data;
    const convertionFactor = props.conversionFactors;
    const statesData = {};
    
    for (var key in data) {
        statesData[key] = data[key].defaultValue;
        statesData[key+"_unit"] = data[key].selectecUnit;
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
        // GridForm Section with some fields
        <div className="gridFormSection" >
            <h4> Section Title</h4>
            {Object.keys(data).map((key, objectData) => (
                <GridFormInput name={key}
                                key={key} 
                                data = {data[key]}
                                value={state[key]}
                                state = {state}
                                conversionFactors = {convertionFactor[data[key].unitType]}
                                onChange={onChangeCallback} /> ))}
        </div>
    )

}

export default GridForm;