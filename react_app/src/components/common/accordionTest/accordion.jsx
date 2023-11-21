/* Accordion: must receive JS object as input with tabs labels and rescpective children inside.
- tabs must animate smoothly
- careful with double scrolling. */

// # Main Import 
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { HistoryContext } from "../../../contexts/HistoryContext";

// # Import Component Style
import "./accordion.css";

function AccordionItem(props) {
  const title = props.title;
  const id = props.id;
  const route = props.route;

  const isOpen = props.isOpen;
  const setOpenKey = props.setOpenKey;
  const style = { height: props.maxHeight };

  // Props data and Context to implement modal changes
  const hasChange = props.hasChange;
  const setIsModalOpen = props.setIsModalOpen;
  const { setHistoryLocation } = useContext(HistoryContext);

  // Function responsible to open modal changes
  function openModal(route) {
    setIsModalOpen(true);
    setHistoryLocation(route);
  }

  return (
    <div className="accordion__container--item">
      {route ? (
        // Stay at the same page : {} 
        <Link to={hasChange === true ? {} : route}>
          <div
            className="accordion__title"
            onClick={
              hasChange === true ? () => openModal(route) : () => setOpenKey(id)
            }
          >
            <p>{title}</p>
          </div>
        </Link>
      ) : (
        <div className="accordion__title" onClick={() => setOpenKey(id)}>
          <p>{title}</p>
{/*         <div className="accordion__icon">{isActive && isOpen ? <i class="fas fa-times"></i>: <i class="fas fa-plus"></i>}</div> */}
        </div>
      )}

      {isOpen && (
        <div className="accordion__container--child" style={style}>
          {props.children.length > 0
            ? props.children.map((child) => {
                if (child.key === id) {
                  return child;
                }
              })
            : props.children}
        </div>
      )}
    </div>
  );
}

function Accordion(props) {
  const accordionData = props.accordionData;

  const accordionKey = props.accordionKey;

  const [openKey, setOpenKey] = useState(accordionKey);

  const maxHeight = props.maxHeight;

  const children = props.children;

  const hasChange = props.hasChange;
  const setIsModalOpen = props.setIsModalOpen;

  return (
    <ul className="accordion__container">
      {accordionData.map(({ title, id, route }) => (
        <AccordionItem
          id={id}
          title={title}
          children={children}
          isOpen={openKey === id}
          setOpenKey={setOpenKey}
          maxHeight={maxHeight}
          route={route}
          hasChange={hasChange}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </ul>
  );
}

export default Accordion;
