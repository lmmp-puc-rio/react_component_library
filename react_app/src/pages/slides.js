import React, { useState }  from "react";
import { SideMenu,SlidingPanel,RecursiveAccordion,TabsComponent,ActionFabGrid } from "../components/common";
import { darkColors } from "../components/common";
import { SearchProvider } from "../contexts/SearchContext";
import "./styles/slides.css"
function Slides(){

 
    const slidinPanelAccordionData = [
        {
          main: "Fluidos",
          id: "1",
          hidden: "",
          actions: [],
          subitems: [],
        },
        {
          main: "Sequência de Fluidos",
          id: "2",
          hidden: "",
          actions: [],
          subitems: [],
        },
      ];
    
   
    {/*Accordion Data */ }
          const dataStructure = [
            {
              main: "Entrada de dados",
              id: "1",
              hidden: "",
              actions: [],
              subitems: [],
            },
            {
              main: "Resultados",
              id: "2",
              hidden: "",
              actions: [],
              subitems: [],
            },
          ];
          {/*Tab Data*/}
          const dataTabFluidos = [
            {
              id: "Teste Fluidos 1",
              description: "Teste Fluidos 1",
              name: "Teste Fluidos 1",
            },
            {
              id: "Teste Fluidos 2",
              description: "Teste Fluidos 2",
              name: "Teste Fluidos 2",
            },
          ];
        
          const dataTabSequencia = [
            {
              id: "Fluidos no anular",
              description: "Fluidos no anular",
              name: "Fluidos no anular",
            },
            {
              id: "Fluidos de deslocamento",
              description: "Fluidos de deslocamento",
              name: "Fluidos de deslocamento",
            },
          ];
        
          const metaDataAnular = {
            header: [
              { key: "ID", label: "ID", expandable: false },
              { key: "Fluido", label: "Fluido", expandable: true },
              { key: "Volume", label: "Volume (bbl)", expandable: true },
              { key: "Topo", label: "Topo", expandable: true },
              { key: "CompAnular", label: "Comp. do anular (m)", expandable: true },
              { key: "Entrada", label: "Entrada", expandable: true },
            ],
            actions: [
              {
                tooltip: "Select Button",
                backgroundColor: darkColors.yellow,
                color: darkColors.white,
              },
            ],
          };
        
          const metaDataDeslocamento = {
            header: [
              { key: "ID", label: "ID", expandable: false },
              { key: "Fluido", label: "Fluido", expandable: true },
              { key: "Volume", label: "Volume (bbl)", expandable: true },
              { key: "Topo", label: "Topo", expandable: true },
              { key: "CompAnular", label: "Comp. do anular (m)", expandable: true },
              { key: "Entrada", label: "Entrada", expandable: true },
            ],
            actions: [
              {
                tooltip: "Select Button",
                backgroundColor: darkColors.yellow,
                color: darkColors.white,
              },
            ],
          };
             /* State responsible for controlling the opening/closing of the sidebar */
    const [inactive, setInactive] = useState(false);
    return (
        <div>
            <SideMenu onCollapse={(inactive) => {setInactive(inactive); }}>
                <RecursiveAccordion  key={"accordion_0"} accordionData={dataStructure}>
                    {/* Multiple Children is needed! */}
                    <div key={1} className="accordion_dropdown_item">
                         Sequência de Bombeio
                    </div>
                    <div key={2} className="accordion_dropdown_item">
                        Teste2
                    </div>
                    <div key={2} className="accordion_dropdown_item">
                        Teste3
                    </div>
                </RecursiveAccordion>
            </SideMenu>

            <SlidingPanel>
                <ul>
                    {/*Component Accordion*/}
                    <RecursiveAccordion key={"accordion_0"}  accordionData={slidinPanelAccordionData}>
                        {/* Multiple Children is needed! */}
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
            </SlidingPanel>
      </div>
    )
}

export default Slides