// #  Main Imports
import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// # Import Component Style
import "../../pages/pages.css";

//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";

// # Contexts
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";

function CaseDeletionConfirmation(props) {
  const history = useHistory();

  const { id } = useParams();
  const { isModalOpen,setIsModalOpen } = useContext(ModalContext);
  const { casesData, setCasesData } = useContext(SearchContext);

  // Case Deletion function
  function deleteCase() {
    const successURL = "/cases";
    const filterCase = casesData.filter((item) => item.id !== Number(id));
    setCasesData(filterCase);
    setIsModalOpen(false);
    history.push(successURL);
  }

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);

}
  return (
    <div>
      <p className="modal_text_message"> Confirm deletion of Case {id}? </p>
      {/* Cancel button */}
      <a href={"/cases"}>
        {/* //TODO: Check how to do without reload */}
          <button className='modal_cancel-button'
              onClick={closeModal}
              //specific styling
              style={{backgroundColor: darkColors.red}}>
              <i className='fas fa-times'/> Cancel
          </button>
          </a>
     
      {/* Confirm button */}
      <button
        className="modal_confirm-button"
        //specific styling
        style={{ backgroundColor: darkColors.green }}
        onClick={deleteCase}
      >
        <i className="fas fa-check" /> Confirm
      </button>
    </div>
  );
}

export default CaseDeletionConfirmation;
