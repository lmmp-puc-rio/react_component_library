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
      value: "",
    },
    {
      label: "email",
      name: "email",
      placeholder: "Email",
      type: "email",
      value: "",
    },
    {
      label: "senha",
      name: "senha",
      placeholder: "Senha",
      type: "password",
      value: "",
    },
    {
      label: "repetirSenha",
      name: "repetirSenha",
      placeholder: "Repetir senha",
      type: "password",
      value: "",
    },
    {
      label: "telefone",
      name: "telefone",
      placeholder: "Telefone",
      type: "tel",
      value: "",
    },
    {
      label: "",
      name: "Qualquer",
      type: "radio",
    },
  ];
  return (
    <>
      <DynamicForm fields={data} />
    </>
  );
};

export default DynamicFormP;
