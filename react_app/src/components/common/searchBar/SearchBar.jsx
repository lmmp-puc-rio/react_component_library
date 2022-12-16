// # Main Import
import React, { useState, useContext } from "react";

// # Contexts
import { SearchContext } from "../../../contexts/SearchContext";

// # Import datas of Projects and Cases
import { dataCases } from "../../../data/cases";
import { dataProjects } from "../../../data/projects";

// # Import Component Style
import "./SearchBar.css";

export default function SearchBar() {
  const {
    setProjectsData,
    setCasesData,
    updateStateProjects,
    updateStateCases,
  } = useContext(SearchContext);

  //State responsible for storing the Input Value
  const [wordValue, setWordValue] = useState("");


// Function that update the status of Projects and Cases according to the route
  const upgradeStates = (value) => {
    updateStateCases(value);
    updateStateProjects(value);
  };

//  Function that cleans the Input and renews the States after the click
  const clearInput = () => {
    setWordValue("");
    setCasesData(dataCases);
    setProjectsData(dataProjects);
  };

  return (
    <div className="search__container">
      <button className="search__btn">
        {wordValue.length === 0 ? (
          <i class="fas fa-search"></i>
        ) : (
          <i class="far fa-times-circle" onClick={clearInput}></i>
        )}
      </button>
      <div className="search__container--input">
        <input
          type="text"
          value={wordValue}
          onChange={({ target }) => {
            setWordValue(target.value);
            upgradeStates(target.value);
          }}
          placeholder={"Busque um caso"} // TODO: PASS THE TEXT IN PLACEHOLDER USING PROPS
        />
      </div>
    </div>
  );
}