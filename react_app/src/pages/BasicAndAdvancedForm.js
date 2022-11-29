// #  Main Imports
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// #  Local SubComponents & utils
import { TabsComponent, FormInput } from "../components/common";

// # Context
import { ModalContext } from "../contexts/ModalContext";

// # Import Component Style
import "./styles/DynamicForm.css";

const BasicAndAdvancedForm = (props) => {

const { setIsModalOpen } = useContext(ModalContext);

const history = useHistory()
console.log(history)
console.log(window.location.pathname)

  const dataTabForm = [
    {
      id: "FormulárioBásico",
      description: "FormulárioBásico",
      name: "FormulárioBásico",
    },
    {
      id: "FormulárioAvançado",
      description: "FormulárioAvançado",
      name: "FormulárioAvançado",
      callback: setIsModalOpen, 
    },
  ];

  /* Filter bringing all tabs names */
  const tabsForms = dataTabForm.map((index) => index.name);


  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    city: "",
  });

  const inputsBasic = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];

  const inputsAdvanced = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
    <>
      <TabsComponent data={dataTabForm} onClick={ setIsModalOpen}>
        <div key={"FormulárioBásico"} >
        <h3>Formulário Básico</h3>
          <form onSubmit={handleSubmit} className="generic-form">
            {inputsBasic.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="bttn-submit">Submit</button>
          </form>
        </div>
        <div key={"FormulárioAvançado"}>
        <h3>Formulário Avançado</h3>
            <form onSubmit={handleSubmit} className="generic-form">
              {inputsAdvanced.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className="bttn-submit">Submit</button>
            </form>
        </div>
      </TabsComponent>
    </>
  );
};

export default BasicAndAdvancedForm;
