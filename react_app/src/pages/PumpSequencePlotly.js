// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { PumpSequenceChart } from "../components/common";

// # Import Component Style
import "./styles/PumpSequencePlotly.css";

// # Import Component Style
const PumpSequencePlotly = (props) => {
  const data = [

 /*    Injection flow data */
    {
      x: [0, 1650, 1650, 1850, 1850, 2100, 2100, 2300, 2300],
      y: [10, 10, 5, 5, 8, 8, 10, 10, 5],
      name: "Vazão de Injeção",
      type: "line",
      mode: "line",
      marker: { color: "#0000AA" },
    },

/*     Output flow data */
    {
      x: [100, 105, 300, 500, 500, 1000, 1550, 1550],
      y: [10, 10.2, 10.2, 10.1, 9.9, 9.8, 9.8, 10],
      name: "Vazão de Saída",
      type: "scatter",
      mode: "spline",
      line: { shape: "spline" },
      marker: { color: "#FF0000" },
    },

/*     Output flow data */

    {
      x: [1650, 1670, 1700, 1700, 1730, 1760, 1760, 1790, 1790, 1850, 1880, 1950, 1950 ],
      y: [7.4, 5.8, 5.8, 5.2, 5.7, 5.7, 5.2, 5.2, 5.4, 5.4, 6.5, 6.5, 8],
      type: "scatter",
      showlegend: false,
      mode: "spline",
      line: { shape: "spline" },
      marker: { color: "#FF0000" },
    },
  ];

  const layout = {
    width: 800,
    height: 600,
    plot_bgcolor:"#f2f0f3",
    title: "<b>Vazão de Bombeio</b>",
    font: {
      family: "Arial",
      size: 16,
      color: "black",
    },
    xaxis: {
      title: "<b>Volume Bombeado (bbl)</b>",
      range: [0, 2500],
      zeroline: false,
    },
    yaxis: {
      title: "<b>Vazão (bpm)</b>",
      range: [4.5, 11],

      zeroline: false,
      
    },
  };

  return (
    <div className="plotly-container">
      <PumpSequenceChart data={data} layout={layout} />
    </div>
  );
};

export default PumpSequencePlotly;
