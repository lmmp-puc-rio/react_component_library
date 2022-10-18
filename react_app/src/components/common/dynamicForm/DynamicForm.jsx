import React, { useState } from "react";
import "./DynamicForm.css";

function DynamicFormInput(props) {
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
}
