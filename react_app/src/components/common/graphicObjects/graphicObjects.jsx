// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function GraphicObjectsPlotly(props) {
  const data = props.data;
  const layout = props.layout;

  return <Plot data={data} layout={layout} />;
}

export default GraphicObjectsPlotly;