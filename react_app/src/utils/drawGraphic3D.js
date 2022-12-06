
/* Function to draw lines 3D */
var pointCount = 31;

var x = [];
var y = [];
var z = [];
var c = [];


for ( var i = 0; i < pointCount; i++) {
    var r = 10 * Math.cos(i / 10);
    x.push(r * Math.cos(i));
    y.push(r * Math.sin(i));
    z.push(i);
    c.push(i);
  }

const array_line = {
    type: 'scatter3d',
    mode: 'lines+markers',
    x: x,
    y: y,
    z: z,
    line: {
      width: 6,
      color: c,
      colorscale: "Viridis"},
    marker: {
      size: 3.5,
      color: c,
      colorscale: "Greens",
      cmin: -20,
      cmax: 50
    }}


/* Function to draw planes 3D */

const z1 = [
    /* Cada array cria uma nova "linha" no eixo Z */
        [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
        [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
        [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
        [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
        [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
        [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
        [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
        [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
        [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
        [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
        [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
        [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
        [9, 9.01, 9, 9.2, 9.23, 9.2],
    
      ];

      const z2 = [];
      for (var i = 0; i < z1.length; i++) {
        const z2_row = [];
        for (var j = 0; j < z1[i].length; j++) {
          z2_row.push(z1[i][j] + 3);
        }
        z2.push(z2_row);
      }

var data_z1 = { z: z1, showscale: false, opacity: 0.9, type: "surface" };
var data_z2 = { z: z2, showscale: false, opacity: 0.9, type: "surface" };


/* Function to draw all Graphic3D */
export const drawAllGraphic3D = () => {
    var data_array = [];
    data_array.push(data_z1, data_z2, array_line);
    return data_array
  }