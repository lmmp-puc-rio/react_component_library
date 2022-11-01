import React, { useContext } from "react";

// #  Local SubComponents & utils
import { CardCases } from "../components/common";

// # Import Component Style
import "./pages.css";
import { darkColors } from "../components/common";

// # Import Carousel Component
import CarouselComponent from "../components/carousel";

// # Context
import { SearchContext } from "../contexts/SearchContext";
import { ModalContext } from "../contexts/ModalContext";

function Cases(props) {
  const { casesData } = useContext(SearchContext);
  const { setIsModalOpen } = useContext(ModalContext);
  /* 
  const data = [
    {
      img: "https://cenariosgas.editorabrasilenergia.com.br/wp-content/uploads/sites/6/2018/09/po%C3%A7o-transparente.png",
      title: "Trecho 1",
      description: "Projeto de cimentação do Trecho 1",
      card_name: "card1",
      created_name: "Teste 1",
      modified_name: "Teste 1",
      created_data: "01/10/2022",
      modified_data: "18/10/2022",
      fluids: [
        "FPBNA 9.0 ppg",
        "Colchão Espaçador 10 ppg",
        "Pasta Conv. 15ppg",
      ],
    },
    {
      img: "https://cenariosgas.editorabrasilenergia.com.br/wp-content/uploads/sites/6/2018/09/po%C3%A7o-transparente.png",
      title: "Trecho 2",
      description: "Projeto de cimentação do Trecho 2",
      card_name: "card2",
      created_name: "Teste 2",
      modified_name: "Teste 2",
      created_data: "10/12/2022",
      modified_data: "20/12/2022",
      fluids: [
        "FPBNA 9.0 ppg",
        "Colchão Espaçador 10 ppg",
        "Pasta Conv. 15ppg",
      ],
    },
    {
      img: "https://cenariosgas.editorabrasilenergia.com.br/wp-content/uploads/sites/6/2018/09/po%C3%A7o-transparente.png",
      title: "Trecho 3",
      description: "Projeto de cimentação do Trecho 3",
      card_name: "card2",
      created_name: "Teste 3",
      modified_name: "Teste 3",
      created_data: "25/12/2022",
      modified_data: "30/12/2022",
      fluids: [
        "FPBNA 9.0 ppg",
        "Colchão Espaçador 10 ppg",
        "Pasta Conv. 15ppg",
      ],
    }
  ]; */

  // Set Actions Buttons Card
  const actionButtomCard = {
    actions: [
      {
        tooltip: "Edit Case",
        icon: "fas fa-edit",
        callback: null,
        key: "edit_case_button_",
        route: "/case/",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
      {
        tooltip: "Delete Case",
        icon: "fas fa-trash",
        callback: setIsModalOpen,
        key: "delete_case_button_",
        route: "/cases/delete/",
        backgroundColor: darkColors.red,
        color: darkColors.white,
      },
      {
        tooltip: "Duplicate Case",
        icon: "fas fa-copy",
        callback: setIsModalOpen,
        key: "duplicate_case_button_",
        route: "/case/",
        backgroundColor: darkColors.blue,
        color: darkColors.white,
      },
    ],
  };

  return (
    <div>
      <CarouselComponent>
        {casesData.map((item) => (
          <div className="page">
            <CardCases data={item} actionButtom={actionButtomCard} />
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
}

export default Cases;
