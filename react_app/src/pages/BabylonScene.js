// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { BabylonScene } from "../components/common";

// # Import Component Style
const ConcentrationGraphic = (props) => {


  const layout = {
    width: 800,
    height: 500,
    plot_bgcolor:"#f2f0f3",
    title: "<b>Caso x</b>",
    font: {
      size: 14,
      color: "black",
    },
  };

  return (
    <div>
      <h1>Babylon Model Viewer</h1>
      <BabylonScene layout={layout}/>
    </div>
  );
};

export default ConcentrationGraphic;
