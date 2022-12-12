import React, { useContext } from 'react';
// #  Local SubComponents & utils
import { CardProjects } from "../components/common";

// # Import Component Style
/* import "./pages.css"; */
import { darkColors } from "../components/common";

// # Import Carousel Component
import CarouselComponent from "../components/carousel";

// # Context
import { SearchContext } from "../contexts/SearchContext"
import Login from '../services/SqlApi';
const Projects = (props) => {
  console.log(Login("teste1","1234"))
  const { projectsData } = useContext(SearchContext)
  // Set Card Object
/*   const data = [
    {
      title: "Trecho 1",
      description: "Projeto de cimentação do Trecho 1",
      card_name: "card1",
      created_name: "Teste 1",
      modified_name: "Teste 1",
      created_data: "01/10/2022",
      modified_data: "18/10/2022",
    },
    {
      title: "Trecho 2",
      description: "Projeto de cimentação do Trecho 2",
      card_name: "card2",
      created_name: "Teste 2",
      modified_name: "Teste 2",
      created_data: "10/12/2022",
      modified_data: "20/12/2022",
    },
    {
      title: "Trecho 3",
      description: "Projeto de cimentação do Trecho 3",
      card_name: "card3",
      created_name: "Teste 3",
      modified_name: "Teste 3",
      created_data: "25/12/2022",
      modified_data: "30/12/2022",
    },
  ]; */

  // Set Actions Buttons Card
  const actionButtomCard = {
    actions: [
      {
        tooltip: "Edit Project",
        icon: "fas fa-edit",
        key: "edit_case_button_",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
      {
        tooltip: "Delete Project",
        icon: "fas fa-trash",
        key: "delete_case_button_",
        backgroundColor: darkColors.red,
        color: darkColors.white,
      },
    ],
  };

  return (
    <div>
      <CarouselComponent>
        {projectsData.map((item) => (
          <div className="page">
            <CardProjects data={item} actionButtom={actionButtomCard} />
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default Projects;

