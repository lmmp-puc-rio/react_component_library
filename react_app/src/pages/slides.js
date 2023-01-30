import React, { useState, useContext, useEffect } from "react";
import {
  SideMenu,
  SlidingPanel,
  RecursiveAccordion,
  TabsComponent,
  ActionFabGrid,
  CurrentLevel,
  FormInput,
} from "../components/common";
import { darkColors } from "../components/common";
import { SearchProvider } from "../contexts/SearchContext";

import FormsNewProject from "./FormsNewProject";
import FormsNewCase from "./FormsNewCase";
import AccordionSmallFrame from "./AccordionSmallFrame";

import "./styles/slides.css";

import { SearchContext } from "../contexts/SearchContext";

function Slides() {
  const { casesData } = useContext(SearchContext);

  const [activeName, setActiveName] = useState();

  const [errorInfo, setErrorInfo] = useState(0);

  const [errorScenery, setErrorScenery] = useState(0);


  const [valuesInfo, setValuesInfo] = useState({
    diametro: "",
    nome: "",
  });

  const [valuesScenery, setValuesScenery] = useState({
    lamina: "",
    od: "",
  });

  useEffect(() => {
    setActiveName("Informações gerais");
  }, []);


  const inputsInfo = [
    {
      id: 1,
      name: "diametro",
      type: "text",
      placeholder: "Valor",
      errorMessage: "Essa propriedade debve ser um número!",
      label: "Diâmetro",
      pattern: "^[0-9]*$",
      requeried: true,
    },
    {
      id: 2,
      name: "nome",
      type: "text",
      placeholder: "Nome",
      errorMessage: "Essa propriedade deve ser uma palavra!",
      pattern: "^[A-Za-z]+$",
      requeried: true,
      label: "Nome",
    },
  ];

  const inputsScenery = [
    {
      id: 3,
      name: "lamina",
      type: "text",
      placeholder: "Valor",
      errorMessage: "Essa propriedade deve ser um número!",
      label: "Lâmina",
      pattern: "^[0-9]*$",
      requeried: true,
    },
    {
      id: 4,
      name: "od",
      type: "text",
      placeholder: "Valor",
      errorMessage: "Essa propriedade deve ser um número!",
      pattern: "^[0-9]*$",
      requeried: true,
      label: "OD",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ON SUBMIT", valuesInfo);
  };

  const onChange = (e) => {
    setValuesInfo({ ...valuesInfo, [e.target.name]: e.target.value });
    setValuesScenery({ ...valuesScenery, [e.target.name]: e.target.value });
  };

  // Data for placeHolder - SearchBox

  const placeholderSearchBox = {
    tree: "Buscar campos",
    projects: "Buscar projetos",
    cases: "Buscar casos",
    caseProps: "Buscar propriedades do caso ",
  };

  // Params to implements at "/well/nomedopoço/projects",
  const paramsForProjects = {
    text: "Poço: 2-ANP-1-RJS ",
    route: "/projects",
  };

  // Params to implements at "/project/idDoProjeto/cases"
  const paramsForCases = {
    text: "Projeto: Plug 2 ",
    route: "/well/nomedopoço/projects",
  };

  // Params to implements at "/case/id/caseProps"

  const paramsForCaseProps = {
    text: "Caso ID: Nome do Caso ",
    route: "/project/idDoProjeto/cases",
  };

  /*Accordion Data*/
  const dataStructure = [
    {
      title: "Entrada de dados",
      id: "1",
      inputData: [
        {
          name: "Informações gerais",
          route: `/case/1/general_info`,
          error: errorInfo,
          callBackError: setErrorInfo,
          values: valuesInfo,
        },
        {
          name: "Cenário",
          route: `/case/1/cenario`,
          error: errorScenery,
          callBackError: setErrorScenery,
          values: valuesScenery,
        },
        {
          name: "Geometria",
          route: `/case/1/geometria`,
        
        },
        {
          name: "Sequência de Bombeio",
          route: `/case/1/pumpsequence`,
          
        },
        {
          name: "Simulação",
          route: `/case/1/simulation`,
       
        },
      ],
    },
    {
      title: "Resultados",
      id: "2",
      inputDataResults: [
        { name: "Teste 2", route: `/case/1/teste2` },
        { name: "Teste 3", route: `/case/1/tetse3` },
      ],
    },
  ];

  // Defining max-heigth of Accordion child. It changes considering the Page
  const maxHeight = "48vh";

  return (
    <div className="slides-container">
      <SideMenu placeholderSearchBox={placeholderSearchBox.caseProps}>
        {/*         Small Frame for Case Props */}
        <CurrentLevel data={paramsForCaseProps} />;
        <AccordionSmallFrame
          accordionData={dataStructure}
          maxHeight={maxHeight}
          activeName={activeName}
          setActiveName={setActiveName}
          valuesInfo={valuesInfo}
          setErrorInfo = {setErrorInfo}
          valuesScenery={valuesScenery}
          setErrorScenery = {setErrorScenery}
        />
      </SideMenu>
      { activeName === "Informações gerais" ?     
      
      <div className="container-form">
        <form onSubmit={() => handleSubmit()} className="generic-form">
          {inputsInfo.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={valuesInfo[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="bttn-submit">Salvar</button>
        </form>
      </div> :
      <div className="container-form">
      <form onSubmit={() => handleSubmit()} className="generic-form">
        {inputsScenery.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={valuesScenery[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="bttn-submit">Salvar</button>
      </form>
    </div>
    }

      {/*             <SlidingPanel>
                <ul>
                    <RecursiveAccordion key={"accordion_0"}  accordionData={slidinPanelAccordionData}>
                        <div key={1} className="accordion_dropdown_item">
                            <TabsComponent data={dataTabFluidos}>
                                <div key={"Teste Fluidos 1"}>Teste Fluidos 1</div>
                                <div key={"Teste Fluidos 2"}>Teste Fluidos 2</div>
                            </TabsComponent>
                        </div>

                        <div key={2} className="accordion_dropdown_item">
                            <TabsComponent data={dataTabSequencia}>
                                <div key={"Fluidos no anular"}>
                                    <ActionFabGrid metaData={metaDataAnular} />
                                </div>
                                <div key={"Fluidos de deslocamento"}>
                                    <ActionFabGrid metaData={metaDataDeslocamento} />
                                </div>
                            </TabsComponent>
                        </div>
                    </RecursiveAccordion>
                </ul>
            </SlidingPanel> */}
    </div>
  );
}

export default Slides;
