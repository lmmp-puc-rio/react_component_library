// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { Graphic3D } from "../components/common";

// # Import Component Style
import "./styles/PumpSequencePlotly.css";

import { drawAllGraphic3D } from "../utils/drawGraphic3D";

// # Import Component Style
const Graphic3DPlotly = (props) => {


  const layout = {
    width: 800,
    height: 500,
    plot_bgcolor:"#f2f0f3",
    title: "<b>Trajetória</b>",
    font: {
      size: 14,
      color: "black",
    },
  };

  return (
    <div className="plotly-container">
      <Graphic3D data={drawAllGraphic3D()} layout={layout}/>
    </div>
  );
};

export default Graphic3DPlotly;
