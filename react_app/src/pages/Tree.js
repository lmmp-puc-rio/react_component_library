import react from "react";
import TreeComponent from "../components/common/treeComponent";
import './pages.css'
const Tree = () => {
  const dados = [
  {
     name: "UO-Buzios",
      info: [
        {
          name: "Campo - Buzios",
          info: [
            { name: "poço 1", info: null, icon: "" ,},
            { name: "poço 2", info: null, icon: "" ,},
            { name: "poço 3", info: null, icon: "" ,},
            { name: "poço 4", info: null, icon: "" ,},
          ],
          
        },
  
      ],
      icon: "",
    },
    {name:"UO-Angra",
      info : [],

    },
    
  ];
  return <TreeComponent data={dados} />;
};

export default Tree;
