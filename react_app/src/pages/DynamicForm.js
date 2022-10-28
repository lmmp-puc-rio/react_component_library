// #  Main Imports
import React, { useState } from "react";
import DynamicForm from "../components/common/dynamicForm/DynamicForm";
import "./pages.css";

const DynamicFormP = (props) => {
  const data = [
    {
      label: "nome",
      name: "nome",
      placeholder: "Nome",
      type: "text",
      defaultValue: "",
    },
    {
      label: "email",
      name: "email",
      placeholder: "Email",
      type: "email",
      defaultValue: "",
    },
    {
      label: "senha",
      name: "senha",
      placeholder: "Senha",
      type: "password",
      defaultValue: "",
    },
    {
      label: "telefone",
      name: "telefone",
      placeholder: "Telefone",
      type: "tel",
      defaultValue: "",
    },
    {
      label: "",
      name: "Qualquer",
      placeholder: "para testar",
      type: "radio",
      defaultValue: "",
    },
  ];
  return (
    <>
      <DynamicForm fields={data} />
    </>
  );
};

export default DynamicFormP;
