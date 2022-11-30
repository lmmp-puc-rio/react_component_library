// #  Main Imports
import React, { useState, useContext } from "react";

// #  Local SubComponents & utils
import { Tabs, FormInput } from "../components/common";

// # Context
import { ModalContext } from "../contexts/ModalContext";
import { ActiveTabContext } from "../contexts/ActiveTabContext";

// # Import Component Style
import "./styles/DynamicForm.css";

const BasicAndAdvancedForm = (props) => {

const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
const {activeTab, setActiveTab} = useContext(ActiveTabContext);

  const dataTabForm = [
    {
      id: "tab1",
      description: "Formulário Básico",
      name: "Formulário Básico",
    },
    {
      id: "tab2",
      description: "Formulário Avançado",
      name: "Formulário Avançado", 
    },
  ];



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

  /* Function to control Avanced Form rendering */
  const handleClick = (id, title) => {
    if(title === "Formulário Avançado") {
      setIsModalOpen(true)
    }
    else {
      setActiveTab(id);
    }
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ON SUBMIT", values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Tabs data={dataTabForm} activeTab={activeTab} setActiveTab={setActiveTab} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} callback={handleClick}>
        <div key={"tab1"} >
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
        <div key={"tab2"}>
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
      </Tabs>
    </>
  );
};

export default BasicAndAdvancedForm;
