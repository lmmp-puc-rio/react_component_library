
/*Accordion Data - SmallFrame*/
export const dataStructure = [
  {
    title: "Entrada de dados",
    id: "1",
    inputData: [
      {
        name: "Informações gerais",
        route: `/case/1/general_info`,
        // error: errorInfo,
      },
      {
        name: "Cenário",
        route: `/case/2/scenery`,
        // error: errorScenery,
      },
      {
        name: "Geometria",
        route: `/case/3/geometry/external-geometry`,
      },
      {
        name: "Sequência de Bombeio",
        route: `/case/4/pumpsequence/fluids`,
      },
      {
        name: "Perfil Térmico",
        route: `/case/5/thermal_profile/surface-temperature`,
      },
      {
        name: "Simulação",
        route: `/case/6/simulation`,
      },
    ],
  },
  {
    title: "Resultados",
    id: "2",
    // inputDataResults: dataSimulation
    //   ? [
    //       {
    //         name: `Simulação em andamento...  ${dataSimulation.execution_percentage}`,
    //       },
    //     ]
    //   : [{ name: "Nenhuma simulação iniciada" }],
  },
];
