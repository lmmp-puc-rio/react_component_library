import React from "react"
import { SlidingPanel,TabsComponent,RecursiveAccordion, ActionFabGrid } from "../components/common"
import Plot from "react-plotly.js";
import { darkColors } from "../components/common/MaterialColors";


function GeometriaExterna(props){
    {/*plot Data*/}
    const graph = [
        {x:[0,10],
         y:[8,8],
         //type change the mode graph
        type:"scratter",
        mode:"lines",
        fill:'tozeroy'
        },
        {   x:[6,8,7],
            y:[5,5,7],
          //type change the mode graph
           type:"bar",
           mode:"lines",
           fill:'tozeroy'
           },
           { x:[0,10],
             y:[3,3],
          //type change the mode graph
           type:"scatter",
           mode:"line",
           fill:'tozeroy'
           },
     ]
     {/*Accordion Data*/}
     const slidinPanelAccordionData = [
        {
          main: "Geometria Externa",
          id: "1",
          hidden: "",
          actions: [],
          subitems: [],
        },
        {
          main: "Geometria Interna",
          id: "2",
          hidden: "",
          actions: [],
          subitems: [],
        },
        {
          main: "Centralização",
          id: "3",
          hidden: "",
          actions: [],
          subitems: [],
        },
        {
          main: "Trajetória",
          id: "4",
          hidden: "",
          actions: [],
          subitems: [],
        },
      ];

      {/*Tab Data*/}
      const dataTab1 = [
        {
          id: "Revestimento Anterior",
          description: "Revestimento Anterior",
          name: "Revestimento Anterior",
        },
        {
          id: "Poço Aberto",
          description: "Poço Aberto",
          name: "Poço Aberto",
        },
      ];
      const dataTab2 = [
        {
          id: "Coluna de Trabalho",
          description: "Coluna de Trabalho",
          name: "Coluna de Trabalho",
        },
        {
          id: "Revestimento",
          description: "Revestimento",
          name: "Revestimento",
        },
      ];
    
      const dataTab3 = [
        {
          id: "Centralizadores",
          description: "Centralizadores",
          name: "Centralizadores",
        },
        {
          id: "Intervalos de Centralizadores",
          description: "Intervalos de Centralizadores",
          name: "Intervalos de Centralizadores",
        },
      ];
      
      {/*Grid Data*/}
      
      const metaData = {
        header: [
          { key: "MD(m)", label: "MD(m)", expandable: false },
          { key: "Comp. do Segmento", label: "Comp. do Segmento", expandable: false },
          { key: "OD(pol)", label: "OD(pol)", expandable: true },
          { key: "ID(pol)", label: "ID(pol)", expandable: true },
        ],
        actions: [
          {
            tooltip: "Select Button",
            backgroundColor: darkColors.yellow,
            color: darkColors.white,
          },
        ],
      };

      const PocoAbertoData = {
        header: [
          { key: "MD(m)", label: "MD(m)", expandable: false },
          { key: "Comp. do Segmento", label: "Comp. do Segmento", expandable: false },
          { key: "ID(pol)", label: "ID(pol)", expandable: true },
        ],
        actions: [
          {
            tooltip: "Select Button",
            backgroundColor: darkColors.yellow,
            color: darkColors.white,
          },
        ],
      };
    return(
        <>
            <h3>Geometria Externa</h3>
            <Plot data={graph} />
            <SlidingPanel>
              <ul>
                {/*Component Accordion*/}
                <RecursiveAccordion
                  key={"accordion_0"}
                  accordionData={slidinPanelAccordionData}
                >
                  {/* Multiple Children is needed! */}

                  <div key={1} className="accordion_dropdown_item">
                    <TabsComponent data={dataTab1}>
                      <div key={"Revestimento Anterior"}>
                      <ActionFabGrid metaData={metaData} />
                      </div>
                      <div key={"Poço Aberto"}> 
                        <div key={"Revestimento Anterior"}>
                          <ActionFabGrid metaData={PocoAbertoData} />
                        </div>
                      </div>
                    </TabsComponent>
                  </div>

                  <div key={2} className="accordion_dropdown_item">
                    <TabsComponent data={dataTab2}>
                      <div key={"Coluna de Trabalho"}> Teste Coluna</div>
                      <div key={"Revestimento"}> Teste Revestimento</div>
                    </TabsComponent>
                  </div>
                  <div key={3} className="accordion_dropdown_item">
                    <TabsComponent data={dataTab3}>
                      <div key={"Centralizadores"}> Teste Centralizadores </div>
                      <div key={"Intervalos de Centralizadores"}>
                        {" "}
                        Teste Intervalo Centralizador
                      </div>
                    </TabsComponent>
                  </div>
                  <div key={4} className="accordion_dropdown_item">
                    <p>in dev </p>
                  </div>
                </RecursiveAccordion>
              </ul>
            </SlidingPanel>
            
        </>
    )
}

export default GeometriaExterna;
