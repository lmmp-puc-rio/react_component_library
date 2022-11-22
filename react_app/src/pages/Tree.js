import react from "react";
import TreeComponent from "../components/common/treeComponent";
import "./pages.css";
import "./styles/Tree.css";
const Tree = () => {
  const dados = {
    name: "Árvore",
    icon: "",
    info: [
      {
        name: "UO-Buzios",
        icon: "",
        info: [
          {
            name: "Campo - Buzios",
            icon: "",
            info: [
              { name: "poço 1", icon: "", info: null },
              { name: "poço 2", icon: "", info: null },
              { name: "poço 3", icon: "", info: null },
              { name: "poço 4", icon: "", info: null },
            ],
          },
          {
            name: "Campo - Buzios",
            icon: "",
            info: [
              { name: "poço 1", icon: "", info: null },
              { name: "poço 2", icon: "", info: null },
              { name: "poço 3", icon: "", info: null },
              { name: "poço 4", icon: "", info: null },
            ],
          },
        ],
      },
      { name: "UO-Angra", icon: "", info: [
        {name:"Poço Teste",icon:"", info:null}
      ] },
    ],
  };

  return <TreeComponent name={dados.name} data={dados.info} />;
};

export default Tree;

// { name: "UO-Buzios",
// icon: "",
// info: [
//   { name: "Campo - Buzios",
//     icon: "",
//     info: [
//       { name: "poço 1", icon: "", info: null},
//       { name: "poço 2", icon: "", info: null},
//       { name: "poço 3", icon: "", info: null},
//       { name: "poço 4", icon: "", info: null},
//     ],
//   },
//   { name: "Campo - Buzios",
//     icon: "",
//     info: [
//       { name: "poço 1", icon: "", info: null},
//       { name: "poço 2", icon: "", info: null},
//       { name: "poço 3", icon: "", info: null},
//       { name: "poço 4", icon: "", info: null},
//     ],
//   },
// ],
// },
// { name: "UO-Angra",
// icon: "",
// info: null
// },
