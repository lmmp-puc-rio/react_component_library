// FormInput = Component to render form input

// #  Main Imports
import React, { useState } from "react";

// # Import Component Style
import "./formInput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {inputProps.type === "select" ? (
        <select {...inputProps} onChange={onChange}>
          {inputProps.options.map((option) => (
            <option value={option.value} onChange={onChange}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <>
          <label>{label}</label>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>{errorMessage}</span>
        </>
      )}
    </div>
  );
}

export default FormInput;
