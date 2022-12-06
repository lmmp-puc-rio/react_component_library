// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function Graphic3D(props) {
  const data = props.data;
  const layout  = props.layout;

  return <Plot data={data} layout={layout}/>;
}

export default  Graphic3D;