/* Tree Component: POÇOWEB tree
filtered by the search, and allowing the user to navigate the tree elements, opening the
folders and cliclikng the wells to select them */

// # Main Import
import React, { useState } from "react";
import { Link } from "react-router-dom";

// # Contexts

// # Import Component Style
import "./dynamicTree.css";

function DynamicTree(props) {


  const [show, setShow] = useState(true);

  //State to show icon or input
  const [input, setInput]= useState(true)

  const name = props.name;
  const data = props.data;

  const sign = show ? (
    <i className="fas fa-folder-open"></i>
  ) : (
    <i className="fas fa-folder"></i>
  );


  const toggleMenu = () => {
    setShow(!show);
  };
  const icon = input? <input type="checkbox"/> : <i className="fas fa-folder"></i>




  const treeWrap = data.map((item, index) => {
    if (item.info === null) {
      return (
        <div key={index} className="tree-child__container">
          <button className="bttn-tree-child__container">
           {icon}
          </button>
          <Link
            className="tree-item-text"
            /* to={`/well/${item.name}/projects`} */
          >
            {item.name}
          </Link>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <DynamicTree name={item.name} data={item.info} />
        </div>
      );
    }
  });

  return (
    <div className="dynamic-tree-header__container">
      <div className="tree-header__container-bttn-text">
        <button onClick={toggleMenu} className="bttn-tree-header__container">
          {sign}

          <p className="tree-header-text">{name}</p>
        </button>
      </div>
      { show && treeWrap}
    </div>
  );
}

export default DynamicTree;