// FormInput = Component to render form input

// #  Main Imports
import React, { useState } from "react";

// # Import Component Style
import "./formInput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    id,
    placeholder,
    disabled,
    rows,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  if (inputProps.type === "select") {
    return (
      <div>
        <label className="label-input-component">{placeholder}</label>
        <select
          {...inputProps}
          onChange={onChange}
          className="select-input-component"
        >
          {inputProps.options.map((option) => (
            <option
              value={option.value}
              onChange={onChange}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (inputProps.type === "textarea") {
    return (
      <div>
        <label className="label-input-component">{label}</label>
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          className="input-component textarea"
        />
        <span className="span-input-component">{errorMessage}</span>
      </div>
    );
  } else {
    return (
      <div>
        <label className="label-input-component">{label}</label>
        <input
          {...inputProps}
          type={inputProps.type}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          placeholder={placeholder}
          disabled={disabled}
          className="input-component"
        />
        <span className="span-input-component">{errorMessage}</span>
      </div>
    );
  }
}

export default FormInput;
