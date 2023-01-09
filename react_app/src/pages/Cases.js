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

  // Set Actions Buttons Card
  const actionButtomCard = {
    actions: [
      {
        tooltip: "Edit Case",
        icon: "fas fa-edit",
        callback: setIsModalOpen,
        key: "edit_case_button_",
        route: "/cases/edit/",
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
