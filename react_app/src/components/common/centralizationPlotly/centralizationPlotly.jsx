// # CentralizationPlotly (Standoff and Angle) =  Graph that renders two circles (external and internal geometry) and two lines (solid and hashed) to calculate the Standoff and Angle


// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function CentralizationPlotly(props) {
  const layout = props.layout;
  const data = props.data;

  return <Plot layout={layout} data={data}/>;
}

export default CentralizationPlotly;