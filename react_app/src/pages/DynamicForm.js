// #  Main Imports
import React, { useState } from "react";
import DynamicForm from "../components/common/dynamicForm/DynamicForm";
import "./pages.css";



const DynamicFormP = (props) => {
  const data = [
   {
    label:"Nome",
    name:"Nome",
    placeholder:"Nome",
    type:"text",
    value:"", 
  },
  {  label:"Email",
    name:"Email",
    placeholder:"Email",
    type:"email",
    value:"",
  },
  {
    label:"Senha",
    name:"password",
    placeholder:"Senha",
    type:"password",
    value:"",
  },
  {
    label:"telefone",
    name:"telefone",
    placeholder:"telefone",
    type:"text",
    value:"",
  },
 ]
return (
  <>
    <DynamicForm fields={data} />
  </>);
}

export default DynamicFormP
