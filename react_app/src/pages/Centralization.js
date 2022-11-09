// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { CentralizationPlotly } from "../components/common";

// # Import Component Style
import "./pages.css";

// # Import Component Style
const Centralization = (props) => {


/* Data referring to the Standoff and Angle chart */
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


/*   Data referring to the Positioning and Centralizers chart */
  const data = [
    {
      x: [0, 100],
      y: [1850, 1850],
      showlegend:false,
      mode: 'lines',
      line: {
        dash: 'dot',
        width: 4
      },
      marker: { color: "black" }
    },

    {
      x: [1, 1.6999999999999997, 2.4, 3.0999999999999996, 3.8, 4.5, 5.199999999999999, 5.8999999999999995],
      y: [0.028032233599165235, 0.033797067258916964, 0.03816475505717655, 0.04176738240579186, 0.04487468374482342, 0.04763007793586533, 0.05012008610503775, 0.05240142820862376],
      name: "Centralizador",
      type: "scatter",
      mode: "markers",
      marker: { color: "red" },
    },

    {
      x: [1, 1.6999999999999997, 2.4, 3.0999999999999996, 3.8, 4.5, 5.199999999999999, 5.8999999999999995],
      y: [0.021574820922794752, 0.02543214680679182, 0.02830135105216348, 0.030638125865518433, 0.03263410473394274, 0.0343901129334934, 0.035966472737575264, 0.0374024576277138],
      name: "Tubo",
      type: "scatter",
      mode: "lines",
      line: {
        color: "#f0bc37",
        width: 1
      }
    },
  ];

  const layout2 = {
    title: "<b>Centralização(Posicionamento e Centralizadores)</b>",
    font: {
      size: 14,
      color: "black",
      xref: "x",
      x: 0.05,
    },

    xaxis: {
      range: [50, 60],
      title: "Standoff (%)",

    },

    yaxis: {
      range: [2800, 1200],
      title: "Prof. Média (m)",
    
    },

    width: 500,

    height: 500,
  };

  return (
    <div className="reometry-plotly-container">
      <CentralizationPlotly  data={data} layout={layout2} />
      <CentralizationPlotly layout={layout} />
    </div>
  );
};

export default Centralization;
