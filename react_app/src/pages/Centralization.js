// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { CentralizationPlotly } from "../components/common";

// # Import Component Style
import "./pages.css";

// # Import Component Style
const Centralization = (props) => {
  const layout = {
    title: "<b>Centralização</b>",
    font: {
      size: 14,
      color: "black",
      xref: "x",
      x: 0.05,
    },
    annotations: [
      {
        x: 1,
        y: 0.5,
        xref: 'x',
        yref: 'y',
        text: 'Standoff: 35%',
        showarrow: false,
      },
      {
        x: 3 ,
        y: 0.5,
        xref: 'x',
        yref: 'y',
        text: 'Ângulo: 115°',
        showarrow: false,
      }
    
    ],

    xaxis: {
      range: [0, 4],

      zeroline: false,
      visible: false,
    },

    yaxis: {
      range: [0, 4],
      visible: false,
    },

    width: 500,

    height: 500,

    shapes: [

      // Unfilled Circle

      {
        type: "circle",

        xref: "x",

        yref: "y",

        x0: 1,

        y0: 1,

        x1: 3,

        y1: 3,

        line: {
          color: "#FF0000",
        },
      },

      // Unfilled Circle

      {
        type: "circle",

        xref: "x",

        yref: "y",

        x0: 1.5,

        y0: 1.5,

        x1: 2.5,

        y1: 2.5,

        line: {
          color: "#0000AA",
        },
      },

      // Solid Line

      {
        type: "line",

        xref: "x",

        yref: "y",

        x0: 2,

        y0: 2,

        x1: 2.5,

        y1: 1.8,

        line: {
          color: "#FF0000",
        },
      },

      // Dashdot Line

      {
        type: "line",

        x0: 2.5,

        y0: 1.8,

        x1: 3,

        y1: 1.8,

        line: {
          color: "#0000AA",

          width: 3,

          dash: "dashdot",
        },
      },
    ],
  };

  return (
    <div className="reometry-plotly-container">
      <CentralizationPlotly layout={layout} />
    </div>
  );
};

export default Centralization;
