// #  Main Imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

// #  Local SubComponents & utils
import FormInput from "../components/common/dynamicForm";

// # Import Component Style
import "./styles/FormsNewProject.css";

const FormsNewProject = (props) => {
  const { id } = useParams;
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const inputsNewProject = [
    {
      id: 1,
      name: "name",
      type: "textarea",
      placeholder: "Digite um nome para o novo projeto",
      errorMessage: "campo requerido",
      label: "Nome",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      rows: 2,
    },
    {
      id: 2,
      name: "description",
      type: "textarea",
      placeholder: "Preencha uma descrição para o novo projeto",
      errorMessage: "campo requerido",
      label: "Descrição",
      required: true,
      rows: 14,
    },
  ];



  const handleSubmit = /* async */ (e) => {
    e.preventDefault();
/*     console.log("ON SUBMIT", values); */
    /*     await createNewProject(id, values); */
    history.push(`/well/${id}/projects`);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const redirectToProjects = () => {
    history.push(`/projects`);
  };

  return (
    <div className="container-form-new-project">
        <form onSubmit={handleSubmit} className="form-new-project">
          {inputsNewProject.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

        <div className="bttn-new-project__container">
          <button
            className="bttn-new-project__cancel"
            type="button"
            onClick={() => redirectToProjects()}
          >
            <i class="fas fa-play"></i>
            <p className="bttn-new-project__text">Cancelar</p>
          </button>
          <button className="bttn-new-project__save">
            <i class="fas fa-save"></i>
            <p className="bttn-new-project__text">Salvar</p>
          </button>
        </div>
        </form>
    </div>
  );
};

export default FormsNewProject;
