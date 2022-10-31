import React, { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import useForm from "./utils/useForm";
//import { validate, validate_single } from "./validateInfo";

import "./DynamicForm.css";

//FUNCTION TO RENDER FIELDS:
function DynamicField(props, name, register, error = "", ...rest) {
  const fieldType = props.type;
  const fieldName = props.name;
  const fieldLabel = props.name;
  const fieldPlaceholder = props.placeholder;
  const fieldValue = props.value;
  //const [content, setContent] = useState(); // State Hook
  //const { handleBlur, handleChange } = useForm();
  console.log("fieldName em Input:", fieldName);
  console.log("fieldLabel em Input:", fieldLabel);
  console.log("fieldPlaceholder em Input:", fieldPlaceholder);
  console.log("fieldValue em Input:", fieldValue);

  return (
    <form>
      <label className="form-field-label">{fieldLabel}</label>
      {!!error && <span> - {error}</span>}
      <input
        type={fieldType}
        name={fieldName}
        placeholder={fieldPlaceholder}
        {...rest}
        {...register(name)}
        //value={fieldValue[fieldName]}
        //onChange={(e) => setContent(e.target.value)}
      />
      {/* value={value[fieldName]}
        onChange={handleChange} */}
      {props.children}
    </form>
  );
  /* return (
    <label className="form-field-label">
      <label>{fieldLabel}</label>
      <input
        type={fieldType}
        name={fieldName}
        placeholder={fieldPlaceholder}
        value={values[fieldName]}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {props.children}
    </label>
  ); */
}

function DynamicForm(props) {
  const datas = props.fields;
  console.log("PROPS DOS CAMPOS:", datas);
  //const [defaults, setDefaults] = useState({});

  const schema = yup.object().shape({
    nome: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-z]+/, "Apenas letras!"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    senha: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter ao menos 1 letra maiúscula, 1 número e 1 caracter especial"
      ),
    repetirSenha: yup
      .string()
      .oneOf([yup.ref("senha")], "A senha está diferente"),
    telefone: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (datas) => {
    //console.log(nome, email, senha, repetirSenha, telefone);
    console.log("ON SUBMIT", datas);
  };

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //TUTORIAL:
  /* const handleClick = (e) => {
    e.preventDefault();
    console.log("E.TARGET (O DIGITADO):", e.target);
    console.log("STATE", state);

    const handleClick = () => {
      console.log("STATE", state);
    };
  }; */

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //SÉRGIO
  /* datas.map((field) => {
    if (datas) {
      return (defaults[field.name] = field.defaultValue);
    }
    return setDefaults(defaults);
  });

  const submitForm = (values) => {
    let entity = {};
    Object.keys(values).map((key) => (entity[key] = values[key]));
  };

  const { handleBlur, handleChange, handleSubmit, values, errors } = useForm(
    defaults,
    validate,
    validate_single,
    submitForm
  ); */

  return (
    <fieldset className="dynamic-form-group">
      <h4>DYNAMIC FORM</h4>
      <form className="dynamic-form" onSubmit={handleSubmit(onSubmitFunction)}>
        {datas.map((field) => {
          return (
            <DynamicField
              key={field.name}
              label={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              error={errors.field?.message}
              //data={field}
            ></DynamicField>
          );
        })}
        {props.children}
        <button name="submit" type="submit" /* onClick={handleSubmit} */>
          SAVE
        </button>
      </form>
    </fieldset>
  );
}
export default DynamicForm;
{
  /* {errors[field.name] && (
                <span className="invalid-feedback">{errors[field.name]}</span>
)} */
}
