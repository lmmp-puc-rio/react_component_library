// #  Main Imports
import React, { useState } from "react";

// #  Local SubComponents & utils
import FormInput from "../components/common/dynamicForm";

// # Import Component Style
import "./pages.css";

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
    <div className="container-form">
      <form onSubmit={handleSubmit} className="generic-form">
        <label>Fluido no poço:</label>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="bttn-submit">
          <i class="fas fa-plus fa-sm"></i>
        </button>
      </form>
    </div>
  );
};

export default FluidSelect;
