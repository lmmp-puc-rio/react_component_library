// # Main Import
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Accordion, BallonNotification } from "../components/common";

// # Import Component Style
import "./styles/AccordionSmallFrame.css";

function AccordionSmallFrame(props) {

  const activeName = props.activeName
  const setActiveName = props.setActiveName

  const data = props.accordionData;
  const maxHeight = props.maxHeight;

  const valuesInfo = props.valuesInfo;
  const setErrorInfo = props.setErrorInfo

  const valuesScenery = props.valuesScenery;
  const setErrorScenery = props.setErrorScenery;


  
  const handleToggle = (url, id, setError, values) => {
    
    if(id=== "Informações gerais") {
      let emptyValues = Object.values(valuesScenery).filter(
        (v) => v === null || v === "")
        if(emptyValues.length > 0) {
          setErrorScenery(emptyValues.length)
          setErrorInfo(0)
      
    }
  }
    else if(id=== "Cenário") {
      let emptyValues = Object.values(valuesInfo).filter(
        (v) => v === null || v === "")
        if(emptyValues.length > 0) {
          setErrorInfo(emptyValues.length)
          setErrorScenery(0)
      
    }
    }  
    setActiveName(id);
    /*    window.location.href = url */
  };


  return (
    <div className="accordion__side-bar">
      <Accordion accordionData={data} maxHeight={maxHeight}>
        <div key={1}>
          {data[0].inputData.map((item) => (
            <>
              {item.error > 0 ? <BallonNotification error={item.error} link={item.route} /> : " "}
              <p
                className={
                  activeName === item.name
                    ? "accordion__item-text-active"
                    : "accordion__item-text"
                }
                onClick={() => handleToggle(item.route, item.name, item.callBackError, item.values)}
              >
                {item.name}
              </p>
            </>
          ))}
        </div>
        <div key={2}>
          {data[1].inputDataResults.map((item) => (
            <p className="accordion__item-text">{item.name}</p>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

export default AccordionSmallFrame;
