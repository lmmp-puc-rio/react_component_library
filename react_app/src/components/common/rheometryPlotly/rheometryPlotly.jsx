// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


// # Import Component Style
import "./rheometryPlotly.css";

function RheometryPlotly(props) {
  const data = props.data;
  const layout = props.layout;

  return <Plot data={data} layout={layout} />;
}

export default RheometryPlotly;