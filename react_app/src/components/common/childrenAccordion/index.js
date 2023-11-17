import React, { useContext } from "react";

// # Context
import { AccordionSmallFrameContext } from "../../../contexts/AccordionSmallFrameContext";

const ChildrenAccordion = ({data}) => {
  // ActiveName at AccordionSmallFrame
  const { activeName } = useContext(AccordionSmallFrameContext);

  return (
    <div>
      <div>
        {data[0].inputData.map((item, index) => (
          <p
            key={index}
            className={
              activeName === item.name
                ? "accordion__item-text-active"
                : "accordion__item-text"
            }
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChildrenAccordion;
