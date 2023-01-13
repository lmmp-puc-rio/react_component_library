import React, { useState, useContext } from "react";
import {
  SideMenu,
  SlidingPanel,
  RecursiveAccordion,
  TabsComponent,
  ActionFabGrid,
  CurrentLevel,
} from "../components/common";
import { darkColors } from "../components/common";
import { SearchProvider } from "../contexts/SearchContext";

import FormsNewProject from "./FormsNewProject";
import FormsNewCase from "./FormsNewCase";


import "./styles/slides.css";


import { SearchContext } from "../contexts/SearchContext";

function Slides() {
  const { casesData } = useContext(SearchContext);


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


  return (
    <div>
      <SideMenu>
        <CurrentLevel data={paramsForCases} />
      {/*   <FormsNewProject /> */}
        <FormsNewCase />
      </SideMenu>
{/*       <div className="lista__container">
        {casesData.map((item) => (
          <ul>
            <li>{item.title}</li>
          </ul>
        ))}
      </div> */}

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
