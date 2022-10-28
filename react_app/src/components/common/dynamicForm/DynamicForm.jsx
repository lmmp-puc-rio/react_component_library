import React, { useState } from "react";
import useForm from "./utils/useForm";
import { validate, validate_single } from "./validateInfo";

import "./DynamicForm.css";

//FUNCTION TO RENDER FIELDS:
function DynamicField(props) {
  const fieldType = props.type;
  const fieldName = props.name;
  const fieldLabel = props.name;
  const fieldPlaceholder = props.placeholder;
  //const [name, setName] = React.useState(""); // State Hook
  const values = props.values;
  const [handleBlur, handleChange] = useForm();

  return (
    <label className="form-field-label">
      <label>{fieldLabel}</label>
      <input
        type={fieldType}
        name={fieldName}
        placeholder={fieldPlaceholder}
        value={values[fieldName]}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {props.children}
    </label>
  );
  /*   return (
    <form>
      <label className="form-field-label">
        <label>{fieldLabel}</label>
        <input
          type={fieldType}
          name={fieldName}
          placeholder={fieldPlaceholder}
          onChange={handleChange}
          value={values[fieldName]}
          //onChange={(e) => setName(e.target.value)}
          //value={name}
        />
        {props.children}
      </label>
    </form>
  ); */
}

function DynamicForm(props) {
  const datas = props.fields;
  console.log("PROPS DOS CAMPOS:", datas);
  const [defaults, setDefaults] = useState({});
  const { handleBlur, handleChange, handleSubmit, values, errors } = useForm(
    defaults,
    validate,
    validate_single
    //submitForm,
  );
  /* const handleClick = (e) => {
    e.preventDefault();
    console.log("E.TARGET (O DIGITADO):", e.target);
    console.log("STATE", state);

    const handleClick = () => {
      console.log("STATE", state);
    };
  }; */
  return (
    <fieldset className="dynamic-form-group">
      <h4>DYNAMIC FORM</h4>
      <form className="dynamic-form" onSubmit={handleSubmit}>
        {datas.map((field) => {
          return (
            <DynamicField
              key={field.name}
              data={field}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            >
              {errors[field.name] && (
                <span className="invalid-feedback">{errors[field.name]}</span>
              )}
            </DynamicField>
          );
        })}
        {props.children}
        <button name="submit" type="submit" onClick={handleSubmit}>
          SAVE
        </button>
      </form>
    </fieldset>
  );
}

export default DynamicForm;
