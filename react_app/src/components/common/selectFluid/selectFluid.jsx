// #  Main Imports
import React, { useState } from "react";

// #  Local SubComponents & utils
import FormInput from "../dynamicForm";

// # Import Component Style
import "./selectFluid.css";

const FluidSelect = (props) => {
  const [values, setValues] = useState({
    fluido: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fluido",
      type: "select",
      placeholder: "",
      options: [
        {
          label: "FPBNA",
          value: "fpbna",
        },

        {
          label: "Colchão",
          value: "colchao",
        },

        {
          label: "Pasta Conv.",
          value: "pastaConv",
        },

        {
          label: "Pasta Blend.",
          value: "pastaBlend",
        },

        {
          label: "Fluido Fino Sint.",
          value: "fluidoFinoSint",
        },
      ],
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ON SUBMIT", values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-outside-form-pump">
      <div className="container-form-pump">
        <form onSubmit={handleSubmit} className="generic-form-pump">
          <label className="label-input-pump">Fluido no poço:</label>
          <div className="container-input-btn-pump">
            {inputs.map((input) => (
              <FormInput
                className="input-pump"
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="btn-add-fluid-pump">
              <p
                className="hint-add-pump"
                data-tooltip="Add Fluid"
                data-position="bottom"
              >
                <i class="fas fa-plus"></i>
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FluidSelect;
