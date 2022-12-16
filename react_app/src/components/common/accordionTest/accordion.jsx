/* Accordion: must receive JS object as input with tabs labels and rescpective children inside.
- tabs must animate smoothly
- careful with double scrolling. */

// # Main Import 
import React, { useState } from 'react';

// # Import Component Style
import "./accordion.css";

const AccordionItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const title = props.title;
  const id = props.id;
  const isOpen = props.isOpen
  const setOpenKey = props.setOpenKey;

  const handleToggle =(id)=> {
    setOpenKey(id)
    setIsActive(!isActive)
  }

  return (
    <div className="accordion__container--item">
      <div className="accordion__title" onClick={() => handleToggle(id)}>
        <p>{title}</p>
        <div className="accordion__icon">{isActive ? <i class="fas fa-times"></i>: <i class="fas fa-plus"></i>}</div>
      </div>
      {isActive && (
        <div className="accordion__container--child" style={{display: isOpen ? "block" : "none"}}>
          {props.children.map((child) => {
            if (child.key === id) {
              return child;
            }
          })}
        </div>
      )}
    </div>
  );
};

const Accordion = (props) => {
  const [openKey, setOpenKey] = useState("1")

  const accordionData = props.accordionData;
  const children = props.children


  return (
    <ul className="accordion__container">
      {accordionData.map(({ title, id }) => (
        <AccordionItem id={id} title={title} children={children}
        isOpen={openKey === id}
        setOpenKey={setOpenKey}
         />
      ))}
    </ul>
  );
};

export default Accordion;
