// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { RheometryPlotly } from "../components/common";

// # Import Component Style
import "./pages.css";

// # Import Component Style
const Rheometry = (props) => {
  const data = [
    {
      x: [0, 3, 4, 5, 6, 10, 30, 50],
      y: [0, 5, 5, 6, 8, 9, 130, 150],
      name: "Curva 1",
      type: "scatter",
      mode: "lines",
      marker: { color: "#0000AA" },
    },

    {
      x: [0, 3, 4, 5, 6, 10, 30, 50],
      y: [0, 2, 5, 6, 8, 9, 130, 150],
      name: "Curva 2",
      type: "scatter",
      mode: "lines",
      marker: { color: "#FF0000" },
    },

    {
      x: [0, 3, 4, 5, 6, 10, 30, 50],
      y: [0, 3, 4, 5, 6, 10, 30, 50],
      name: "Conjunto de Pontos",
      type: "scatter",
      mode: "markers",
      marker: { color: "#FF00AA" },
    },
  ];

  const layout = {
    width: 800,
    height: 600,
    title: "Reometria",
    font: {
      family: "Arial",
      size: 16,
      color: "black",
    },
    xaxis: {
      title: "Título do Eixo X",
      showgrid: false,
      zeroline: false,
    },
    yaxis: {
      title: "Título do Eixo Y",
      showline: false,
    },
  };

  return (
    <div className="reometry-plotly-container">
      <RheometryPlotly data={data} layout={layout} />
    </div>
  );
};

export default Rheometry;