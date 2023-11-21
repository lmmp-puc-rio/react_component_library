// # Main Import
import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

// #  Local SubComponents & utils
import {
  Accordion,
  BallonNotification,
} from "../components/common";

import DynamicTree from "../components/common/dynamicTree/dynamicTree";

// # Context
import { AccordionSmallFrameContext } from "../contexts/AccordionSmallFrameContext";
import { FormsContext } from "../contexts/FormsContext";

// # Import Component Style
import "../pages/styles/AccordionSmallFrame.css";
import { treeInfoResults } from "../data/treeInfo";

function AccordionSmallFrame(props) {
  const data = props.accordionData;
  const maxHeight = props.maxHeight;
  const handleToggle = props.handleToggle;

  const dataSimulation = props.dataSimulation;
  const setDataSimulation = props.setDataSimulation;

  // ActiveName at AccordionSmallFrame
  const { activeName, setActiveName } = useContext(AccordionSmallFrameContext);

  /* State to set form values for GeneralInfo Page and Scenery Page*/
  const { valuesInfo, valuesScenery, setErrorInfo, setErrorScenery } =
    useContext(FormsContext);

  const history = useHistory();
  const case_id = history.location.pathname.split("/")[2];

  // State to control simulation button
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // State to control error message
  const [showError, setShowError] = useState(false);

  // State to control progress bar percentage
  const [completed, setCompleted] =
    useState(0); /* dataSimulation.execution_percentage */


  // Data for Dynamic Tree Component
  const dynamicTreeData = {
    name: "Gráficos",
    icon: "",
    info: treeInfoResults,
  };


  useEffect(() => {
    if (history.location.pathname.endsWith("/general_info")) {
      setActiveName("Informações gerais");
    } else if (history.location.pathname.endsWith("/scenery")) {
      setActiveName("Cenário");
    } else if (history.location.pathname.includes("/geometry")) {
      setActiveName("Geometria");
    } else if (history.location.pathname.includes("/pumpsequence")) {
      setActiveName("Sequência de Bombeio");
    } else if (history.location.pathname.includes("/thermal_profile")) {
      setActiveName("Perfil Térmico");
    } else if (history.location.pathname.endsWith("/simulation")) {
      setActiveName("Simulação");
    }
  }, [activeName, history.location.pathname, setActiveName]);



  return (
    <div className="accordion__side-bar">
      <Accordion accordionData={data} maxHeight={maxHeight} accordionKey="1">
        <div key={1}>
          {data[0].inputData.map((item) => (
            <div
              onClick={() => handleToggle(item.route, item.name)}
              className="ballon-notification-container"
            >
              {item.error > 0 ? (
                <BallonNotification error={item.error} link={item.route} />
              ) : (
                " "
              )}

              <p
                className={
                  activeName === item.name
                    ? "accordion__item-text-active"
                    : "accordion__item-text"
                }
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div key={2} className="accordion-result__container">
          <DynamicTree
            name={dynamicTreeData.name}
            data={dynamicTreeData.info}
          />
        </div>
      </Accordion>
    </div>
  );
}

export default AccordionSmallFrame;
