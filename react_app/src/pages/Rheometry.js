// #  Main Imports
import React from "react";

// #  Local SubComponents & utils
import { RheometryPlotly,ActionFabGrid } from "../components/common";

// # Import Component Style
import "./pages.css";

// # Import Component Style
const Rheometry = (props) => {

  const metaDataDeslocamento = {
    header: [
      { key: "ID", label: "ID", expandable: false },
      { key: "Fluido", label: "Fluido", expandable: true },
      { key: "Volume", label: "Volume (bbl)", expandable: true },
      { key: "Topo", label: "Topo", expandable: true },
      { key: "CompAnular", label: "Comp. do anular (m)", expandable: true },
      { key: "Entrada", label: "Entrada", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",

      },
    ],
  };


  const data = [
    {
      x: [1, 1.6999999999999997, 2.4, 3.0999999999999996, 3.8, 4.5, 5.199999999999999, 5.8999999999999995],
      y: [0.05417883004630424, 0.07302015442639505, 0.08864917498730805, 0.10237405010755105, 0.11479465909253384, 0.12624694053260466, 0.13694203651948034, 0.1470231529534866],
      name: "Pasta",
      type: "scatter",
      mode: "spline",
      line: {shape: 'spline'},
      marker: { color: "#0000AA" },
    },

    {
      x: [1, 1.6999999999999997, 2.4, 3.0999999999999996, 3.8, 4.5, 5.199999999999999, 5.8999999999999995],
      y: [0.028032233599165235, 0.033797067258916964, 0.03816475505717655, 0.04176738240579186, 0.04487468374482342, 0.04763007793586533, 0.05012008610503775, 0.05240142820862376],
      name: "Espaçador",
      type: "scatter",
      mode: "markers",
      marker: { color: "#FF0000" },
    },

    {
      x: [1, 1.6999999999999997, 2.4, 3.0999999999999996, 3.8, 4.5, 5.199999999999999, 5.8999999999999995],
      y: [0.021574820922794752, 0.02543214680679182, 0.02830135105216348, 0.030638125865518433, 0.03263410473394274, 0.0343901129334934, 0.035966472737575264, 0.0374024576277138],
      name: "Base Água",
      type: "scatter",
      mode: "spline",
      line: {shape: 'spline'},
      marker: { color: "#FF00AA" },
    },
  ];

  const layout = {
    width: 800,
    height: 600,
    title: "<b>Reometria</b>",
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
    <div className="plotly-container">
      <RheometryPlotly data={data} layout={layout} />
      <ActionFabGrid metaData={metaDataDeslocamento} />
    </div>
  );
};

export default Rheometry;