import React, { useState } from "react";
import "./DynamicForm.css";


 


//FUNCTION TO RENDER FIELDS:
function DynamicField(props) {
  const fieldType = props.type;
  const fieldName = props.name;
  const fieldLabel = props.name;
  const fieldPlaceholder = props.placerereholder;
  const [valueState,setValueState] = useState("")
  const onchangeState=(info)=>{
    setValueState(info)
  }

  const onchangeInput = e =>{
    console.log(e.target.value)
    onchangeState(e.target.value)
  }
  return (
    <form>
      <label className="form-field-label">
        <label>{fieldLabel}</label>
        <input
          type={fieldType}
          name={fieldName}
          placeholder={fieldPlaceholder}
          onChange={onchangeInput}
        />
        {props.children}
      </label>
    </form>
  );
} 

function DynamicForm(props) {
  const data = props.fields;
  console.log(data)

  const handleClick = e =>{
    e.preventDefault();
    console.log(e.target)
}

  return (
    <fieldset className="dynamic-form-group" >
      <h4>DYNAMIC FORM</h4>
      <form className="dynamic-form" onSubmit={handleClick}>
        {data.map((field) => {
          return (
            <DynamicField
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
           />
            
          );
        })}
        <button name="submit">
          SAVE
        </button>
      </form>
    </fieldset>
  );
}

export default DynamicForm;
