import React from "react";

// #  Local SubComponents & utils
import { drawAllExternalGeometry } from "../utils/drawExternalGeometry";
import { drawAllInternalGeometry } from "../utils/drawInternalGeometry";
import { drawAllGeometry } from "../utils/drawGeometry";
import { drawAllPumpSequence } from "../utils/drawPumpSequence";
import { GraphicObjectsPlotly } from "../components/common";

// # Import Component Style
const GraphicObjectsChart = (props) => {
  const layout_external = {
    title: "<b>Relação de Diâmetros (Geometria Externa)<b>",

    xaxis: {
      range: [-15, 15],

      showgrid: true,
      title: "<b>Raio (m)<b>",
      color: "black",
    },

    yaxis: {
      range: [7000, 0],
      title: "<b>Prof. Medida (m)<b>",
      color: "black",
    },

    width: 800,

    height: 600,

    shapes: drawAllExternalGeometry(),
  };

  const layout_geometry = {
    title: "<b>Relação de Diâmetros (Geometria)<b>",

    xaxis: {
      range: [-15, 15],

      showgrid: true,
      title: "<b>Raio (m)<b>",
      color: "black",
    },

    yaxis: {
      range: [7000, 0],
      title: "<b>Prof. Medida (m)<b>",
      color: "black",
    },

    width: 800,

    height: 600,

    shapes: drawAllGeometry(),
  };

  const layout_internal = {
    title: "<b>Relação de Diâmetros (Geometria Interna)<b>",

    xaxis: {
      range: [-15, 15],

      showgrid: true,
      title: "<b>Raio (m)<b>",
      color: "black",
    },

    yaxis: {
      range: [7000, 0],
      title: "<b>Prof. Medida (m)<b>",
      color: "black",
    },

    width: 800,

    height: 600,

    shapes: drawAllInternalGeometry(),
  };

  const layout_pump_seuquence = {
    title: "<b>Relação de Diâmetros (Pump Sequence)<b>",

    xaxis: {
      range: [-15, 15],

      showgrid: true,
      title: "<b>Raio (m)<b>",
      color: "black",
    },

    yaxis: {
      range: [7000, 0],
      title: "<b>Prof. Medida (m)<b>",
      color: "black",
    },

    width: 800,

    height: 600,

    shapes: drawAllPumpSequence(),
  };

  return (
    <div>
      <GraphicObjectsPlotly layout={layout_external} />
      <GraphicObjectsPlotly layout={layout_internal} />
      <GraphicObjectsPlotly layout={layout_geometry} />
      <GraphicObjectsPlotly layout={layout_pump_seuquence} />
    </div>
  );
};

export default GraphicObjectsChart;
