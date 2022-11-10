// # RheometryPlotly = Graph that renders two solid lines and markers

// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function RheometryPlotly(props) {
  const data = props.data;
  const layout = props.layout;

  return <Plot data={data} layout={layout} />;
}

export default RheometryPlotly;