import React from "react"
import { SlidingPanel,TabsComponent,RecursiveAccordion, GridForm } from "../components/common"
import Plot from "react-plotly.js";


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
      
      const conversionFactors = {
        lenght: { km: 1000, cm: 1 / 100, mm: 1 / 1000, um: 1 / 1000000, m: 1 },
        pressure: { psi: 0.000145038, mmHg: 0.00750062, Pa: 1 },
      };
    
      const formData = {
        gap: {
          label: "Gap:",
          defaultValue: "0",
          unitType: "lenght",
          selectecUnit: "mm",
        },
        size: {
          label: "Size:",
          defaultValue: "0",
          unitType: "lenght",
          selectecUnit: "cm",
        },
        p0: {
          label: "Inlet Pressure:",
          defaultValue: "0",
          unitType: "pressure",
          selectecUnit: "psi",
        },
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
                      <GridForm data={formData} conversionFactors={conversionFactors} />
                      </div>
                      <div key={"Poço Aberto"}> Teste Poço Aberto</div>
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
