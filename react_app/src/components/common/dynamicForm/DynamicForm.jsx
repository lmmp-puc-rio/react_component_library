import React, { useState } from "react";
import "./DynamicForm.css";

//do diretório forms:
import useForm from "../../../forms/useForm";
import { validate, validate_single } from "./validateInfo";

/* function DynamicFormInput(props) {
  const text = props.text;
  const data = props.data;
  const value = props.value;

  return (
    <form className="formInputRow">
      <div>
        <label className="rowLabel">{data.label}</label>
        <input
          className="rowInput"
          type="text"
          text={text}
          value={value}
          required
          onChange={(event) => props.onChange(event)}
        />
      </div>
    </form>
  );
} */

//FUNCTION TO RENDER FIELDS:
function DynamicField(props) {
  const fieldType = props.data.type;
  const fieldName = props.data.name;
  const fieldLabel = props.data.label;
  const fieldPlaceholder = props.data.placeholder;
  const values = props.values;
  const handleBlur = props.handleBlur;
  const handleChange = props.handleChange;

  return (
    <form>
      <label className="form-field-label">
        {fieldLabel}
        <input
          type={fieldType}
          name={fieldName}
          placeholder={fieldPlaceholder}
          value={values}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {props.children}
      </label>
    </form>
  );
}

function DynamicForm(props) {
  const defaults = {};
  /* fields.map((field) => {
    return (defaults[field.name] = field.defaultValue);
  }); */
  const data = props.data;
  console.log(data);
  const statesData = {};

  for (var key in data) {
    statesData[key] = data[key].defaultValue;
  }
  console.log({ statesData });
  const [state, setState] = useState(statesData);

  //TO VALIDATE INPUTS WITH HOOK useForm:
  const { handleBlur, handleChange, handleSubmit, values, errors } = useForm(
    defaults,
    validate,
    validate_single
  );

  /* function onChangeCallback(event) {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  } */

  return (
    <fieldset className="dynamic-form-group">
      <h4>DYNAMIC FORM</h4>
      <form className="dynamic-form" onSubmit={handleSubmit}>
        {data.map((field) => {
          return (
            <DynamicField
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={field.values}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {errors[field.name] && (
                <span className="invalid-feedback"> {errors[field.name]} </span>
              )}
            </DynamicField>
          );
        })}
        <button name="submit" type="submit" onClick={handleSubmit}>
          SAVE
        </button>
      </form>
    </fieldset>
  );
}

export default DynamicForm;
