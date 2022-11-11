// # PumpSequencePlotly =  Graph that renders injection (solid line) and output (spline line or marker) flows

// #  Main Imports
import React from "react";
import Plot from "react-plotly.js";


function PumpSequenceChart(props) {
  const data = props.data;
  const layout = props.layout;

  return <Plot data={data} layout={layout} />;
}

export default PumpSequenceChart;