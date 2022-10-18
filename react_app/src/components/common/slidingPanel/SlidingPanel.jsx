// #Sliding Panel = a React Sliding Panel, that opens smoothly from one side of the screen(left or right by input) and displays child components.
// # Main Import
import React, { useState } from "react";

// # Import React Sliding Pane library
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// # Import Component Style
import "./SlidingPanel.css";

//import all components here
import RecursiveAccordion from "../recursiveAccordion";
import TabsComponent from "../tabsComponent";
import expandableGrid from '../expandableGrid'


export default function SlidingPanel(props) {
  const [state, setState] = useState({ isPanelOpen: false });
  
  {/*Tab Data */}
  const dataTab1=[
    {
      id : "Revestimento Anterior",
      description:"Revestimento Anterior",
      name:"Revestimento Anterior",
    },
    {
      id : "Poço Aberto",
      description:"Poço Aberto",
      name:"Poço Aberto",
    },  
  ]

  const dataTab2 =[
  {
    id : "Coluna de Trabalho",
    description:"Coluna de Trabalho",
    name:"Coluna de Trabalho",
  },
  {
    id : "Revestimento",
    description:"Revestimento",
    name:"Revestimento",
  },
  ]

const dataTab3 =[
  {
    id : "Centralizadores",
    description:"Centralizadores",
    name:"Centralizadores",
  },
  {
    id : "Intervalos de Centralizadores",
    description:"Intervalos de Centralizadores",
    name:"Intervalos de Centralizadores",
  },
]

{/*Accordion Data */}
  const dataStructure = [
    {
        main: 'Geometria Externa',
        id: '1',
        hidden: '',
        actions: [],
        subitems: [],
    },
    {
        main: 'Geometria Interna',
        id: '2',
        hidden: '',
        actions: [],
        subitems:[]
    },
    {
      main: 'Centralização',
      id: '3',
      hidden: '',
      actions: [],
      subitems:[]
  },  
  {
    main: 'Trajetória',
    id: '4',
    hidden: '',
    actions: [],
    subitems:[]
},
   ];

  
  return (
    <div className="sliding-container">
      <button
        onClick={() => setState({ isPaneOpen: true })}
        className="open-bttn"
      >
        {"<"}
      </button>
      <SlidingPane isOpen={state.isPaneOpen} width="30%" hideHeader>
        <button
          className="close-bttn"
          onClick={() => setState({ isPaneOpen: false })}
        >
          {">"}
        </button>
        {props.children}
        <ul>
          {/*Component Accordion*/ }
          <RecursiveAccordion key={"accordion_0"}
                        accordionData={dataStructure}>

      
                {/* Multiple Children is needed! */}
                
                <div key={1} className="accordion_dropdown_item">
                <TabsComponent data={dataTab1}>
                  <div key={"Revestimento Anterior"}> Revestimento Anterior </div>
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
                  <div key={"Intervalos de Centralizadores"}> Teste Intervalo Centralizador</div>
                </TabsComponent>
                </div>
                <div key={4} className="accordion_dropdown_item">
                  <p>in dev </p>
                </div>
                
              </RecursiveAccordion>
            </ul>
      {/* In the future the Sliding Panel will receive the Accordion Component */}
      </SlidingPane>
    </div>
  );
}
