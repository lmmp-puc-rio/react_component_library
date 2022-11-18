const internal_geometry = {
    extra_top_weight: 95,
    casing: [
      {
        casing_element_item: {
          drift_id: 0,
          measured_depth: 3358,
          inside_diameter: 9.56,
          weight: 65.7,
          burst: 0,
          grade: "",
          average_joint_length: 12.2,
          section_volume: 378.37,
          nominal_weight: 65.7,
          connection: "",
          segment_length: 1299,
          body_yield_strength: 0,
          outside_diameter: 10.75,
          makeup_torque: 0,
          collapse: 0,
        },
        eid: "entity/28120",
      },
      {
        casing_element_item: {
          drift_id: 0,
          measured_depth: 5427,
          inside_diameter: 9.156,
          weight: 85.3,
          burst: 0,
          grade: "",
          average_joint_length: 12.2,
          section_volume: 552.8,
          nominal_weight: 85.3,
          connection: "",
          segment_length: 2069,
          body_yield_strength: 0,
          outside_diameter: 10.75,
          makeup_torque: 0,
          collapse: 0,
        },
        eid: "entity/28121",
      },
      {
        casing_element_item: {
          drift_id: 0,
          measured_depth: 5555,
          inside_diameter: 8.656,
          weight: 108.7,
          burst: 0,
          grade: "",
          average_joint_length: 12.2,
          section_volume: 30.57,
          nominal_weight: 108.7,
          connection: "",
          segment_length: 128,
          body_yield_strength: 0,
          outside_diameter: 10.75,
          makeup_torque: 0,
          collapse: 0,
        },
        eid: "entity/28122",
      },
      {
        casing_element_item: {
          drift_id: 0,
          measured_depth: 6102,
          inside_diameter: 8.758,
          weight: 66.9,
          burst: 0,
          grade: "",
          average_joint_length: 12.2,
          section_volume: 133.72,
          nominal_weight: 66.9,
          connection: "",
          segment_length: 547,
          body_yield_strength: 0,
          outside_diameter: 9.875,
          makeup_torque: 0,
          collapse: 0,
        },
        eid: "entity/28123",
      },
    ],
  };
  
  
  const external_geometry = {
      "open_hole": [
        {
          "open_hole_element_item": {
            "measured_depth": 6112,
            "segment_length": 585,
            "inside_diameter": 12.25,
            "outside_diameter": 12.25
          },
          "eid": "entity/28118"
        }
      ],
      "last_casing": [
        {
          "casing_element_item": {
            "drift_id": 0,
            "measured_depth": 5127,
            "inside_diameter": 12.375,
            "weight": 88.2,
            "burst": 0,
            "grade": "",
            "average_joint_length": 12.2,
            "nominal_weight": 88.2,
            "connection": "",
            "segment_length": 3068,
            "body_yield_strength": 0,
            "outside_diameter": 13.625,
            "makeup_torque": 0,
            "collapse": 0
          },
          "eid": "entity/28116"
        },
        {
          "casing_element_item": {
            "drift_id": 0,
            "measured_depth": 5527,
            "inside_diameter": 12.4,
            "weight": 114,
            "burst": 0,
            "grade": "",
            "average_joint_length": 12.2,
            "nominal_weight": 114,
            "connection": "",
            "segment_length": 400,
            "body_yield_strength": 0,
            "outside_diameter": 14,
            "makeup_torque": 0,
            "collapse": 0
          },
          "eid": "entity/28117"
          }
      ]
  }
  
  
  
  
  export const drawInternalGeometry = () => {
    let shapesInternalGeometry= [];

    /* Data for x0 , x1 */
      const outside_diameter = internal_geometry.casing.map((index) => index.casing_element_item.outside_diameter);
      const inside_diameter = internal_geometry.casing.map((index) => index.casing_element_item.inside_diameter);

    /* Data for y0 , y1 */
    const y1 = internal_geometry.casing.map((index) => index.casing_element_item.measured_depth);
    const segment_length = internal_geometry.casing.map((index) => index.casing_element_item.segment_length);
    const y0 = y1.map((n, i) => n - segment_length[i]);


    for (let index = 0; index < internal_geometry.casing.length; index += 1) {
      const internalShape = {
        type: "rect",
  
        x0: -inside_diameter[index],
  
        y0: y0[index],
  
        x1: inside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
          dash: "dot",
  
          width: 1,
        },
        fillcolor: "grey",
        opacity: 0.5,
      };
      const espNegative = {
        type: "rect",
  
        x0: -inside_diameter[index],
  
        y0: y0[index],
  
        x1: -outside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
          dash: "dashdot",
  
          width: 2,
        },
        fillcolor: "grey",
      
      };
  
      const espPositive = {
        type: "rect",
  
        x0: inside_diameter[index],
  
        y0: y0[index],
  
        x1: outside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
          dash: "dashdot",
  
          width: 2,
        },
        fillcolor: "grey",
    
      };
  
      shapesInternalGeometry.push(internalShape, espNegative, espPositive);
    }
  
    return shapesInternalGeometry;
  };
  
  
  
  export const drawExternalGeometry = () => {
  let shapesExternalGeometry = [];
  let allShapesExternal = [];

  /* Data for x0 , x1 */
  const outside_diameter = external_geometry.last_casing.map((index) => index.casing_element_item.outside_diameter);
  const inside_diameter = external_geometry.last_casing.map((index) => index.casing_element_item.inside_diameter);

 /* Data for y0 , y1 */
  const y1 = external_geometry.last_casing.map((index) => index.casing_element_item.measured_depth);
  const segment_length = external_geometry.last_casing.map((index) => index.casing_element_item.segment_length);
  const y0 = y1.map((n, i) => n - segment_length[i]);


/* Data for open_hole (line) - x0, x1, y0, y1*/
  const openHole = external_geometry.open_hole[0].open_hole_element_item.measured_depth
  const segmentLength = external_geometry.open_hole[0].open_hole_element_item.segment_length
  const lineY = openHole - segmentLength
  const linex = external_geometry.open_hole[0].open_hole_element_item.inside_diameter
  
  let shapeOpenHole = [
    {
    type: 'line',
    x0: linex,
    y0: lineY,
    x1: linex,
    y1: openHole,
    line: {
      color: 'green',
      width: 3
    }},
    {
    type: 'line',
    x0: -linex,
    y0: lineY,
    x1: -linex,
    y1: openHole,
    line: {
      color: 'green',
      width: 3
    }},
  ]
  
  
    for (let index = 0; index < external_geometry.last_casing.length; index += 1) {
      const externalShape = {
        type: "rect",
  
        x0: -inside_diameter[index],
  
        y0: y0[index],
  
        x1: inside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
  
          width: 1,
        },

      };
      const espNegative = {
        type: "rect",
  
        x0: -inside_diameter[index],
  
        y0: y0[index],
  
        x1: -outside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
          dash: "dashdot",
  
          width: 2,
        },
        fillcolor: "grey",
  
      };
  
      const espPositive = {
        type: "rect",
  
        x0: inside_diameter[index],
  
        y0: y0[index],
  
        x1: outside_diameter[index],
  
        y1: y1[index],
  
        line: {
          color: "black",
          dash: "dashdot",
  
          width: 2,
        },
        fillcolor: "grey",
  
      };
     
      const oceanPositive = {
        type: "rect",
  
        x0: outside_diameter[index],
  
        y0: y0[index],
  
        x1: 15,
  
        y1: y1[index],
        line: {
            color: "transparent",
          },
          fillcolor: "#01e7ff",
    
  
      };
  
      const oceanNegative = {
        type: "rect",
  
        x0: -outside_diameter[index],
  
        y0: y0[index],
  
        x1: -15,
  
        y1: y1[index],
        line: {
            color: "transparent",
          },
          fillcolor: "#01e7ff",
    
  
      };
  
      shapesExternalGeometry.push(externalShape, espNegative, espPositive, oceanPositive, oceanNegative);
    }
  
    allShapesExternal.push(...shapesExternalGeometry,...shapeOpenHole);
    return allShapesExternal
  };
  
/* Function to draw all External Geometry */
  export const drawAllInternalGeometry = () => {
    let shapeAllGeometries = []
    shapeAllGeometries.push(...drawInternalGeometry(), ...drawExternalGeometry())
    console.log(shapeAllGeometries)
    return shapeAllGeometries
  }