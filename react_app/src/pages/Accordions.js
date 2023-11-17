// #  Main Imports
import React from 'react';

// #  Local SubComponents & utils
import Accordion from "../components/common/accordionTest/accordion";
import ChildrenAccordion from "../components/common/childrenAccordion";

// Data accordion
import { dataStructure } from "../data/accordionData";

// # Import Component Style
import "./pages.css";

const Accordions = () => {
  // Defining max-heigth of Accordion child. It changes considering the Page
  const maxHeight = "31vh";

    return (
    <div>
      <Accordion
        accordionData={dataStructure}
        accordionKey={1}
        maxHeight={maxHeight}
      >
        <ChildrenAccordion data={dataStructure} />
      </Accordion>
        </div>
        
    );
};

export default Accordions;

