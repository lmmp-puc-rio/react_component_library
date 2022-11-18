// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function GraphicObjectsPlotly(props) {
  const layout = props.layout;

  return <Plot layout={layout} />;
}

export default GraphicObjectsPlotly;