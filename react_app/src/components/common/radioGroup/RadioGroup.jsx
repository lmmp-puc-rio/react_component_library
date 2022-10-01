// # Main Import 
import React from 'react';

// # Import Component Style
import './RadioGroup.css'

// # Radio Burton React Component Construction
function RadioButton (props) {
    console.log(props.isSelected)
    return (
        // Labeled Radio Button
        <div className="radioButton">
            <input type={"radio"} 
                    key={"radio_"+props.label}
                    name={props.label}
                    checked={props.selected === props.label}
                    onChange={props.onChange}/>
            <label for={"radio_"+props.id}>{props.label}</label>
        </div>
    )

}

// # Radio Burton React Component Construction
function RadioGroup (props) {
    // Radio data Array:
    // data = [{fieldId:
    //          radios:[label1:, 
    //                  label2:,
    //                  label3: ]},
    //          ...
    //         ]
    // Selected State: selected = 'label3'
    // OnChangeFuncion: OnChange
    const title = props.title;
    const id = props.fieldId;
    const data = props.data;
    
    function onChange (event) {
        props.setSelection(event.target.name)   
    }

    return (
        <div>
            <h5>{title} </h5>
                {data.map((radio) => {
                    return (
                            // Labeled Radio Buttons
                            <RadioButton 
                                id={id} 
                                selected={props.selected} 
                                label={radio} 
                                value={radio}
                                onChange={onChange}
                            />
                    );
                })}
        </div>
    );
}

export default RadioGroup;
