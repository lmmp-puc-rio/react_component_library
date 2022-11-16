// #  Main Imports
import React,{useState} from "react";

import { FormInput } from "../../components/common";





const AddFluid = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        city:""
      });
    
    const inputs = [
        {
          id: 1,
          name: "Nome",
          type: "text",
          placeholder: "Nome",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 2,
            name: "city",
            type: "select",
            placeholder: "City",
            options: [
              {
                label: "RJ",
                value: "rj",
              },
      
              {
                label: "VR",
                value: "vr",
              },
      
              {
                label: "SP",
                value: "sp",
              },
            ],
            required: true,
          },]


        
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ON SUBMIT", values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
    return(
    <div>
      <form onSubmit={handleSubmit} className="generic-form">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        </form>
    </div>
    )
}

export default AddFluid