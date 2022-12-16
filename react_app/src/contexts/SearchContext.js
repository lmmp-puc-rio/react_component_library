// # Main Import
import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// # Import datas of Projects and Cases
import { dataProjects }  from "../data/projects";
import { dataCases }  from "../data/cases";

// Create Context Object
const SearchContext = createContext();

// Hook
export default function useSearch() {
// Projects, Cases and Word Value States
  const [projectsData, setProjectsData] = useState([]);
  const [casesData, setCasesData] = useState([]);
  const [wordValue, setWordValue] = useState([]);


// Constant responsible for bringing the Page Route
  const location = useLocation();

// Function responsible for bringing all Projects related to the Well
function getProjects() {
    const projectsResponse = dataProjects;
    setProjectsData([...projectsResponse]);
  }

  // Function responsible for bringing all Cases related to the Project
 function getCases() {
    const casesReponse = dataCases;
    setCasesData([...casesReponse]);
  }

// Functions responsible for bringing the Projects and Cases filtered from the Input Value
// TODO: REVIEW THE LOGIC
  function updateStateProjects(value) {
    const searchWord = value;
    setWordValue(searchWord);
    const newFilter = projectsData.filter((value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setProjectsData(newFilter);
    if (!searchWord) {
      setProjectsData(dataProjects);
    }
  };

  function updateStateCases(value) {
    const searchWord = value;
    setWordValue(searchWord);
    const newFilter = casesData.filter((value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setCasesData(newFilter);
    if (!searchWord) {
      setCasesData(dataCases);
    }
  };

  useEffect(() => {
    getProjects();
    getCases();
    if (location.pathname === "/cases") {
      updateStateCases();
      }
    updateStateProjects();
  }, []);

  return { projectsData, setProjectsData, casesData, setCasesData, updateStateProjects, updateStateCases };
}

// Specific Context Provider
function SearchProvider({ children }) {
  const { projectsData, setProjectsData, casesData, setCasesData,  updateStateProjects, updateStateCases } = useSearch();

  return (
    <SearchContext.Provider
      value={{ projectsData, setProjectsData, casesData, setCasesData,  updateStateProjects, updateStateCases }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
